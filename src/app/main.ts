/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "@/app/App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

//Tailwind
import "./main.css";

//Rules
import "@/resources/rules/validationRules";

import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
