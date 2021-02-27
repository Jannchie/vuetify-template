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
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js",
    },
  },
};
