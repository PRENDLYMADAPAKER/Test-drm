// Basic login + device/expiration checker
function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  firebase.database().ref("users/" + user + "/devices").once("value", snapshot => {
    const data = snapshot.val();
    if (!data || data.password !== pass) {
      document.getElementById("login-error").innerText = "Invalid credentials.";
      return;
    }

    // Expiration
    const expiry = new Date(data.expiration);
    if (new Date() > expiry) {
      document.getElementById("login-error").innerText = "Account expired.";
      return;
    }

    // Device limit
    const sessionId = btoa(navigator.userAgent + Date.now());
    firebase.database().ref("users/" + user + "/sessions").once("value", s => {
      let sessions = s.val() || {};
      if (Object.keys(sessions).length >= data.device_limit) {
        document.getElementById("login-error").innerText = "Device limit reached.";
        return;
      }
      sessions[sessionId] = true;
      firebase.database().ref("users/" + user + "/sessions").set(sessions);
      document.getElementById("login-section").style.display = "none";
      document.getElementById("app").style.display = "block";
      loadPlaylists();
    });
  });
}

// Parse M3U from GitHub
async function loadPlaylists() {
  const urls = [
    {
      url: "https://raw.githubusercontent.com/PRENDLYMADAPAKER/ANG-KALAT-MO/main/UDPTV.m3u",
      category: "UDPTV Live Streams",
      useProxy: true
    },
    {
      url: "https://raw.githubusercontent.com/PRENDLYMADAPAKER/ANG-KALAT-MO/main/TheTVApp.m3u",
      category: "TheTVApp",
      useProxy: false
    }
  ];

  let allChannels = [];

  for (const source of urls) {
    const res = await fetch(source.url);
    const text = await res.text();
    const lines = text.split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith("#EXTINF")) {
        const name = lines[i].split(",")[1]?.trim() || "Untitled";
        const logoMatch = lines[i].match(/tvg-logo="([^"]+)"/);
        const logo = logoMatch ? logoMatch[1] : "https://dummyimage.com/100x100/000/fff.png&text=No+Logo";
        
        let streamURL = lines[i + 1];
        if (!streamURL || !streamURL.startsWith("http")) continue;

        // ✅ Apply proxy only for UDPTV
        if (source.useProxy) {
          streamURL = "https://udptv-proxy-server.onrender.com/proxy?url=" + encodeURIComponent(streamURL);
        }

        allChannels.push({
          name,
          url: streamURL,
          category: source.category,
          logo
        });
      }
    }
  }

  renderCategories(allChannels);
}

// Netflix-style UI
function renderCategories(channels) {
  const grouped = {};
  channels.forEach(c => {
    if (!grouped[c.category]) grouped[c.category] = [];
    grouped[c.category].push(c);
  });

  const catContainer = document.getElementById("categories");
  catContainer.innerHTML = "";

  for (const [cat, chs] of Object.entries(grouped)) {
    const row = document.createElement("div");
    row.className = "category-row";
    row.innerHTML = `<h3>${cat}</h3><div class="channel-row">` +
      chs.map(c => `<div class="channel" onclick="play('${c.url}')">
        <img src="${c.logo}" /><p>${c.name}</p></div>`).join("") +
      `</div>`;
    catContainer.appendChild(row);
  }
}

// JWPlayer setup
function play(url) {
  jwplayer("video").setup({
    file: url,
    width: "100%",
    aspectratio: "16:9",
    autostart: true
  });
}
