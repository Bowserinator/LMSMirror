<template>
    <div class="content">
        <v-card color="transparent" height="70">
            <v-card-title class="display-1 ma-0 pa-0">
                Courses
            </v-card-title>
        </v-card>
        <v-divider class="dark my-5" color="white"></v-divider>
        <!-- <div class="controls_bar" dense> -->
        <!-- <button><img src="../assets/add_icon.png" alt="lms logo" class="icon"></image></button> -->
        <v-toolbar class="course_buttons" extension extension-height="700">
            <div>
                <v-btn icon>
                    <v-icon class="icon_button icon" aria-hidden="false" x-large>
                        mdi-menu
                    </v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon class="icon_button icon" aria-hidden="false" x-large>
                        mdi-plus
                    </v-icon>
                </v-btn>
            </div>
            <!-- <v-text-field label="Search" outlined></v-text-field> -->
            <v-text-field
                class="shrink search_bar" hide-details filled dense
                single-line append-icon="mdi-magnify" label="Search" outlined
                />
            <span class="filter_text">Filter</span>
            <v-text-field
                class="shrink filter_bar" hide-details filled dense
                single-line outlined
                />
        </v-toolbar>
        <!-- </div> -->
        <h2 class="my-7">
            Fall 2022
        </h2>
        <div class="course_list">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-card dark class="py-10 px-5">
                            <div class="">
                                <div>
                                    <v-card-subtitle class="text-h5 white--text">
                                        2209_MATH 4100 
                                    </v-card-subtitle>
                                    <v-card-subtitle class="text-h5 white--text">
                                        Brown
                                    </v-card-subtitle>
                                </div>
                                <div>
                                    <v-row>
                                        <v-col cols="9">
                                            <v-card-title>
                                                <a class="display-2 white--text text-decoration-none" href="">
                                                    Linear Algebra
                                                </a>
                                            </v-card-title>
                                        </v-col>
                                        <v-col cols="2">
                                            <a href="" class="more_info">
                                                <p class="ma-10 mb-0 d-block">More info</p>
                                            </a>
                                        </v-col>
                                        <v-col cols="1">
                                            <div class="mr-10">
                                                <input class="star" type="checkbox" title="bookmark page"><br/><br/>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-card dark class="py-10 px-5">
                            <div class="">
                                <div>
                                    <v-card-subtitle class="text-h5 white--text">
                                        2209_CSCI 2200 
                                    </v-card-subtitle>
                                    <v-card-subtitle class="text-h5 white--text">
                                        Goldschmidt
                                    </v-card-subtitle>
                                </div>
                                <div>
                                    <v-row>
                                        <v-col cols="9">
                                            <v-card-title>
                                                <a class="display-2 white--text text-decoration-none" href="">
                                                    Foundations of Computer Science
                                                </a>
                                            </v-card-title>
                                        </v-col>
                                        <v-col cols="2">
                                            <a href="" class="more_info">
                                                <p class="ma-10 mb-0 d-block">More info</p>
                                            </a>
                                        </v-col>
                                        <v-col cols="1">
                                            <div class="mr-10">
                                                <input class="star" type="checkbox" title="bookmark page"><br/><br/>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-card dark class="py-10 px-5">
                            <div class="">
                                <div>
                                    <v-card-subtitle class="text-h5 white--text">
                                        2209_ITWS 2110 
                                    </v-card-subtitle>
                                    <v-card-subtitle class="text-h5 white--text">
                                        Callahan
                                    </v-card-subtitle>
                                </div>
                                <div>
                                    <v-row>
                                        <v-col cols="9">
                                            <v-card-title>
                                                <a class="display-2 white--text text-decoration-none" href="">
                                                    Web Systems Development
                                                </a>
                                            </v-card-title>
                                        </v-col>
                                        <v-col cols="2">
                                            <a href="" class="more_info">
                                                <p class="ma-10 mb-0 d-block">More info</p>
                                            </a>
                                        </v-col>
                                        <v-col cols="1">
                                            <div class="mr-10">
                                                <input class="star" type="checkbox" title="bookmark page"><br/><br/>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-card dark class="py-10 px-5">
                            <div class="">
                                <div>
                                    <v-card-subtitle class="text-h5 white--text">
                                        2209_COMM_4420_6420_00 
                                    </v-card-subtitle>
                                    <v-card-subtitle class="text-h5 white--text">
                                        Kimball
                                    </v-card-subtitle>
                                </div>
                                <div>
                                    <v-row>
                                        <v-col cols="9">
                                            <v-card-title>
                                                <a class="display-2 white--text text-decoration-none" href="">
                                                    FOUNDATIONS OF HCI USABILITY
                                                </a>
                                            </v-card-title>
                                        </v-col>
                                        <v-col cols="2">
                                            <a href="" class="more_info">
                                                <p class="ma-10 mb-0 d-block">More info</p>
                                            </a>
                                        </v-col>
                                        <v-col cols="1">
                                            <div class="mr-10">
                                                <input class="star" type="checkbox" title="bookmark page"><br/><br/>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <!-- <v-btn>Hello</v-btn> -->
    </div>
</template>
<script>
  export default {
      name: 'IndexPage'
  };
</script>
<style scoped>
  .course_list {
  /* display: flex; */
  width: 100%;
  }
  .course {
  display: flex;
  height: 170px;
  /* width: 100%; */
  background: rgb(69, 69, 69);
  border: 1px solid ;
  /* margin: 45px; */
  }
  .course_buttons {
  /* margin-left: 45px; */
  /* margin-right: 45px; */
  }
  .search_bar {
  margin-left: 500px;
  }
  .filter_text {
  margin: 7px;
  }
  .course_info {
  padding: 30px;
  }
  .prof{
  margin-left: 50px;
  }
  .course_code, .prof{
  font-size: 20px;
  }
  .course_name {
  padding-top: 10px;
  font-size: 42px;
  display: inline-block;
  width: 1000px;
  overflow:visible;
  }
  .prof_code {
  display: block;
  }
  .star {
  visibility:hidden;
  font-size:60px;
  cursor:pointer;
  color: gold;
  /* position: relative;
  bottom: 36px;
  left: 100px; */
  }
  .star:before {
  content: "\2605";
  /* position: absolute; */
  visibility:visible;
  }
  .star:checked:before {
  content: "\2606";
  /* position: absolute; */
  }
</style>