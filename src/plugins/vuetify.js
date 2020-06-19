import Vue from "vue";
import Vuetify from "vuetify/lib";
import "../custom/main.sass";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa"
  },
  theme: {
    themes: {
      light: {
        primary: "#636b6f",
        secondary: "#b0bec5",
        accent: "#8c9eff",
        error: "#b71c1c",
        chiller: "#6c7b88"
      }
    }
  }
});
