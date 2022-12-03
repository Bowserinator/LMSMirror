<template>
    <div class="content">
        <PageHeader text="Courses" />

        <v-toolbar class="course-buttons pl-7 pr-0" height="56px" extension-height="700">
            <v-btn icon class="mr-2">
                <v-icon class="icon_button icon" aria-hidden="false">
                    mdi-menu
                </v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon class="icon_button icon" aria-hidden="false">
                    mdi-plus
                </v-icon>
            </v-btn>
            <v-spacer />

            <v-text-field
                class="input-bar"
                filled
                solo
                flat
                hide-details
                single-line
                height="56px"
                prepend-inner-icon="mdi-magnify"
                label="Search"
                background-color="grey darken-3"
            />
        </v-toolbar>

        <h2 class="year mt-7 mb-0">Fall 2022</h2>

        <div class="course-list">
            <v-container fluid grid-list-md class="px-0">
                <v-layout row>
                    <IndexClass
                        name="Linear Algebra"
                        prof="Brown"
                        code="2209_MATH 4100"
                        extra-info="lol"
                        :grade="[6,10]"
                    />

                    <IndexClass
                        name="Foundations of Computer Science"
                        prof="Goldschmidt"
                        code="2209_CSCI 2200"
                    />

                    <IndexClass
                        name="Foundations of HCI Usability"
                        prof="Kimball"
                        code="2209_COMM_4420_6420_00"
                        :grade="[4,10]"
                    />

                    <IndexClass
                        name="Web Systems Development"
                        prof="Callahan"
                        code="2209_ITWS 2110"
                        :grade="[9,10]"
                    />
                </v-layout>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndexPage'
}
</script>

<style>
/* Remove default padding from toolbar */
.course-buttons > .v-toolbar__content {
    padding: 0 !important;
}
</style>

<style scoped lang="scss">
// Container of all classes
.course-list {
    width: 100%;
}

// Search bar
.input-bar {
    border-radius: 0 !important;
    max-width: 300px;
}

// Year of classes listed
.year { font-size: 14pt; }
</style>
