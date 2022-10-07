<template>
    <div>
        <div class="head_bar">
            <h2>Courses</h2>
        </div>

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

        <h2 class="term">
            Fall 2022
        </h2>


        <div class="course_list">
            <div class="course">
                <div class="course_info">
                    <div class="prof_code">
                        <p class="course_code">2209_MATH 4100</p>
                        <p class="prof">Brown</p>
                    </div>
                    <a><h1 class="course_name">Linear Algebra</h1></a>
                    <a href="" class="more_info"><p>More info</p></a>
                    <input class="star" type="checkbox" title="bookmark page"><br/><br/>
                </div>
            </div>

            <div class="course">
                <div class="course_info">
                    <div class="prof_code">
                        <p class="course_code">2209_CSCI 2200</p>
                        <p class="prof">Goldschmidt</p>
                    </div>
                    <a><h1 class="course_name">Foundations of Computer Science </h1></a>
                    <a href="" class="more_info"><p>More info</p></a>
                    <input class="star" type="checkbox" title="bookmark page"><br/><br/>
                </div>
            </div>


            <div class="course">
                <div class="course_info">
                    <div class="prof_code">
                        <p class="course_code">2209_ITWS 2110 </p>
                        <p class="prof">Callahan</p>
                    </div>
                    <a><h1 class="course_name">Web Systems Development</h1></a>
                    <a href="" class="more_info"><p>More info</p></a>
                    <input class="star" type="checkbox" title="bookmark page"><br/><br/>
                </div>
            </div>
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
  .head_bar {
    display: flex;
    /* background-color: red; */
    width: 100%;
    height: 10vh;
    border-bottom: 1px solid white;
    margin-bottom:5vh;
  }

  .head_bar h2{
    margin-left: 3vw;
  }

  .course_list {
    /* display: flex; */
    width: 100%;
  }

  .course {
    display: flex;
    height: 25vh;
    /* width: 100%; */
    background: rgb(69, 69, 69);
    border: 1px solid ;
    margin: 3vw;
  }

  .course_buttons {
    margin-left: 45px;
    margin-right: 45px;
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
  .term {
    margin-top: 20px;
    margin-left: 45px
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
    width: 70vw;
  }

  .prof_code {
    display: block;
  }

  .star {
    visibility:hidden;
    font-size:60px;
    cursor:pointer;
    color: gold;
    position: relative;
    bottom: 36px;
    left: 100px;

  }
.star:before {
   content: "\2605";
   position: absolute;
   visibility:visible;
  }
.star:checked:before {
   content: "\2606";
   position: absolute;
  }


</style>
