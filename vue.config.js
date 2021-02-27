const pkg = require("./package.json");
module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    name: "vuetify-template",
    short_name: "template",
    assetsVersion: pkg.version,
    themeColor: "#07B",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "GenerateSW",
    importScripts:
      "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js",
    workboxOptions: {
      swSrc: "src/service-worker.js",
    },
  },
};
