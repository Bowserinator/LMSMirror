<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes.dark.background}">
    <Navbar/>
    <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>
    <v-footer>

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
      title: 'Vuetify.js',
      }
  }
}
</script>

<style>
#logo {
  height: 100%;

}

span {
  margin: 3vw;
  color: white;
}

#name {
  margin-left: 1.5vw;
}

#right {
  display: inline-block;
  margin-left: 40vw;
  
  
}
</style>
