<template>
    <div>
        <v-app-bar app light>
            <v-app-bar-nav-icon
                @click.stop="sidebarMenu = !sidebarMenu"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>Home</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon>mdi-account</v-icon>
        </v-app-bar>
        <v-navigation-drawer
            v-model="sidebarMenu"
            app
            floating
            :permanent="sidebarMenu"
            :mini-variant.sync="toggleMini"
            color="chiller lighten-3"
        >
            <v-list dense>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon @click.stop="sidebarMenu = !sidebarMenu"
                            >mdi-chevron-left</v-icon
                        >
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list-item class="px-2" @click="toggleMini = !toggleMini">
                <v-list-item-avatar>
                    <v-icon>mdi-account-outline</v-icon>
                </v-list-item-avatar>
                <v-list-item-content class="text-truncate">
                    Carol Skelly
                </v-list-item-content>
                <v-btn icon small>
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>
            <v-divider></v-divider>
            <v-list>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    :to="item.href"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
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
