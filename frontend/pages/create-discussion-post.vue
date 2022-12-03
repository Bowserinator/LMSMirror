<template>
    <div>
        <PageHeader text="Create Post" />

        <v-card class="pa-6 rounded-0" style="max-width: 700px">
            <InputLabel for="input-title">Post Title</InputLabel>
            <v-text-field
                id="input-title"
                class="rounded-0" outlined
                style="max-width: 300px"
                solo dense
            />

            <InputLabel for="input-post">Post Contents</InputLabel>
            <v-textarea
                id="input-post"
                outlined auto-grow solo
                class="rounded-0"
            />

            <div class="d-flex justify-end" extension extension-height="700">
                <v-btn :ripple="false" dark class="mr-2 pa-2" to="../discussion-board">
                    Cancel
                </v-btn>
                <v-btn :ripple="false" dark color="green" class="pa-2">
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