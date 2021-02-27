/* eslint-disable no-undef */
if (workbox) {
  console.log(`Workbox is loaded!`);
} else {
  console.log(`Workbox didn't load!`);
}

// 设置缓存前缀和后缀，请根据实际项目名修改
workbox.core.setCacheNameDetails({
  prefix: "vuetify-template",
  suffix: "0.1.4",
});

// have our sw update and control a web page as soon as possible.
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// vue-cli3.0 supports pwa with the help of workbox-webpack-plugin, we need to get the precacheing list through this sentence.
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
  /.*\.html/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "html-cache",
  })
);

workbox.routing.registerRoute(
  // Cache CSS files
  /.*\.css/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "css-cache",
  })
);
workbox.routing.registerRoute(
  /.*\.js/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "js-cache",
  })
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

// api缓存，优选从网络获取，网络异常时再使用缓存，请根据实际api url配置RegExp，只支持get请求
// const apiURL = "https://api.google.com";
// workbox.routing.registerRoute(
//   new RegExp(apiURL),
//   new workbox.strategies.NetworkFirst({
//     plugins: [
//       new workbox.cacheableResponse.Plugin({
//         statuses: [0, 200],
//       }),
//     ],
//   })
// );
