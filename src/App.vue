<template>
    <v-app>
        <HomeNavBar />
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </v-app>
</template>

<script>
import HomeNavBar from "./components/HomeNavbar";

export default {
    name: "App",
    components: {
        HomeNavBar
    },

    data: () => ({
        //
    })
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>

