



let shownCount = 0;
let currentSearchFilter = "";
let currentChannelKey = "kapamilya";
let focusIndex = 0;
let focusableButtons = [];
let tabs = ["live", "movies", "series"];
let currentTabIndex = 0;

function renderChannelButtons(filter = "", preserveScroll = false) {
  currentSearchFilter = filter;

  const list = document.getElementById("channelList");
  const scrollTop = preserveScroll ? list.scrollTop : 0;
  list.innerHTML = "";
  shownCount = 0;

  const sortedChannels = Object.entries(channels).sort((a, b) =>
    a[1].name.localeCompare(b[1].name)
  );

  sortedChannels.forEach(([key, channel]) => {
    if (
      !channel.name.toLowerCase().includes(filter.toLowerCase()) ||
      (channel.group && channel.group.toLowerCase() !== tabs[currentTabIndex])
    )
      return;

    const btn = document.createElement("button");
    btn.className = "channel-button";
    btn.setAttribute("data-key", key);
    btn.innerHTML = `
      <img src="${channel.logo}" class="channel-logo" alt="${channel.name}">
      <span>${channel.name}</span>
    `;

    if (currentChannelKey === key) {
      btn.innerHTML += `<span style="color: #00FF00; font-weight: bold; margin-left: 8px;">Now Playing...</span>`;
    }

    btn.onclick = () => loadChannel(key);
    list.appendChild(btn);
    shownCount++;
  });

  focusableButtons = Array.from(document.querySelectorAll(".channel-button"));
  list.scrollTop = scrollTop;
  updateFocus();

  const countDisplay = document.getElementById("channelCountText");
  if (countDisplay) {
    countDisplay.textContent = `${shownCount} channel${shownCount !== 1 ? "s" : ""} found`;
  }
}

function loadChannel(key) {
  const channel = channels[key];
  currentChannelKey = key;

  renderChannelButtons(currentSearchFilter, true); // ✅ Preserve scroll

  const channelInfo = document.getElementById("channelInfo");
  if (channelInfo) {
    channelInfo.textContent = `${channel.name} is playing...`;
    channelInfo.style.color = "#00FF00";
  }

  const drmConfig = {};
  let playerType = "hls";

  if (channel.type === "widevine") {
    drmConfig.widevine = { url: channel.licenseServerUri };
    playerType = "dash";
  } else if (channel.type === "clearkey") {
    drmConfig.clearkey = {
      keyId: channel.keyId,
      key: channel.key,
    };
    playerType = "dash";
  } else if (channel.type === "dash") {
    playerType = "dash";
  }

  jwplayer("video").setup({
    file: channel.manifestUri,
    type: playerType,
    drm: Object.keys(drmConfig).length ? drmConfig : undefined,
    autostart: true,
    width: "100%",
    aspectratio: "16:9",
    stretching: "fill",
  });

  jwplayer("video").on("error", function (e) {
    console.error("JWPlayer Error:", e.message);
  });
}

// TV remote + keyboard nav
document.addEventListener("keydown", function (e) {
  if (e.target.tagName === "INPUT") return;
  if (focusableButtons.length === 0) return;

  if (e.key === "ArrowDown") {
    focusIndex = (focusIndex + 1) % focusableButtons.length;
    updateFocus();
    e.preventDefault();
  } else if (e.key === "ArrowUp") {
    focusIndex = (focusIndex - 1 + focusableButtons.length) % focusableButtons.length;
    updateFocus();
    e.preventDefault();
  } else if (e.key === "Enter") {
    focusableButtons[focusIndex].click();
    e.preventDefault();
  } else if (e.key === "ArrowLeft") {
    switchTab(-1);
    e.preventDefault();
  } else if (e.key === "ArrowRight") {
    switchTab(1);
    e.preventDefault();
  } else if (e.key === "Backspace") {
    document.getElementById("search").focus();
    e.preventDefault();
  }
});

function updateFocus() {
  focusableButtons.forEach((btn, i) => {
    if (i === focusIndex) {
      btn.classList.add("focused");
      btn.scrollIntoView({ block: "center" });
    } else {
      btn.classList.remove("focused");
    }
  });
}

function switchTab(direction) {
  currentTabIndex = (currentTabIndex + direction + tabs.length) % tabs.length;

  tabs.forEach((tab, i) => {
    const el = document.getElementById(`tab-${tab}`);
    if (el) el.classList.toggle("active", i === currentTabIndex);
  });

  focusIndex = 0;
  renderChannelButtons(currentSearchFilter);
}

// Handle search bar input and clear button
window.onload = () => {
  const searchInput = document.getElementById("search");
  const clearBtn = document.getElementById("clearSearch");

  searchInput.value = "";
  clearBtn.style.display = "none";

  searchInput.addEventListener("input", () => {
    const val = searchInput.value.trim();
    clearBtn.style.display = val ? "block" : "none";
    renderChannelButtons(val);
    focusIndex = 0;
    updateFocus();
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    renderChannelButtons("");
    focusIndex = 0;
    updateFocus();
  });

  // Initial render
  renderChannelButtons();
  if (currentChannelKey && channels[currentChannelKey]) {
    loadChannel(currentChannelKey);
  }
};
