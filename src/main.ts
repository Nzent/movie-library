import { createApp } from "vue";

import "./style.css";
import App from "./App.vue";
import "./assets/styles/fonts.css";
import { createPinia } from "pinia";
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
createApp(App).mount("#app");
