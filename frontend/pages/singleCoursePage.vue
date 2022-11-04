<template>
    <div>

        <v-container>

            <v-layout row class="justify-space-between">

                <v-flex sm11 md6 lg6>
                    <PageHeader text="Linear Algebra" />
                </v-flex>

                <v-flex  sm1 md6 lg6 class="align-self-end">
                    <v-btn class="float-right mb-2">
                        <v-icon left>mdi-refresh</v-icon>
                        <span class="text-capitalize">Refresh</span>
                    </v-btn>
                </v-flex>

            </v-layout>


        </v-container>


        <v-container>
            <v-layout row wrap>

                <v-flex xs12 md6 class="me-2">
                    <v-container fluid>
                        <v-layout row 12>

                            <v-card height="300" width="100%">

                                <v-card-title>
                                    Announcement
                                </v-card-title> 
                            </v-card>
                        </v-layout>

                        <v-layout row 12 class="mt-8">
                            <v-card height="300" width="100%">
                                <v-card-title>
                                    To do
                                </v-card-title> 
                            </v-card>
                        </v-layout>
                    </v-container>
                </v-flex>

                <v-flex class="" width="100%" >
                    <v-card height="600">
                    <v-card-title>
                        Right
                    </v-card-title>
                    </v-card>
                </v-flex>


            </v-layout>
            

            
        </v-container>

    </div>
</template>
  
<script>
export default {
    name: 'singleCoursePage'
}
</script>

<style scoped>
</style>
  