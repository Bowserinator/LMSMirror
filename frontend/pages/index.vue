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
      <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs6 sm12 md12>
        <v-card dark width="100%" class="py-10 px-5">
          <v-layout row wrap>
            <v-card-title class="d-inline-flex text-h5 white--text">
              2209_MATH 4100
            </v-card-title>
            <v-card-title class="d-inline-flex text-h5 white--text">
              Brown
            </v-card-title>
          </v-layout>
          <v-layout row wrap class="">
              <v-card-title class="class_title">
                <a class="d-inline-flex headline white--text text-decoration-none" href="">
                  Linear Algebra
                </a>
              </v-card-title>
            <v-spacer />
            <v-spacer />
            <v-spacer />
              <a href="" class="more_info">
                <p class="d-inline-flex mt-10 mb-0 d-block">More info</p>
              </a>
              <v-spacer />
              <input
                class="star d-inline-flex"
                type="checkbox"
                title="bookmark page"
              /><br /><br />
              <!-- <v-icon>mdi-star</v-icon> -->
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex d-flex xs6 sm12 md12>
        <v-card dark width="100%" class="py-10 px-5">
          <v-layout row wrap>
            <v-card-title class="d-inline-flex text-h5 white--text">
              2209_CSCI 2200
            </v-card-title>
            <v-card-title class="d-inline-flex text-h5 white--text">
              Goldschmidt
            </v-card-title>
          </v-layout>
          <v-layout row wrap class="">
              <v-card-title class="class_title">
                <a class="d-inline-flex headline white--text text-decoration-none" href="">
                  Foundations of Computer Science
                </a>
              </v-card-title>
            <v-spacer />
            <v-spacer />
            <v-spacer />
              <a href="" class="more_info">
                <p class="d-inline-flex mt-10 mb-0 d-block">More info</p>
              </a>
              <v-spacer />
              <input
                class="star d-inline-flex"
                type="checkbox"
                title="bookmark page"
              /><br /><br />
              <!-- <v-icon>mdi-star</v-icon> -->
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex d-flex xs6 sm12 md12>
        <v-card dark width="100%" class="py-10 px-5">
          <v-layout row wrap>
            <v-card-title class="d-inline-flex text-h5 white--text">
              2209_COMM_4420_6420_00
            </v-card-title>
            <v-card-title class="d-inline-flex text-h5 white--text">
              Kimball
            </v-card-title>
          </v-layout>
          <v-layout row wrap class="">
              <v-card-title class="class_title">
                <a class="d-inline-flex headline white--text text-decoration-none" href="">
                  Foundations of HCI Usability
                </a>
              </v-card-title>
            <v-spacer />
            <v-spacer />
            <v-spacer />
              <a href="" class="more_info">
                <p class="d-inline-flex mt-10 mb-0 d-block">More info</p>
              </a>
              <v-spacer />
              <input
                class="star d-inline-flex"
                type="checkbox"
                title="bookmark page"
              /><br /><br />
              <!-- <v-icon>mdi-star</v-icon> -->
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex d-flex xs6 sm12 md12>
        <v-card dark width="100%" class="py-10 px-5">
          <v-layout row wrap>
            <v-card-title class="d-inline-flex text-h5 white--text">
              2209_ITWS 2110
            </v-card-title>
            <v-card-title class="d-inline-flex text-h5 white--text">
              Callahan
            </v-card-title>
          </v-layout>
          <v-layout row wrap class="">
              <v-card-title class="class_title">
                <a class="d-inline-flex headline white--text text-decoration-none" href="">
                  Web Systems Development
                </a>
              </v-card-title>
            <v-spacer />
            <v-spacer />
            <v-spacer />
              <a href="" class="more_info">
                <p class="d-inline-flex mt-10 mb-0 d-block">More info</p>
              </a>
              <v-spacer />
              <input
                class="star d-inline-flex"
                type="checkbox"
                title="bookmark page"
              /><br /><br />
              <!-- <v-icon>mdi-star</v-icon> -->
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
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
  margin-right: 60px;
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

.class_title {
  width: 50%;
}
</style>
