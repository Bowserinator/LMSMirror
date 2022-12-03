<template>
    <v-app dark>
        <div class="error-container">
            <h1 v-if="error.statusCode === 404">
                {{ pageNotFound }}
            </h1>
            <h1 v-else>
                {{ error.statusCode + ': ' + otherError }}
            </h1>

            <p class="text--secondary mt-3">
                If you think you found a bug, please add it to our 
                <a href="https://github.com/Bowserinator/LMSMirror/issues">issue tracker</a> on github.
            </p>

            <v-btn to="/" class="mt-5">Back to Home Page</v-btn>
        </div>
    </v-app>
</template>

<script>
export default {
    name: 'EmptyLayout',
    layout: 'empty',
    props: {
        error: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            pageNotFound: '404 Not Found',
            otherError: 'An error occurred',
        }
    },
    head() {
        const title = this.error.statusCode === 404 ?
            this.pageNotFound : this.error.statusCode + ': ' + this.otherError
        return { title };
    }
}
</script>

<style scoped>
.error-container {
    position: absolute;
    top: 200px;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
    width: 300px;
    max-width: 100%;
}

h1 {
    font-size: 40px;
}
</style>
