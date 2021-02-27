import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@fortawesome/fontawesome-free/css/all.css";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

Vue.config.productionTip = false;

(function autoRegisterComponents() {
  const requireComponent = require.context("@/components", true, /\.vue$/);
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const componentName = upperFirst(
      camelCase(fileName.replace(/^\.\//, "").replace(/\.\w+$/, ""))
    );
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
})();

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
