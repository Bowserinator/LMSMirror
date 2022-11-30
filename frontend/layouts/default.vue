<template>
    <v-app
        id="main"
        :style="{ background: $vuetify.theme.themes.dark.background }"
    >
        <Navbar />
        <v-main class="mx-16">
            <v-container>
                <Nuxt />
            </v-container>
        </v-main>

        <LMSFooter />
    </v-app>
</template>

<script>
export default {
    name: "DefaultLayout",
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: "mdi-apps",
                    title: "Welcome",
                    to: "/",
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Inspire",
                    to: "/inspire",
                },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Vuetify.js",
        }
    },
}
</script>

<style>
#logo {
    height: 100%;

}

#name {
    margin-left: 1.5vw;
}

#right {
    display: inline-block;
    margin-left: 40vw;
}
</style>
