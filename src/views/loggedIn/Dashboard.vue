<template>
  <v-app>
    <div>
      <Navbar />
      <v-container fluid>
        <v-content>
          <CreatePost />
        </v-content>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/NavBar";
import CreatePost from "../loggedIn/createPost";
export default {
  name: "Dashboard",
  components: {
    Navbar,
    CreatePost
  }
};
</script>

<style></style>
