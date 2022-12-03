<template>
    <v-text-field
        filled
        solo
        flat
        hide-details
        single-line
        height="56px"
        prepend-inner-icon="mdi-magnify"
        label="Search"
        background-color="grey darken-3"
        class="search_bar rounded-0"
        style="max-width: 300px;"
    />
</template>

<script>
export default {
    name: 'BarSearchInput'
}
</script>
