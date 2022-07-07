import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import { router } from "./router";
import App from "./App.vue";
import "./app.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

createApp(App).use(router).use(MotionPlugin).mount("#app");
