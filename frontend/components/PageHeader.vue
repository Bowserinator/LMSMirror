<template>
    <h1 class="page-header">
        {{ text }}
    </h1>
</template>

<script>
export default {
    name: 'PageHeader',
    props: {
        text: {
            type: String,
            default: 'Unknown Page'
        }
    }
};
</script>

<style scoped>
.page-header {
    font-family: serif;
    margin-bottom: 10px;
}
</style>
