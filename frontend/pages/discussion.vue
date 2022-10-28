<template>
    <div class="content">
        <h1>Discussion Board: XYZ</h1>
        <v-divider class="dark my-5" color="white"></v-divider>
        <v-card class="discussion_buttons d-flex justify-space-between mb-6 align-center" extension extension-height="700">
            <v-btn :ripple="false" dark class = "ml-2 pa-2">
                Create Thread
            </v-btn>
            <v-text-field
                class="shrink search_bar pa-2" hide-details filled dense
                single-line append-icon="mdi-magnify" label="Search" outlined
                />
        </v-card>
        <div>
            <v-row>
                <v-col>
                    <h3>
                        Thread
                    </h3>
                </v-col>
                <v-col>
                    <h3>
                        Author
                    </h3>
                </v-col>
                <v-col>
                    <h3>
                        Date
                    </h3>
                </v-col>
                <v-col>
                    <h3>
                        Unread
                    </h3>
                </v-col>
                <v-col>
                    <h3>
                        Total Comments
                    </h3>
                </v-col>
            </v-row>
        </div>
        <div class="discussion_board">
            <v-card dark class="py-10 px-5">
                <v-row>
                    <v-col>
                        <h3>
                            [Thread]
                        </h3>
                    </v-col>
                    <v-col>
                        <h3>
                            [Author]
                        </h3>
                    </v-col>
                    <v-col>
                        <h3>
                            [Date]
                        </h3>
                    </v-col>
                    <v-col>
                        <h3>
                            [Unread]
                        </h3>
                    </v-col>
                    <v-col>
                        <h3>
                            [Total Comments]
                        </h3>
                    </v-col>
                </v-row>
                <v-divider class="thread_divider"></v-divider>
                <v-row>
                    <v-col>
                        <h3>
                            [Thread]
                        </h3>
                    </v-col>
                    <v-col>
                        <h3>
                            [Author]
                        </h3>
                    </v-col>
                    <v-col>
                        <h3>
                            [Date]
                        </h3>
                    </v-col>
                    <v-col>
                        <h3>
                            [Unread]
                        </h3>
                    </v-col>
                    <v-col>
                        <h3>
                            [Total Comments]
                        </h3>
                    </v-col>
                </v-row>
                <v-divider class="thread_divider"></v-divider>
                <v-row>
                    <v-col>
                        <h3>
                            [Thread]
                        </h3>
                    </v-col>
                    <v-col>
                        <h3>
                            [Author]
                        </h3>
                    </v-col>
                    <v-col>
                        <h3>
                            [Date]
                        </h3>
                    </v-col>
                    <v-col>
                        <h3>
                            [Unread]
                        </h3>
                    </v-col>
                    <v-col>
                        <h3>
                            [Total Comments]
                        </h3>
                    </v-col>
                </v-row>
                <v-divider class="thread_divider"></v-divider>
                <v-row>
                    <v-col>
                        <h3>
                            [Thread]
                        </h3>
                    </v-col>
                    <v-col>
                        <h3>
                            [Author]
                        </h3>
                    </v-col>
                    <v-col>
                        <h3>
                            [Date]
                        </h3>
                    </v-col>
                    <v-col>
                        <h3>
                            [Unread]
                        </h3>
                    </v-col>
                    <v-col>
                        <h3>
                            [Total Comments]
                        </h3>
                    </v-col>
                </v-row>
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

    .thread_divider {
        margin-top: 50px;
        margin-bottom: 50px;
    }
</style>