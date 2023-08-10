/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import theme from "@/plugins/theme";

// Composables
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { fa } from "vuetify/iconsets/fa";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme,
  icons: {
    defaultSet: "mdi",
    aliases: {
      ...aliases,
      avatar: "mdi-user",
    },
    sets: {
      mdi,
      fa,
    },
  },
  components,
  directives,
});
