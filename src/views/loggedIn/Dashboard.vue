<template>
<v-app>
    <div>
    <Navbar />
        <v-container fluid>
            <v-content>
            <CreatePost/>
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
    },
    data() {
        return {
            item: ["one", "two", "three", "four"],
            sidebarMenu: true,
            toggleMini: false,
            items: [
                { title: "Home", href: "/", icon: "mdi-home-outline" },
                {
                    title: "Reports",
                    href: "/reports",
                    icon: "mdi-file-document-box-outline"
                },
                { title: "Inbox", href: "/inbox", icon: "mdi-mailbox" },
                {
                    title: "Premiums",
                    href: "/premiums",
                    icon: "mdi-crown-outline"
                },
                {
                    title: "Alerts",
                    href: "/alerts",
                    icon: "mdi-alarm-light-outline"
                },
                {
                    title: "Detections",
                    href: "/detections",
                    icon: "mdi-shield-account"
                },
                {
                    title: "Components",
                    href: "/comp",
                    icon: "mdi-palette-swatch"
                },
                {
                    title: "Customers",
                    href: "/customers",
                    icon: "mdi-account-search-outline"
                },
                { title: "Orders", href: "/orders", icon: "mdi-bus-clock" },
                {
                    title: "Settings",
                    href: "/settings",
                    icon: "mdi-settings-outline"
                }
            ]
        };
    }
};
</script>

<style></style>
