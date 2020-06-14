<template>
    <v-container fluid>
        <v-row align="center">
            <v-col>
                <v-card color="primary--text" outlined raised width="100%">
                    <v-row class="mx-5 my-2">
                            <h2>{{postOrBlog}}</h2>
                            <v-spacer></v-spacer>
                            <v-btn>Publish</v-btn>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "createPost",
    data(){
        return{
            postOrBlog: "Add New Post"
        }
    }
}
</script>

<style>

</style>
