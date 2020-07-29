<template>
    <v-container fluid>
        <v-row align="center">
            <v-col cols="12">
                <v-row justify="space-between" class="mb-6" no-gutters>
                    <v-card
                        color="primary--text"
                        outlined
                        raised
                        :width="widthForCard"
                        class="pa-2"
                        tile
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
                            <v-simple-table dense>
                                <tr>
                                    <td>
                                        <v-text-field
                                            label="Title of the post"
                                            outlined
                                        ></v-text-field>
                                    </td>
                                    <td style="float: right;">
                                        <v-text-field
                                            v-model="searchQuery"
                                            label="Enter the Tags"
                                            hint="Example: Python"
                                            outlined
                                            clearable
                                        ></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <v-textarea
                                            label="Description of the Post"
                                            outlined
                                        >
                                        </v-textarea>
                                    </td>
                                </tr>
                            </v-simple-table>
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

<style scoped></style>
