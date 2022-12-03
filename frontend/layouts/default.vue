<template>
    <v-app
        id="main"
        :style="{ background: $vuetify.theme.themes.dark.background }"
    >
        <Navbar />
        <v-main class="mx-16 mt-2">
            <v-container>
                <Nuxt />
            </v-container>
        </v-main>

        <LMSFooter />
    </v-app>
</template>

<script>
export default {
    name: 'DefaultLayout'
}
</script>
