<template>

  <div>

    <div id="head_bar">

      <h2>Courses</h2>

    </div>

    <!-- <div id="controls_bar" dense> -->
      <!-- <button><img src="../assets/add_icon.png" alt="lms logo" class="icon"></image></button> -->
      <v-toolbar id="course_buttons" extension extension-height="700" >
        <v-btn><v-icon class="icon_button icon" aria-hidden="false"  x-large>mdi-menu</v-icon></v-btn>
        <v-btn><v-icon class="icon_button icon" aria-hidden="false"  x-large>mdi-plus</v-icon></v-btn>
        <!-- <v-text-field label="Search" outlined></v-text-field> -->
        <v-text-field class="shrink search_bar" hide-details filled dense single-line append-icon="mdi-magnify" label="Search" outlined></v-text-field>
        <span class="filter_text">Filter</span>
        <v-text-field class="shrink filter_bar" hide-details filled dense single-line outlined></v-text-field>
      </v-toolbar>
    <!-- </div> -->

    

    <div id="course_list">
      <div class="course">aaaaaaaaa</div>
      <div class="course">aaaaaaaaa</div>
      <div class="course">aaaaaaaaa</div>
    </div>

    <!-- <v-btn>Hello</v-btn> -->
  </div>
  
</template>



<script>

import Header from '../components/Header.vue'

export default {
  name: 'IndexPage'
}
</script>

<style scoped>
  #head_bar {
    display: flex;
    /* background-color: red; */
    width: 100%;
    height: 10vh;
    border-bottom: 1px solid white;
    margin-bottom:5vh;
  }

  #head_bar h2{
    margin-left: 3vw;
  }

  #course_list {
    /* display: flex; */
    width: 100%;
  }

  .course {
    display: flex;
    height: 30vh;
    /* width: 100%; */
    background: red;
    border: 1px solid ;
    margin: 3vw;
  }

  #course_buttons {
    margin-left: 45px;
  }

  /* .icon_button {
    height: 20vh;
  } */
  /* v-text-field {
    width: 10px;
  } */

  .search_bar {
    margin-left: 20vw;
  }

  .filter_text {
    margin: 1vw;
  }

  /* .filter_bar {
    margin-left: 5vw;
  } */





  
  
  

</style>