<template>
    <v-footer class="d-flex justify-center pt-3 pb-6" color="transparent">
        LMS Mirror &copy; {{ year }}
        &nbsp; <span style="opacity: 0.5">|</span> &nbsp;
        <a href="https://github.com/Bowserinator/LMSMirror">An RCOS Project</a>
    </v-footer>
</template>

<script>
export default {
    name: 'LMSFooter',
    data() {
        return {
            year: (new Date()).getFullYear()
        };
    }
}
</script>
