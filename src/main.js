import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import VueGAPI from "vue-gapi";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueGAPI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
