<template>
    <div class="content">
        <h1>Discussion Post: [Thread]</h1>
        <v-divider class="dark my-5" color="white"></v-divider>
        <v-card class="pa-3">
                <h1 class="mb-5"><u>Discussion Topic</u></h1>
                <p>{{text}}</p>
                <v-divider class="ma-3"></v-divider>
                <h1 class="mb-5"><u>Responses</u> ({{count}})</h1>
                <v-textarea label="Reply" auto-grow outlined rows="1" row-height="15" v-model='reply' @keydown.enter.prevent="submitGeneralReply"></v-textarea>
                <v-divider class="ma-3"></v-divider>

        </v-card>
    </div>
</template>


<script>
export default {
    name: 'DiscussionPost',
    methods: {
        submitGeneralReply: function() {
            alert("submitted general reply: '" + this.reply + "' "); //replace this with a route call when database is setup
        }
    },
    data: function() {
        return {
            reply: '',
            count: 0,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo eros, gravida at imperdiet in, varius a dui. Fusce rutrum tincidunt ornare. Sed metus ligula, dapibus vel blandit eget, viverra vitae urna. Nulla varius libero vitae elit facilisis, ut accumsan augue suscipit. Etiam vel ornare quam. Mauris aliquet libero at felis maximus, eget bibendum nisl cursus. Cras gravida malesuada congue. Sed non turpis neque. Proin congue rhoncus mauris non gravida. Duis convallis, metus sit amet commodo pellentesque, ex nunc viverra ligula, sed dignissim sapien lorem sed ipsum. Donec sollicitudin molestie mauris eu finibus. In hac habitasse platea dictumst."
        }
    }
};
</script>
<style scoped>
    
</style>