<template>
    <div class="content">
        <h1>Discussion Board</h1>
        <v-divider class="dark my-5" color="white"></v-divider>
        <v-card class="discussion_buttons d-flex justify-space-between mb-6" extension extension-height="700">
            <div>
                <v-btn dark class = "pa-2">
                    Create Thread
                </v-btn>
            </div>
            <v-text-field
                class="shrink search_bar pa-2" hide-details filled dense
                single-line append-icon="mdi-magnify" label="Search" outlined
                />
        </v-card>
        <div class="discussion_board">
            <v-card dark class="py-10 px-5">
                
            </v-card>
        </div>
    </div>
</template>
<script>
  export default {
      name: 'IndexPage'
  };
</script>
<style scoped>
    .discussion_buttons {
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .discussion_board {
        /* display: flex; */
        width: 100%;
    }
</style>