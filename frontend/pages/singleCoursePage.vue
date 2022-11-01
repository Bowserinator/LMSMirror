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
        <!-- <PageHeader text="Linear Algebra" />
        <v-btn>
            <v-icon left>mdi-refresh</v-icon>
            <span class="text-capitalize">Refresh</span>
        </v-btn> -->
    </div>
</template>
  
<script>
export default {
    name: 'singleCoursePage'
}
</script>

<style scoped>
</style>
  