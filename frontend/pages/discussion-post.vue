<template>
    <div class="content">
        <PageHeader text="Discussion Post: [Thread]" />

        <v-card class="pa-6 rounded-0" style="max-width: 900px">
            <h2 class="mb-5">Discussion Topic</h2>
            <p>{{ text }}</p>

            <v-divider class="ma-3"></v-divider>

            <h3 class="mb-5">Replies ({{ count }})</h3>
            <InputLabel for="input-reply">Reply</InputLabel>
            <v-textarea 
                id="input-reply" v-model="reply" auto-grow
                outlined dense solo
                class="rounded-0"
                rows="1" row-height="15" @keydown.enter.prevent="submitGeneralReply" />
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'DiscussionPost',
    data() {
        return {
            reply: '',
            count: 0,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo eros, gravida at imperdiet in, varius a dui. Fusce rutrum tincidunt ornare. Sed metus ligula, dapibus vel blandit eget, viverra vitae urna. Nulla varius libero vitae elit facilisis, ut accumsan augue suscipit. Etiam vel ornare quam. Mauris aliquet libero at felis maximus, eget bibendum nisl cursus. Cras gravida malesuada congue. Sed non turpis neque. Proin congue rhoncus mauris non gravida. Duis convallis, metus sit amet commodo pellentesque, ex nunc viverra ligula, sed dignissim sapien lorem sed ipsum. Donec sollicitudin molestie mauris eu finibus. In hac habitasse platea dictumst."
        };
    },
    methods: {
        submitGeneralReply: function() {
            alert("submitted general reply: '" + this.reply + "' "); // replace this with a route call when database is setup
        }
    }
};
</script>
