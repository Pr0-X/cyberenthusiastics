<template>
    <v-container fluid>
        <v-row align="center">
            <v-col cols="12">
            <v-row justify="space-between">
                <v-card
                    color="primary--text"
                    outlined
                    raised
                    :width="widthForCard"
                >
                    <v-card-title>
                        <v-row class="mx-5 my-2">
                            <h2>{{ postOrBlog }}</h2>
                            <h2 class="ml-4 mr-4">|</h2>
                            <v-btn depressed class="white">Publish</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn depressed class="white">Blog ?</v-btn>
                        </v-row>
                    </v-card-title>
                    <v-card-text>
                        <v-col cols="8">
                            <v-row>
                                <v-text-field
                                    label="Title of the post"
                                    outlined
                                ></v-text-field>
                            </v-row>

                            <v-row>
                                <v-textarea
                                    label="Description of the Post"
                                    outlined
                                >
                                </v-textarea>
                            </v-row>
                        </v-col>
                        <v-col cols="4" style="right: 0">
                            <v-row>
                                <v-text-field placeholder="tags">
                                </v-text-field>
                            </v-row>
                        </v-col>
                    </v-card-text>
                </v-card>
            </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "createPost",
    data() {
        return {
            postOrBlog: "Add New Post",
            widthForCard: "100%"
        };
    }
};
</script>

<style scoped>
</style>
