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

                            <v-card height="" width="100%">

                                <v-card-title class="text-h5 pb-2">
                                    Announcement
                                </v-card-title>

                                <v-card-text>
                                    <div class="text-h6 font-weight-bold text--white text--primary">
                                        Exam 3 canceled
                                    </div>
                                    <v-card-subtitle class="py-2 pl-0 font-weight-light">
                                        Posted on Wednesday, October 19, 2022 6:54:50 PM EDT
                                    </v-card-subtitle>
                                    <p class="text--primary font-weight-regular announcement_text overflow-hidden">Exam 3 has been canceld. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam, inventore necessitatibus quod a blanditiis?</p>

                                    <div class="text-h6 font-weight-bold text--white text--primary">
                                        Midterm Grades
                                    </div>
                                    <v-card-subtitle class="py-2 pl-0 font-weight-light">
                                        Posted on Wednesday, October 19, 2022 6:54:50 PM EDT
                                    </v-card-subtitle>
                                    <p class="text--primary font-weight-regular announcement_text overflow-hidden">Midterm grades have been released on LMS and can be viewed under My Progress or under Grades on the main LMS page.  This grade is currently calculated using Homework Sets 1–4 and Exam 1.  The lowest homework score will be dropped at the end of the semester, but all are included in the grade calculation now. Please see the syllabus for letter grade conversions.

</p>





                                </v-card-text>

                                
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
    .announcement_text{
        max-height: 3em;

    }



</style>
  