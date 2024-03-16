import { createApp } from "vue";
import ArcoVue from "@arco-design/web-vue";
// 额外引入图标库
import ArcoVueIcon from "@arco-design/web-vue/es/icon";
import router from "./route/index";
import "./style.css";
import App from "./App.vue";
import "@arco-design/web-vue/dist/arco.css";

const app = createApp(App);
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(router);
app.mount("#app");
