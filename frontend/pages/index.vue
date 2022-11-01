<template>
  <div class="content">
    <PageHeader text="Courses" />

    <v-divider class="dark my-5" color="white" />
    <!-- <div class="controls_bar" dense> -->
    <!-- <button><img src="../assets/add_icon.png" alt="lms logo" class="icon"></image></button> -->
    <v-toolbar class="course_buttons px-5" extension extension-height="700">
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
      <v-spacer />
      <!-- <v-text-field label="Search" outlined></v-text-field> -->
      <v-text-field
        class="shrink search_bar"
        hide-details
        filled
        dense
        single-line
        append-icon="mdi-magnify"
        label="Search"
        outlined
      />
      <span class="filter_text">Filter</span>
      <v-text-field
        class="shrink filter_bar"
        hide-details
        filled
        dense
        single-line
        outlined
      />
    </v-toolbar>
    <!-- </div> -->
    <h2 class="my-7">Fall 2022</h2>
    <div class="course_list">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card dark class="py-10 px-5">
              <div class="">
                <v-layout row wrap>
                  <v-flex sm12>
                    <v-card-subtitle class="text-h5 white--text">
                      2209_MATH 4100
                    </v-card-subtitle>
                    <v-card-subtitle class="text-h5 white--text">
                      Brown
                    </v-card-subtitle>
                  </v-flex>
                </v-layout>
                <div>
                  <v-layout row wrap class="mt-5">
                    <v-flex>
                      <v-card-title>
                        <a
                          class="display-1 white--text text-decoration-none"
                          href=""
                        >
                          Linear Algebra
                        </a>
                      </v-card-title>
                    </v-flex>
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-flex>
                      <a href="" class="more_info">
                        <p class="mt-10 mb-0 d-block">More info</p>
                      </a>
                    </v-flex>
                    <v-flex>
                      <input
                        class="star"
                        type="checkbox"
                        title="bookmark page"
                      /><br /><br />
                      <!-- <v-icon>mdi-star</v-icon> -->
                    </v-flex>
                  </v-layout>
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
                <v-layout row wrap>
                  <v-flex sm12>
                    <v-card-subtitle class="text-h5 white--text">
                      2209_CSCI 2200
                    </v-card-subtitle>
                    <v-card-subtitle class="text-h5 white--text">
                      Goldschmidt
                    </v-card-subtitle>
                  </v-flex>
                </v-layout>
                <div>
                  <v-layout row wrap class="mt-5">
                    <v-flex>
                      <v-card-title>
                        <a
                          class="display-1 white--text text-decoration-none"
                          href=""
                        >
                          Foundations of Computer Science
                        </a>
                      </v-card-title>
                    </v-flex>
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-flex>
                      <a href="" class="more_info">
                        <p class="mt-10 mb-0 d-block">More info</p>
                      </a>
                    </v-flex>
                    <v-flex>
                      <input
                        class="star"
                        type="checkbox"
                        title="bookmark page"
                      /><br /><br />
                      <!-- <v-icon>mdi-star</v-icon> -->
                    </v-flex>
                  </v-layout>
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
                <v-layout row wrap>
                  <v-flex sm12>
                    <v-card-subtitle class="text-h5 white--text">
                      2209_COMM_4420_6420_00
                    </v-card-subtitle>
                    <v-card-subtitle class="text-h5 white--text">
                      Kimball
                    </v-card-subtitle>
                  </v-flex>
                </v-layout>
                <div>
                  <v-layout row wrap class="mt-5">
                    <v-flex>
                      <v-card-title>
                        <a
                          class="display-1 white--text text-decoration-none"
                          href=""
                        >
                          Foundations of HCI Usability
                        </a>
                      </v-card-title>
                    </v-flex>
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-flex>
                      <a href="" class="more_info">
                        <p class="mt-10 mb-0 d-block">More info</p>
                      </a>
                    </v-flex>
                    <v-flex>
                      <input
                        class="star"
                        type="checkbox"
                        title="bookmark page"
                      /><br /><br />
                      <!-- <v-icon>mdi-star</v-icon> -->
                    </v-flex>
                  </v-layout>
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
                <v-layout row wrap>
                  <v-flex sm12>
                    <v-card-subtitle class="text-h5 white--text">
                      2209_ITWS 2110
                    </v-card-subtitle>
                    <v-card-subtitle class="text-h5 white--text">
                      Callahan
                    </v-card-subtitle>
                  </v-flex>
                </v-layout>
                <div>
                  <v-layout row wrap class="mt-5">
                    <v-flex>
                      <v-card-title>
                        <a
                          class="display-1 white--text text-decoration-none"
                          href=""
                        >
                          Web Systems Development
                        </a>
                      </v-card-title>
                    </v-flex>
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                    <v-flex>
                      <a href="" class="more_info">
                        <p class="mt-10 mb-0 d-block">More info</p>
                      </a>
                    </v-flex>
                    <v-flex>
                      <input
                        class="star"
                        type="checkbox"
                        title="bookmark page"
                      /><br /><br />
                      <!-- <v-icon>mdi-star</v-icon> -->
                    </v-flex>
                  </v-layout>
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
import Navbar from "../components/Navbar.vue"

export default {
  name: "IndexPage",
}
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
  border: 1px solid;
  /* margin: 45px; */
}
.course_buttons {
  /* margin-left: 45px; */
  /* margin-right: 45px; */
}
.search_bar {
  /* margin-left: 500px; */
}
.filter_text {
  /* margin: 7px; */
}
.course_info {
  padding: 30px;
}
.prof {
  margin-left: 50px;
}
.course_code,
.prof {
  font-size: 20px;
}
.course_name {
  padding-top: 10px;
  font-size: 42px;
  display: inline-block;
  width: 1000px;
  overflow: visible;
}
.prof_code {
  display: block;
}
.star {
  visibility: hidden;
  font-size: 60px;
  cursor: pointer;
  color: gold;
  /* position: relative;
        bottom: 36px;
        left: 100px; */
}
.star:before {
  content: "\2605";
  /* position: absolute; */
  visibility: visible;
}
.star:checked:before {
  content: "\2606";
  /* position: absolute; */
}
</style>
