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
            <v-layout row wrap justify-space-between>
                <!-- Left col -->
                <v-flex xs12 md6 class="pr-2">
                    <v-container fluid>
                        <v-layout row 12>
                            <v-card width="100%" class="pa-3">
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
                                    <p class="text--primary font-weight-regular announcement_text overflow-hidden">Midterm grades have been released on LMS and can be viewed under My Progress or under Grades on the main LMS page.  This grade is currently calculated using Homework Sets 1–4 and Exam 1.  The lowest homework score will be dropped at the end of the semester, but all are included in the grade calculation now. Please see the syllabus for letter grade conversions.</p>
                                </v-card-text>
                            </v-card>
                        </v-layout>
                        <v-layout row 12 class="mt-8">
                            <v-card width="100%">
                                <v-card-title>
                                    What's New
                                </v-card-title> 
                                <v-expansion-panels multiple tile accordion>
                                    <v-expansion-panel>
                                        <v-expansion-panel-header>Gradebook</v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <div class="body-2 ma-0 pl-4 text--secondary panel-text">
                                                <p><a>Exam 1</a> has been grade</p>
                                            </div>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>

                                    <v-expansion-panel>
                                        <v-expansion-panel-header>Other new content</v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <div class="body-2 ma-0 pl-4 text--secondary panel-text">
                                                <p> <a>Lecture 15</a> has been posted</p>
                                                <p> <a>Homework 6 solution</a> has been posted</p>
                                                <p> <a>Lab 6</a> has been posted</p>
                                                <p> <a>Exam 2 solution</a> has been posted</p>
                                                <p> <a>Homework 7</a> due 11/27/2022</p>
                                            </div>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-card>
                        </v-layout>
                    </v-container>
                </v-flex>

                <!-- Right col -->
                <v-flex md6 class="pl-2">
                    <v-card>
                        <v-card-title>
                            To Do
                        </v-card-title>
                        <v-expansion-panels multiple tile accordion>

                            <v-expansion-panel>
                                <v-expansion-panel-header>Past due</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <div class="body-2 ma-0 pl-4 text--secondary panel-text">
                                        <p>Lab 3</p>
                                        <p>Homework 3</p>
                                    </div>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header>Due today</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <div class="body-2 ma-0 pl-4 text--secondary panel-text">
                                        <p>Status update 6</p>
                                        <p>Homework 6</p>
                                    </div>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header>Due tomorrow</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <div class="body-2 ma-0 pl-4 text--secondary panel-text">
                                        <p>Lab 7</p>
                                    </div>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header>Due this week</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <div class="body-2 ma-0 pl-4 text--secondary panel-text">
                                        <p>Participation 11/25</p>
                                        <p>Case study 2</p>
                                    </div>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header>Due future</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <div class="body-2 ma-0 pl-4 text--secondary panel-text">
                                        <p>Final Project</p>
                                    </div>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>


                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
  
<script>
export default {
    name: 'SingleCoursePage'
}
</script>

<style scoped>
.panel-text > p {
    margin: 4px 0;
}

.announcement_text{
    max-height: 3em;

}
</style>
  