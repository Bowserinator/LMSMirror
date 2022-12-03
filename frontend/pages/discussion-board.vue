<template>
    <div class="content">
        <PageHeader text="Discussion Board: XYZ" />

        <v-card class="d-flex justify-space-between mb-6 align-center" extension extension-height="700">
            <v-btn :ripple="false" dark class="ma-2 pa-2" to="../create-discussion-post">
                Create Thread
            </v-btn>
            <BarSearchInput />
        </v-card>
        <div>
            <v-row class="px-0">
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
            <v-card dark class="pa-3">
                <div v-ripple>
                    <router-link to="./discussion-post">
                        <v-row class="highlighted-thread ma-3">
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
                    </router-link>
                </div>
                <v-divider class="thread-divider" />
                <div v-ripple>
                    <router-link to="/discussion-post">
                        <v-row class="highlighted-thread ma-3">
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
                    </router-link>
                </div>
                <v-divider class="thread-divider" />
                <div v-ripple>
                    <router-link to="./discussion-post">
                        <v-row class="highlighted-thread ma-3">
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
                    </router-link>
                </div>
                <v-divider class="thread-divider" />
                <div v-ripple>
                    <router-link to="/discussion-post">
                        <v-row class="highlighted-thread ma-3">
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
                    </router-link>
                </div>
            </v-card>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DiscussionBoard'
};
</script>
<style scoped>
    .discussion_board {
        width: 100%;
    }

    .highlighted-thread:hover {
        filter: brightness(65%);
    }

    a {
        text-decoration: none;
        color: white;
    }
</style>
