<template>
    <div>
        <v-card class="d-flex justify-center pa-3 my-6 login-card">
            <v-row>
                <v-col class="col-4" justify="center" align-self="center">
                        <img class="logo" src="../assets/logo.png" alt="logo" />
                </v-col>
                <v-col class="col-8" justify="center" align-self="center">
                    <div class="pa-6">
                        <InputLabel for="input-title">RCS ID</InputLabel>
                        <v-text-field
                            id="input-title"
                            class="rounded-0" outlined
                            solo dense
                        />

                        <InputLabel for="input-post">Password</InputLabel>
                        <v-text-field
                            id="input-post"
                            class="rounded-0" outlined
                            solo dense
                        />

                        <v-btn :ripple="false" dark color="green" class="pa-2" style="width: 100%">
                            Login
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'LoginPage'
}
</script>

<style>
.logo {
    display: block;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
    
}

.login-card {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%
}
</style>