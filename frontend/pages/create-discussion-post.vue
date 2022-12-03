<template>
    <div class="content">
        <h1>Create Post</h1>
        <v-divider class="dark my-5" color="white"></v-divider>
        <v-card class="pa-6">
            <v-text-field outlined style="max-width: 300px" label="Post Title"></v-text-field>
            <v-textarea outlined auto-grow label="Post Contents"></v-textarea>
            <div class="d-flex justify-end" extension extension-height="700">
                <v-btn :ripple="false" dark class = "ma-2 pa-2" to="../discussion-board">
                    Cancel
                </v-btn>
                <v-btn :ripple="false" dark class = "ma-2 pa-2">
                    Post
                </v-btn>
            </div>
        </v-card>
        
    </div>
</template>
<script>
export default {
    name: 'CreateDiscussionPost'
};
</script>
<style scoped>
    .discussion_buttons {
        margin-top: 50px;
        margin-bottom: 50px;
    }
</style>