<template>
  <v-app>
    <v-app-bar color="blue" app>
      
      <img  class="logo" src="../assets/logo.png" alt="lms logo">
      <a><span class="name">LMS Mirror</span></a>
      <div class="right">
        <a><span>Home</span></a>
        <a><span>Log In</span></a>
        <a><span>Help</span></a>
        <a><span>Contact</span></a>

      </div>

    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>
    <v-footer class="center">
      <p>LMS Mirror 2022</p>
      <span>|</span>
      <a>An RCOS project</a>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style>
.logo {
  height: 100%;

}

span {
  margin: 3vw;
  color: white;
}

.name {
  margin-left: 1.5vw;
}

.right {
  display: inline-block;
  margin-left: 40vw;
  
  
}

.center {
  display: block;
  text-align: center;
}

v-footer a, p, span, div{
  display: inline;
}

</style>
