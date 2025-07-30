const channels = {
  gma: {
    name: "GMA 7",
    type: "widevine",
    manifestUri: "http://143.44.136.110:6910/001/2/ch...nifest.mpd?virtualDomain=001.live_hls.zte.com",
    licenseServerUri: "http://143.44.136.74:9443/widevine/?deviceId=02:00:00:00:00:00",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/GMA_Network_Logo_Vector.svg/1200px-GMA_Network_Logo_Vector.svg.png",
   },
 
  pbarush: {
    name: "PBA Rush",
    type: "clearkey",
    manifestUri: "https://rumble.com/live-hls-dvr/6u5e2k/playlist.m3u8",
    keyId: "76dc29dd87a244aeab9e8b7c5da1e5f3",
    key: "95b2f2ffd4e14073620506213b62ac82",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cd/PBA_Rush_logo.png",
},

  tv5: {
    name: "TV 5 HD",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd",
    keyId: "2615129ef2c846a9bbd43a641c7303ef",
    key: "07c7f996b1734ea288641a68e1cfdc4d",
    logo: "https://vignette.wikia.nocookie.net/russel/images/f/f9/TV5_Logo_2011.png/revision/latest?cb=20161204035016",
  },

  kapamilya: {
    name: "Kapamilya Channel HD",
    type: "clearkey",
    manifestUri:
      "https://d1uf7s78uqso1e.cloudfront.net/out/v1/efa01372657648be830e7c23ff68bea2/index.mpd",
    keyId: "bd17afb5dc9648a39be79ee3634dd4b8",
    key: "3ecf305d54a7729299b93a3d69c02ea5",
    logo: "https://cms.cignal.tv/Upload/Images/Kapamilya%20Channel%20Logo%20alpha.png",
  },

  hbo: {
    name: "HBO",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd",
    keyId: "d47ebabf7a21430b83a8c4b82d9ef6b1",
    key: "54c213b2b5f885f1e0290ee4131d425b",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/HBO_logo.svg",
  },

  hbofam: {
    name: "HBO Family",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd",
    keyId: "872910c843294319800d85f9a0940607",
    key: "f79fd895b79c590708cf5e8b5c6263be",
    logo: "https://www.pikpng.com/pngl/m/41-419283_hbo-family-logo-hbo-family-logo-png-clipart.png",
  },

  hbohits: {
    name: "HBO Hits",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd",
    keyId: "b04ae8017b5b4601a5a0c9060f6d5b7d",
    key: "a8795f3bdb8a4778b7e888ee484cc7a1",
    logo: "https://cms.cignal.tv/Upload/Images/HBO%20Hits-1.jpg",
  },

  hbosig: {
    name: "HBO Signature",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd",
    keyId: "a06ca6c275744151895762e0346380f5",
    key: "559da1b63eec77b5a942018f14d3f56f",
    logo: "https://www.nicepng.com/png/detail/233-2333069_hbo-signature-logo-png.png",
  },

  cinemax: {
    name: "Cinemax",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd",
    keyId: "b207c44332844523a3a3b0469e5652d7",
    key: "fe71aea346db08f8c6fbf0592209f955",
    logo: "https://logodix.com/logo/2138572.png",
  },

  cinemaone: {
    name: "Cinema One",
    type: "clearkey",
    manifestUri:
      "https://d9rpesrrg1bdi.cloudfront.net/out/v1/93b9db7b231d45f28f64f29b86dc6c65/index.mpd",
    keyId: "58d0e56991194043b8fb82feb4db7276",
    key: "d68f41b59649676788889e19fb10d22c",
    logo: "https://download.logo.wine/logo/Cinema_One/Cinema_One-Logo.wine.png",
  },
cartoonnetworkhd: {
  name: "Cartoon Network HD",
  type: "clearkey",
  manifestUri: "https://live-atv-cdn.izzigo.tv/4/out/u/dash/CARTOONNETWORKHD/default.mpd",
  keyId: "85d06ba283f3b18bb14f9f8d59b8fb82",
  key: "6659fed472544289adee986c1d33fa79",
  logo: "https://logos-world.net/wp-content/uploads/2021/08/Cartoon-Network-Logo-2010-present.png",
},
  cartoonnetwork: {
    name: "Cartoon Network",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd",
    keyId: "a2d1f552ff9541558b3296b5a932136b",
    key: "cdd48fa884dc0c3a3f85aeebca13d444",
    logo: "https://logos-world.net/wp-content/uploads/2021/08/Cartoon-Network-Logo-2010-present.png",
  },

  animax: {
    name: "Animax",
    type: "clearkey",
    manifestUri:
      "https://tglmp01.akamaized.net/out/v1/de55fad9216e4fe7ad8d2eed456ba1ec/manifest.mpd",
    keyId: "edf1a715de9748638dd2fad75a419af2",
    key: "2f5a3199b26e9b693ae881af7ff864cf",
    logo: "https://iconape.com/wp-content/files/px/285466/svg/animax-logo-logo-icon-png-svg.png",
  },

  tapmovies: {
    name: "Tap Movies",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapmovies_hd1.mpd",
    keyId: "71cbdf02b595468bb77398222e1ade09",
    key: "c3f2aa420b8908ab8761571c01899460",
    logo: "https://cms.cignal.tv/Upload/Images/Tap-movies.jpg",
  },

  tapactionflix: {
    name: "Tap Action Flix",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd",
    keyId: "bee1066160c0424696d9bf99ca0645e3",
    key: "f5b72bf3b89b9848de5616f37de040b7",
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/philippines/tap-action-flix-ph.png?raw=true",
  },

  animexhidive: {
    name: "Anime X Hidive",
    type: "hls",
    manifestUri: "https://amc-anime-x-hidive-1-us.tablo.wurl.tv/playlist.m3u8",
    logo: "https://www.tablotv.com/wp-content/uploads/2023/12/AnimeXHIDIVE_official-768x499.png",
  },

  disneychannel: {
    name: "Disney Channel",
    type: "clearkey",
    manifestUri:
      "https://uselector.cdn.intigral-ott.net/DIS/DIS.isml/manifest.mpd",
    keyId: "72800c62fcf2bfbedd9af27d79ed35d6",
    key: "b6ccb9facb2c1c81ebe4dfaab8a45195",
    logo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/20768ccf-f5b0-4b5e-bd31-ad33d6cf6a35/dei91io-5b3a14cb-c0c8-4033-b487-3574252333bd.jpg/v1/fill/w_1191,h_671,q_70,strp/disney_channel_logo__blue__by_littlekj20_dei91io-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMwIiwicGF0aCI6IlwvZlwvMjA3NjhjY2YtZjViMC00YjVlLWJkMzEtYWQzM2Q2Y2Y2YTM1XC9kZWk5MWlvLTViM2ExNGNiLWMwYzgtNDAzMy1iNDg3LTM1NzQyNTIzMzNiZC5qcGciLCJ3aWR0aCI6Ijw9MTI5NiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CDhwbyrZ7hWQVXvarfBL8eDRzfm1mjqVps1IqVo2j3g",
  },

  disneyxdd: {
    name: "Disney XD",
    type: "clearkey",
    manifestUri:
      "https://a53aivottepl-a.akamaihd.net/pdx-nitro/live/clients/dash/enc/jts4tzzv1k/out/v1/8a5b29f7068c415aa371ea95743382e6/cenc.mpd",
    keyId: "39cebece8b36640f9ba3f248ecfdf86a",
    key: "fad936249e036830aa5bef41bec05326",
    logo: "https://logos-world.net/wp-content/uploads/2023/06/Disney-XD-Logo-2009.png",
  },

  disneyjr: {
    name: "Disney Jr.",
    type: "clearkey",
    manifestUri:
      "https://uselector.cdn.intigral-ott.net/DJR/DJR.isml/manifest.mpd",
    keyId: "f5df57914a0922d5d5ed6b0a4af6290a",
    key: "c62b10a180d1770a355b3c4cb6506ca0",
    logo: "https://www.pinpng.com/pngs/m/418-4182937_disney-junior-tv-logo-hd-png-download.png",
  },

  tfcasia: {
    name: "TFC Asia",
    type: "clearkey",
    manifestUri:
      "https://d1facupi3cod3q.cloudfront.net/out/v1/e3633f8591e248b0af1af15a474bfa4a/index.mpd",
    keyId: "9568cc84e1d944f38eac304517eab6fd",
    key: "f12142af8f39b3bab79d3679d3665ebe",
    logo: "https://img.mytfc.com/cmsroot/abscms/media/mytfctv/channels/iwantoriginals/iwanttfc_channel_thumbnail-768x430.png?ext=.png",
  },

  cnn: {
    name: "CNN",
    type: "clearkey",
    manifestUri:
      "https://linearjitp-playback.astro.com.my/dash-wv/linear/2503/default_ott.mpd",
    keyId: "1b618a291cece44c9845dddfc4fd9b10",
    key: "bf7e1b97555c4acb7455f711b2a9ff16",
    logo: "https://laguia.tv/_nuxt/img/CNN_512.0e91aae.png",
  },

  anc: {
    name: "ANC",
    type: "clearkey",
    manifestUri:
      "https://d3cjss68xc4sia.cloudfront.net/out/v1/89ea8db23cb24a91bfa5d0795f8d759e/index.mpd",
    keyId: "4bbdc78024a54662854b412d01fafa16",
    key: "6039ec9b213aca913821677a28bd78ae",
    logo: "https://data-corporate.abs-cbn.com/corp/medialibrary/dotcom/corp%20news%20sports%202020/anc%20station%20id/anc%20goes%20global_2.jpg",
  },

  axn: {
    name: "AXN",
    type: "clearkey",
    manifestUri:
      "https://linearjitp-playback.astro.com.my/dash-wv/linear/2303/default_ott.mpd",
    keyId: "c24a7811d9ab46b48b746a0e7e269210",
    key: "c321afe1689b07d5b7e55bd025c483ce",
    logo: "https://icon2.cleanpng.com/20180702/pfc/kisspng-axn-television-channel-sony-channel-television-sho-axn-5b3a0ac39f5e85.1062681315305304996528.jpg",
  },
  crave1: {
    name: "Crave 1",
    type: "clearkey",
    manifestUri:
      "https://live-crave.video.9c9media.com/137c6e2e72e1bf67b82614c7c9b216d6f3a8c8281748505659713/fe/f/crave/crave1/manifest.mpd",
    keyId: "4a107945066f45a9af2c32ea88be60f4",
    key: "df97e849d68479ec16e395feda7627d0",
    logo: "https://the-bithub.com/crave1",
  },
  crave2: {
    name: "Crave 2",
    type: "clearkey",
    manifestUri:
      "https://live-crave.video.9c9media.com/ab4332c60e19b6629129eeb38a2a6ac6db5df2571721750022187/fe/f/crave/crave2/manifest.mpd",
    keyId: "4ac6eaaf0e5e4f94987cbb5b243b54e8",
    key: "8bb3f2f421f6afd025fa46c784944ad6",
    logo: "https://the-bithub.com/crave",
  },

  cinemo: {
    name: "Cinemo",
    type: "clearkey",
    manifestUri:
      "https://d1bail49udbz1k.cloudfront.net/out/v1/3a895f368f4a467c9bca0962559efc19/index.mpd",
    keyId: "aa8aebe35ccc4541b7ce6292efcb1bfb",
    key: "daab1df109d22fc5d7e3ec121ddf24e5f",
    logo: "https://th.bing.com/th/id/OIP.YQlhh4Welb3cggK1H7oE3QHaEF?rs=1&pid=ImgDetMain",
  },

  amc: {
    name: "AMC+",
    type: "clearkey",
    manifestUri:
      "https://a148aivottlinear-a.akamaihd.net/OTTB/PDX/clients/dash/enc/0f5clvxn6o/out/v1/d5a953bb19734fa3baa1776266887fcb/cenc.mpd",
    keyId: "59a51164c2c915352f04066a06f6e807",
    key: "eba5cc362d1d63c0fe6460febca0fd11",
    logo: "https://shop.amc.com/cdn/shop/products/AMCP-LOGO-100011-FR-RO_1500x.png?v=1650990755",
  },

  amcthriller: {
    name: "AMC Thrillers",
    type: "hls",
    manifestUri:
      "https://436f59579436473e8168284cac5d725f.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/Plex_RushByAMC/playlist.m3u8",
    logo: "https://provider-static.plex.tv/6/epg/channels/logos/gracenote/6e7af423114c9f735d17e142783f233a.png",
  },

  paramount: {
    name: "Paramaount Movies",
    type: "hls",
    manifestUri:
      "https://stitcher.pluto.tv/stitch/hls/channel/5cb0cae7a461406ffe3f5213/master.m3u8?deviceType=web&servertSideAds=false&deviceMake=safari&deviceVersion=1&deviceId=spencer&appVersion=1&deviceDNT=0&deviceModel=web&sid=4a87ffde-1b23-11f0-bc66-96648866fcff",
    logo: "https://logodownload.org/wp-content/uploads/2014/07/paramount-logo-1.png",
  },

  gmapinoytv: {
    name: "GMA PINOY TV",
    type: "none",
    manifestUri:
      "https://amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono-dzsx9.amagi.tv/index.mpd",
    logo: "https://aphrodite.gmanetwork.com/entertainment/articles/900_675_Main_Image22_1109_-20221109181156.jpg",
  },

  tvnprem: {
    name: "TVN Premium",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd",
    keyId: "e1bde543e8a140b38d3f84ace746553e",
    key: "b712c4ec307300043333a6899a402c10",
    logo: "https://blog.kakaocdn.net/dn/SNPof/btqwO6OKJbH/kGkD29gebJ6bUFjri4E6Ak/img.jpg",
  },

  tvnmovies: {
    name: "TVN Movies",
    type: "clearkey",
    manifestUri:
      "https://linearjitp-playback.astro.com.my/dash-wv/linear/2406/default_ott.mpd",
    keyId: "8e269c8aa32ad77eb83068312343d610",
    key: "d12ccebafbba2a535d88a3087f884252",
    logo: "https://yt3.ggpht.com/a/AATXAJy1C8c3pOmn9lAsPovaRcKqIvw2OAAfHK-HtA=s900-c-k-c0xffffffff-no-rj-mo",
  },

  tvnpinoy: {
    name: "TVN Movies Pinoy",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd",
    keyId: "2e53f8d8a5e94bca8f9a1e16ce67df33",
    key: "3471b2464b5c7b033a03bb8307d9fa35",
    logo: "https://th.bing.com/th/id/OIP.7i_NEUaiqj2UtFHiHjzzhgHaF0?r=0&rs=1&pid=ImgDetMain",
  },

  wwe: {
    name: "WWE",
    type: "clearkey",
    manifestUri:
      "https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc106wh3yw)/master.mpd",
    keyId: "00208c93f4358213b52220898b962385",
    key: "8ae6063167228e350dd132d4a1573102",
    logo: "https://mcdn.wallpapersafari.com/medium/43/73/OC5BrI.png",
  },

  onesports: {
    name: "One Sports +",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd",
    keyId: "322d06e9326f4753a7ec0908030c13d8",
    key: "1e3e0ca32d421fbfec86feced0efefda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/OneSportsPlus_logo.svg/300px-OneSportsPlus_logo.svg.png",
  },
  nbaph: {
    name: "NBA TV PH",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cgnl_nba.mpd",
    keyId: "c5e51f41ceac48709d0bdcd9c13a4d88",
    key: "20b91609967e472c27040716ef6a8b9a",
    logo: "https://pngset.com/images/nba-tv-philippines-nba-tv-philippines-cignal-person-text-label-logo-transparent-png-2509143.png",
  },

  studiouniversal: {
    name: "Studio Universal",
    type: "clearkey",
    manifestUri:
      "https://fta1-cdn-flr.visionplus.id/out/v1/dc63bd198bc44193b570e0567ff5b22c/index.mpd",
    keyId: "b4a7b3289eff493d8700becf2e2a1157",
    key: "bfbcfcb8137dd565a7f4b5ce7800c1f0",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Logo_Studio_Universal.svg/1200px-Logo_Studio_Universal.svg.png",
  },

  filmrisehorror: {
    name: "Filmrise Horror",
    type: "hls",
    manifestUri:
      "https://apollo.production-public.tubi.io/live/ac-filmrise-horror.m3u8",
    logo: "https://the-bithub.com/fhorror",
  },

  rakutenviki: {
    name: "Rakuten Viki",
    type: "hls",
    manifestUri:
      "https://fd18f1cadd404894a31a3362c5f319bd.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/RakutenTV-eu_RakutenViki-1/playlist.m3u8",
    logo: "https://img.icons8.com/color/452/rakuten-viki.png",
  },

  miramax: {
    name: "Miramax Movies",
    type: "hls",
    manifestUri:
      "https://raw.githubusercontent.com/mystery75/m3u8/main/MIRAMAX.m3u8",
    logo: "https://the-bithub.com/miramax",
  },

  ionplus: {
    name: "Ion Plus",
    type: "hls",
    manifestUri:
      "https://raw.githubusercontent.com/mystery75/m3u8/main/IONPLUS.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/ION_Plus_logo.svg/1200px-ION_Plus_logo.svg.png",
  },

  ionmystery: {
    name: "Ion Mystery",
    type: "hls",
    manifestUri:
      "https://raw.githubusercontent.com/mystery75/m3u8/main/IONMYSTERY.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/ION_Mystery_logo.svg/1200px-ION_Mystery_logo.svg.png",
  },

  dove: {
    name: "Dove Channel",
    type: "hls",
    manifestUri:
      "https://raw.githubusercontent.com/mystery75/m3u8/main/DOVE.m3u8",
    logo: "https://the-bithub.com/dove",
  },

  bbcearth: {
    name: "BBC Earth",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd",
    keyId: "34ce95b60c424e169619816c5181aded",
    key: "0e2a2117d705613542618f58bf26fc8e",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/BBC_Earth.svg",
  },

  rckentr: {
    name: "Rock Entertainment",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd",
    keyId: "e4ee0cf8ca9746f99af402ca6eed8dc7",
    key: "be2a096403346bc1d0bb0f812822bb62",
    logo: "https://assets-global.website-files.com/64e81e52acfdaa1696fd623f/652f763c600497122b122df0_logo_ent_red_web.png",
  },

  amznmovie: {
    name: "Amazon Movies",
    type: "clearkey",
    manifestUri:
      "https://abbfefcaaaaaaaamd5xd44ij4vbyj.a17d0dfbc05b48999f461f3f6cff0eb6.emt.cf.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/oynu8tcxfa/out/v1/ab567b96658c4d84ae1fc6c67110987c/cenc.mpd",
    keyId: "3e429eb91a1791d55df2a554dc58dda7",
    key: "2f688f94ef580a61eada6932598137e4",
    logo: "https://the-bithub.com/amznmovies",
  },

  hitsnow: {
    name: "Hits HD",
    type: "clearkey",
    manifestUri:
      "https://linearjitp-playback.astro.com.my/dash-wv/linear/606/default_ott.mpd",
    keyId: "1fe92685a75844dc54c9dac124802510",
    key: "36cb2063bf5338d18d31657371b15817",
    logo: "https://medianet.mv/media/channel/229x0-icon.png",
  },

  kix: {
    name: "Kix HD",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd",
    keyId: "a8d5712967cd495ca80fdc425bc61d6b",
    key: "f248c29525ed4c40cc39baeee9634735",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/KIX_logo.svg/1200px-KIX_logo.svg.png",
  },

  history: {
    name: "History",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd",
    keyId: "a7724b7ca2604c33bb2e963a0319968a",
    key: "6f97e3e2eb2bade626e0281ec01d3675",
    logo: "https://logos-world.net/wp-content/uploads/2023/07/History-Logo.jpg",
  },

  nbcsprts: {
    name: "NBC Sports",
    type: "clearkey",
    manifestUri:
      "https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc122ycnuy)/master.mpd",
    keyId: "0020d88a6713159839743f655c5da7de",
    key: "ba9f34226301f69a4f0f13f65a1f92ec",
    logo: "https://i.ibb.co/PN0fjNF/90-removebg-preview.png",
  },

  warner: {
    name: "Warner TV",
    type: "clearkey",
    manifestUri:
      "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd",
    keyId: "4503cf86bca3494ab95a77ed913619a0",
    key: "afc9c8f627fb3fb255dee8e3b0fe1d71",
    logo: "https://tse2.mm.bing.net/th/id/OIP.7d6tiaMYWpWIGI6iAN47zAHaG3?rs=1&pid=ImgDetMain&o=7&rm=3",
  },

  moviesnow: {
    name: "Movies Now",
    type: "clearkey",
    manifestUri:
      "https://times-ott-live.akamaized.net/moviesnow_wv_drm/index.mpd",
    keyId: "40f019b86241d23ef075633fd7f1e927",
    key: "058dec845bd340178a388edd104a015e",
    logo: "https://bestmediainfo.com/uploads/2017/08/MOVIES-NOW-LOGO_6.jpg",
  },

  myxglobal: {
    name: "MYX",
    type: "clearkey",
    manifestUri:
      "https://d24xfhmhdb6r0q.cloudfront.net/out/v1/e897a7b6414a46019818ee9f2c081c4f/index.mpd",
    keyId: "f40a52a3ac9b4702bdd5b735d910fd2f",
    key: "5ce1bc7f06b494c276252b4d13c90e51",
    logo: "https://seeklogo.com/images/M/myx-logo-8C7D28B9EF-seeklogo.com.png",
  },

  alja: {
    name: "Al jazeera",
    type: "clearkey",
    manifestUri:
      "https://linearjitp-playback.astro.com.my/dash-wv/linear/2110/default_ott.mpd",
    keyId: "b1fbd0874e7923f5b05929a042aa0610",
    key: "6c3c498113abffdf454dc935319a794d",
    logo: "https://www.liblogo.com/img-logo/al1049a118-al-jazeera-logo-al-jazeera-to-deliver-bloomberg-news-content-for-expanded-global.png",
  },

  channelnwasia: {
    name: "Channel News Asia",
    type: "clearkey",
    manifestUri:
      "https://tglmp03.akamaized.net/out/v1/43856347987b4da3890360b0d18b5dc5/manifest.mpd",
    keyId: "4ee336861eed4840a555788dc54aea6e",
    key: "f1f53644d4941d4ed31b4bb2478f8cf4",
    logo: "https://logowik.com/content/uploads/images/cna-channel-news-asia9392.jpg",
  },

  premleague: {
    name: "Premier League",
    type: "clearkey",
    manifestUri:
      "https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc1021n07j)/master.mpd",
    keyId: "002046c9a49b9ab1cdb6616bec5d26c3",
    key: "d2f92f6b7edc9a1a05d393ba0c20ef9e",
    logo: "https://logos-world.net/wp-content/uploads/2023/02/Premier-League-Logo-2007.png",
  },

  mtvlive: {
    name: "MTV",
    type: "clearkey",
    manifestUri:
      "https://linearjitp-playback.astro.com.my/dash-wv/linear/5014/default_ott.mpd",
    keyId: "3ac2542a4f7be746633db07647451710",
    key: "22f964a6d6927ccdba482e775cdff190",
    logo: "https://tse3.mm.bing.net/th/id/OIP.lMLVpSGutDFitqvokkgp6AHaHT?w=774&h=764&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  one_ph: {
    name: "One PH",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd",
    keyId: "92834ab4a7e1499b90886c5d49220e46",
    key: "a7108d9a6cfcc1b7939eb111daf09ab3",
    logo: "https://i.imgur.com/gkluDe9.png",
  },
  buko: {
    name: "BuKO",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd",
    keyId: "d273c085f2ab4a248e7bfc375229007d",
    key: "7932354c3a84f7fc1b80efa6bcea0615",
    logo: "https://i.imgur.com/Wv0K5Yc.png",
  },
  sari_sari: {
    name: "SARI‑SARI",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd",
    keyId: "0a7ab3612f434335aa6e895016d8cd2d",
    key: "b21654621230ae21714a5cab52daeb9d",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Sari-Sari_Channel_logo.svg/1200px-Sari-Sari_Channel_logo.svg.png",
  },
  ptv4: {
    name: "PTV4",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd",
    keyId: "71a130a851b9484bb47141c8966fb4a3",
    key: "ad1f003b4f0b31b75ea4593844435600",
    logo: "https://static.wikia.nocookie.net/russel/images/d/dc/PTV_4_Para_Sa_Bayan_Alternative_Logo_June_2017.png",
  },
  one_sports: {
    name: "One Sports",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd",
    keyId: "53c3bf2eba574f639aa21f2d4409ff11",
    key: "3de28411cf08a64ea935b9578f6d0edd",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/One_Sports_logo.svg/2560px-One_Sports_logo.svg.png",
  },
  one_news: {
    name: "One News",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd",
    keyId: "d39eb201ae494a0b98583df4d110e8dd",
    key: "6797066880d344422abd3f5eda41f45f",
    logo: "https://i.imgur.com/bpRiu54.png",
  },
  rptv: {
    name: "RPTV",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd",
    keyId: "1917f4caf2364e6d9b1507326a85ead6",
    key: "a1340a251a5aa63a9b0ea5d9d7f67595",
    logo: "https://static.wikia.nocookie.net/russel/images/f/fb/RPTV_Alternative_Logo_2024.png",
  },
  tv5: {
    name: "TV5",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd",
    keyId: "2615129ef2c846a9bbd43a641c7303ef",
    key: "07c7f996b1734ea288641a68e1cfdc4d",
    logo: "https://static.wikia.nocookie.net/russel/images/7/7a/TV5_HD_Logo_2024.png",
  },
  a2z: {
    name: "A2Z",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd",
    keyId: "f703e4c8ec9041eeb5028ab4248fa094",
    key: "c22f2162e176eee6273a5d0b68d19530",
    logo: "https://static.wikia.nocookie.net/russel/images/8/85/A2Z_Channel_11_without_Channel_11_3D_Logo_2020.png",
  },
  bilyonaryo: {
    name: "Bilyonaryo Channel",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd",
    keyId: "227ffaf09bec4a889e0e0988704d52a2",
    key: "b2d0dce5c486891997c1c92ddaca2cd2",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxvjeBIthYiEaZHeVeYpDicIlOTdv3G6lzoal3VM2xVzWu_J7XxM657oz&s=10",
  },
  pbo: {
    name: "Pinoy Box Office",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd",
    keyId: "dcbdaaa6662d4188bdf97f9f0ca5e830",
    key: "31e752b441bd2972f2b98a4b1bc1c7a1",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Pinoy_Box_Office_logo.svg/1200px-Pinoy_Box_Office_logo.svg.png",
  },
  viva_cinema: {
    name: "Viva Cinema",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd",
    keyId: "07aa813bf2c147748046edd930f7736e",
    key: "3bd6688b8b44e96201e753224adfc8fb",
    logo: "https://static.wikia.nocookie.net/russel/images/2/2f/Viva_Cinema_%282021-.n.v.%29.png",
  },
  tmc: {
    name: "TMC",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd",
    keyId: "96701d297d1241e492d41c397631d857",
    key: "ca2931211c1a261f082a3a2c4fd9f91b",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/27/Tmc2021logo.png",
  },
  disneyxdd: {
    name: "Disney XD",
    type: "clearkey",
    manifestUri:
      "https://a53aivottepl-a.akamaihd.net/pdx-nitro/live/clients/dash/enc/jts4tzzv1k/out/v1/8a5b29f7068c415aa371ea95743382e6/cenc.mpd",
    keyId: "39cebece8b36640f9ba3f248ecfdf86a",
    key: "fad936249e036830aa5bef41bec05326",
    logo: "https://logos-world.net/wp-content/uploads/2023/06/Disney-XD-Logo-2009.png",
},

dreamworks_tagalized: {
  name: "DreamWorks (Tagalized)",
  type: "clearkey",
  manifestUri: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd",
  keyId: "564b3b1c781043c19242c66e348699c5",
  key: "d3ad27d7fe1f14fb1a2cd5688549fbab",
  logo: "https://toppng.com/uploads/preview/dreamworks-logo-dreamworks-animation-logo-11563201748udwkzchrdf.png",
},

  disneyjr: {
    name: "Disney Jr.",
    type: "clearkey",
    manifestUri:
      "https://uselector.cdn.intigral-ott.net/DJR/DJR.isml/manifest.mpd",
    keyId: "f5df57914a0922d5d5ed6b0a4af6290a",
    key: "c62b10a180d1770a355b3c4cb6506ca0",
    logo: "https://www.pinpng.com/pngs/m/418-4182937_disney-junior-tv-logo-hd-png-download.png",
  },
  
  crave1: {
    name: "Crave 1",
    type: "clearkey",
    manifestUri:
      "https://live-crave.video.9c9media.com/137c6e2e72e1bf67b82614c7c9b216d6f3a8c8281748505659713/fe/f/crave/crave1/manifest.mpd",
    keyId: "4a107945066f45a9af2c32ea88be60f4",
    key: "df97e849d68479ec16e395feda7627d0",
    logo: "https://the-bithub.com/crave1",
  },
  
  crave2: {
    name: "Crave 2",
    type: "clearkey",
    manifestUri:
      "https://live-crave.video.9c9media.com/ab4332c60e19b6629129eeb38a2a6ac6db5df2571721750022187/fe/f/crave/crave2/manifest.mpd",
    keyId: "4ac6eaaf0e5e4f94987cbb5b243b54e8",
    key: "8bb3f2f421f6afd025fa46c784944ad6",
    logo: "https://the-bithub.com/crave",
  },  
  
  tap_sports: {
    name: "Tap Sports",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd",
    keyId: "eabd2d95c89e42f2b0b0b40ce4179ea0",
    key: "0e7e35a07e2c12822316c0dc4873903f",
    logo: "https://i.imgur.com/ZsWDiRF.png",
  },
  
  tvup: {
    name: "TVUP!",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd",
    keyId: "83e813ccd4ca4837afd611037af02f63",
    key: "a97c515dbcb5dcbc432bbd09d15afd41",
    logo: "https://cms.cignal.tv/Upload/Images/TVUP%20Logo%20.png",
  },
  
  rock_action: {
    name: "Rock Action",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockextreme.mpd",
    keyId: "0f852fb8412b11edb8780242ac120002",
    key: "4cbc004d8c444f9f996db42059ce8178",
    logo: "https://uploads-ssl.webflow.com/64e961c3862892bff815289d/64f57100366fe5c8cb6088a7_logo_ext_web.png",
  },
  tap_tv: {
    name: "Tap TV",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd",
    keyId: "f6804251e90b4966889b7df94fdc621e",
    key: "55c3c014f2bd12d6bd62349658f24566",
    logo: "https://i.imgur.com/KJaSftF.png"
  },
  knowledge_channel: {
    name: "Knowledge Channel",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd",
    keyId: "0f856fa0412b11edb8780242ac120002",
    key: "783374273ef97ad3bc992c1d63e091e7",
    logo: "https://i.imgur.com/UIqEr2y.png",
  },
  deped_tv: {
    name: "DepEd TV",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd",
    keyId: "0f853706412b11edb8780242ac120002",
    key: "2157d6529d80a760f60a8b5350dbc4df",
    logo: "https://static.wikia.nocookie.net/russel/images/f/f3/DepEd_TV_Logo_2020.png",
  },
  
  fashion_tv: {
    name: "Fashion TV",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd",
    keyId: "971ebbe2d887476398e97c37e0c5c591",
    key: "472aa631b1e671070a4bf198f43da0c7",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Fashion_TV_logo_2017.svg/1200px-Fashion_TV_logo_2017.svg.png",
  },
  kix: {
    name: "KIX",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd",
    keyId: "a8d5712967cd495ca80fdc425bc61d6b",
    key: "f248c29525ed4c40cc39baeee9634735",
    logo: "https://i.imgur.com/B8Fmzer.png",
  },
  hits: {
    name: "HITS",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd",
    keyId: "dac605bc197e442c93f4f08595a95100",
    key: "975e27ffc1b7949721ee3ccb4b7fd3e5",
    logo: "https://i.imgur.com/YeqyD9W.png",
  },
  history: {
    name: "History",
    logo: "https://cantseeus.com/wp-content/uploads/2023/10/History_28201529.png",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd",
    keyId: "a7724b7ca2604c33bb2e963a0319968a",
    key: "6f97e3e2eb2bade626e0281ec01d3675",
  },
  bbcearth: {
    name: "BBC Earth",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/BBC_Earth_2023.svg/1200px-BBC_Earth_2023.svg.png",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd",
    keyId: "34ce95b60c424e169619816c5181aded",
    key: "0e2a2117d705613542618f58bf26fc8e",
  },
  uaap: {
    name: "UAAP Varsity Channel",
    logo: "https://i.imgur.com/V0sxXci.png",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd",
    keyId: "95588338ee37423e99358a6d431324b9",
    key: "6e0f50a12f36599a55073868f814e81e",
  },
  truefm: {
    name: "TrueFM TV",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/40/Radyo5truefmlogo.webp",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd",
    keyId: "0559c95496d44fadb94105b9176c3579",
    key: "40d8bb2a46ffd03540e0c6210ece57ce",
  },
  tvMaria: {
    name: "TV Maria",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/c1/TV_MARIA_logo.png",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/tvmaria_prd.mpd",
    keyId: "fa3998b9a4de40659725ebc5151250d6",
    key: "998f1294b122bbf1a96c1ddc0cbb229f",
  },
  rockentertainment: {
    name: "Rock Entertainment",
    logo: "https://i.imgur.com/fx1Y2Eh.png",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd",
    keyId: "e4ee0cf8ca9746f99af402ca6eed8dc7",
    key: "be2a096403346bc1d0bb0f812822bb62",
  },
  spotv: {
    name: "SPOTV",
    logo: "https://ownassetsmysky.blob.core.windows.net/assetsmysky/production/media-upload/1634257286_thumb-spotv.png",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd",
    keyId: "ec7ee27d83764e4b845c48cca31c8eef",
    key: "9c0e4191203fccb0fde34ee29999129e",
  },
  spotv2: {
    name: "SPOTV2",
    logo: "https://ownassetsmysky.blob.core.windows.net/assetsmysky/production/media-upload/1634257305_thumb-spotv-2.png",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd",
    keyId: "7eea72d6075245a99ee3255603d58853",
    key: "6848ef60575579bf4d415db1032153ed",
  },
  premierSports2: {
    name: "Premier Sports 2",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd",
    keyId: "59454adb530b4e0784eae62735f9d850",
    key: "61100d0b8c4dd13e4eb8b4851ba192cc",
    logo: "https://ownassetsmysky.blob.core.windows.net/assetsmysky/production/plans-and-bundles/1641949301_premier-sports-2.png",
  },
  nbaTvPh: {
    name: "NBA TV Philippines",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/pl_nba.mpd",
    keyId: "f36eed9e95f140fabbc88a08abbeafff",
    key: "0125600d0eb13359c28bdab4a2ebe75a",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/NBA_TV.svg/1200px-NBA_TV.svg.png",
  },
  cinemax: {
    name: "Cinemax",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd",
    keyId: "b207c44332844523a3a3b0469e5652d7",
    key: "fe71aea346db08f8c6fbf0592209f955",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/337_144.png",
  },
  lifetime: {
    name: "Lifetime",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd",
    keyId: "cf861d26e7834166807c324d57df5119",
    key: "64a81e30f6e5b7547e3516bbf8c647d0",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_Lifetime_2020.svg/2560px-Logo_Lifetime_2020.svg.png",
  },
  foodNetwork: {
    name: "Food Network",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd",
    keyId: "b7299ea0af8945479cd2f287ee7d530e",
    key: "b8ae7679cf18e7261303313b18ba7a14",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Food_Network_logo.svg/1200px-Food_Network_logo.svg.png",
  },
  axn: {
    name: "AXN",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd",
    keyId: "fd5d928f5d974ca4983f6e9295dfe410",
    key: "3aaa001ddc142fedbb9d5557be43792f",
    logo: "https://img.favpng.com/5/15/4/axn-high-definition-television-logo-sony-pictures-png-favpng-n8hVJ8SzbcUmyNWN9RzpJMhfg.jpg",
  },
  abcAustralia: {
    name: "ABC Australia",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd",
    keyId: "389497f9f8584a57b234e27e430e04b7",
    key: "3b85594c7f88604adf004e45c03511c0",
    logo: "https://i.pinimg.com/736x/5a/66/65/5a666508bc5851a6a9c1151e7eefff3d.jpg",
  },
  travelChannel: {
    name: "Travel Channel",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd",
    keyId: "f3047fc13d454dacb6db4207ee79d3d3",
    key: "bdbd38748f51fc26932e96c9a2020839",
    logo: "https://i.imgur.com/ZCYeUV2.png",
  },
  bloomberg: {
    name: "Bloomberg",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd",
    keyId: "ef7d9dcfb99b406cb79fb9f675cba426",
    key: "b24094f6ca136af25600e44df5987af4",
    logo: "https://thumbs.dreamstime.com/b/bloomberg-logo-editorial-illustrative-white-background-logo-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-210442338.jpg",
  },
  bbc_news: {
    name: "BBC News",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd",
    keyId: "f59650be475e4c34a844d4e2062f71f3",
    key: "119639e849ddee96c4cec2f2b6b09b40",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BBC_News_2022_%28Alt%29.svg/1200px-BBC_News_2022_%28Alt%29.svg.png",
  },
  dreamworks: {
    name: "DreamWorks HD",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd",
    keyId: "4ab9645a2a0a47edbd65e8479c2b9669",
    key: "8cb209f1828431ce9b50b593d1f44079",
    logo: "https://toppng.com/uploads/preview/dreamworks-logo-dreamworks-animation-logo-11563201748udwkzchrdf.png",
  },
  hits_now: {
    name: "HITS Now",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd",
    keyId: "14439a1b7afc4527bb0ebc51cf11cbc1",
    key: "92b0287c7042f271b266cc11ab7541f1",
    logo: "https://i.imgur.com/YeqyD9W.png",
  },
  moonbug_kids: {
    name: "Moonbug",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_moonbug_kids_sd.mpd",
    keyId: "0bf00921bec94a65a124fba1ef52b1cd",
    key: "0f1488487cbe05e2badc3db53ae0f29f",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Moonbug2ndLogo.png",
  },
  cnn_ph: {
    name: "CNN Philippines",
    type: "clearkey",
    manifestUri: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_cnnhd.mpd",
    keyId: "900c43f0e02742dd854148b7a75abbec",
    key: "da315cca7f2902b4de23199718ed7e90",
    logo: "https://laguia.tv/_nuxt/img/CNN_512.0e91aae.png",
  },
  cartoonChannelPH: {
    name: "Cartoon Channel PH (10 AM - 8 PM)",
    type: "hls",
    manifestUri:
      "https://live20.bozztv.com/giatv/giatv-cartoonchannelph/cartoonchannelph/playlist.m3u8",
    logo:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b58bbc88-0030-4447-b99e-19e7dbc51b14/de71xo3-266469a4-3bd5-4bd7-890e-192c7798e0bb.png/v1/fill/w_1192,h_670/cartoon_channel_ph_logo__2020___present__by_kierariel_de71xo3-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYjU4YmJjODgtMDAzMC00NDQ3LWI5OWUtMTllN2RiYzUxYjE0XC9kZTcxeG8zLTI2NjQ2OWE0LTNiZDUtNGJkNy04OTBlLTE5MmM3Nzk4ZTBiYi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2FyUXQBaLF5j9GldZMJAM1ltGPFq7pMwwr6V7wyGpFs",
  },
  mrbean: {
    name: "MR BEAN",
    type: "hls",
    manifestUri: "https://amg00627-amg00627c30-rakuten-es-3990.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mrbeanescc-rakutenes/playlist.m3u8",
    logo: "https://i.imgur.com/zKGnFe4.png",
  },
  supertoons: {
    name: "SuperToons TV",
    type: "hls",
    manifestUri: "https://jmp2.uk/sam-GBBD5100001HL.m3u8",
    logo: "https://tvpnlogopeu.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/GBBD5100001HL_20241030T142601SQUARE.png",
  },
 jungopinoytv: {
    name: "Jungo Pinoy TV",
    type: "hls",
    manifestUri: "https://jungotvstream.chanall.tv/jungotv/jungopinoytv/stream.m3u8",
    logo: "https://yt3.googleusercontent.com/oT4LFcdusmWboxy8ZC9c6NS0riqRi6_96U-gXLT7C-NarXKKFjLDbyko6iFJVfr743e4eTnv=s900-c-k-c0x00ffffff-no-rj",
},
  hallypop: {
    name: "Hallypop",
    type: "hls",
    manifestUri: "https://jungotvstream.chanall.tv/jungotv/hallypop/stream.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/GMA_HALLYPOP_LOGO_2020.jpg", 
  },
  screamflix: {
    name: "ScreamFlix",
    type: "hls",
    manifestUri: "https://jungotvstream.chanall.tv/jungotv/screamflix/stream.m3u8",
    logo: "https://static.wikia.nocookie.net/logopedia/images/f/fb/Scream_Flix_Logo_2022.png/revision/latest/scale-to-width-down/1200?cb=20250419020619", 
  },
  frontrow: {
    name: "Front Row",
    type: "hls",
    manifestUri: "https://jungotvstream.chanall.tv/jungotv/frontrow/stream.m3u8",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRneG2hIDzQS75A9KHg2FJTbE76qj9fX301dA&s", 
  },
  combatgo: {
    name: "Combat Go",
    type: "hls",
    manifestUri: "https://jungotvstream.chanall.tv/jungotv/combatgo/stream.m3u8",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYm23zkJn2ZVrGTMUfLULxPtcAycgK-zb96A&s", 
  },
  awsn: {
    name: "AWSN",
    type: "hls",
    manifestUri: "https://amg02188-amg02188c2-jungotv-northamerica-5717.playouts.now.amagi.tv/playlist.m3u8",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrgyuzyxnS4PB5zqcMI9MyZwjgxsEwr4lpg&s", 
  },

 };


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
