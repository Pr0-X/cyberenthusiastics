<template>
  <nav>
    <v-toolbar flat height="60px;">
      <v-toolbar-title>
        <span
          class="font-weight-thin primary--text headline navBarHeadline"
          style="letter-spacing: .2rem!important;"
        >
          <router-link to="/">
            Cyber Enthusiatics
            <!-- <v&#45;img src="../assets/cyber.png"></v&#45;img> -->
          </router-link>
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span
        class="hidden-xs-only mr-5 font-weight-thin"
        v-for="thisone in links"
        :key="thisone.name"
      >
        <router-link :to="thisone.link">
          {{ thisone.name }}
        </router-link>
      </span>
      <span class="hidden-sm-and-up">
        <v-icon @click="dialog = true">mdi-menu</v-icon>
      </span>

      <v-dialog v-model="dialog" fullscreen>
        <v-card>
          <v-card-title class="headline">
            <span
              class="font-weight-thin primary--text headline navBarHeadline"
              style="letter-spacing: .2rem!important;"
            >
              <router-link to="/">
                Cyber Enthusiatics
              </router-link>
            </span>
            <v-spacer></v-spacer>
            <span
              ><v-icon right @click="dialog = false">mdi-close</v-icon></span
            >
          </v-card-title>

          <v-divider></v-divider>
          <v-card-text>
            <v-list-item
              class="mr-5 font-weight-thin"
              v-for="thisone in links"
              :key="thisone.name"
            >
              <v-list-item-content>
                <v-list-item-title @click="dialog = false">
                  <router-link :to="thisone.link">
                    {{ thisone.name }}
                  </router-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <v-icon>mdi-publish</v-icon>
    </v-btn>
  </nav>
</template>

<script>
export default {
  name: "HomeNavBar",
  data() {
    return {
      links: [
        { name: "Login", link: "/login" },
        { name: "Register", link: "/register" }
      ],
      dialog: false,
      fab: false
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style scoped>
.navBarHeadline:hover {
  cursor: pointer;
}
.v-application a {
  text-decoration: none;
}
</style>
