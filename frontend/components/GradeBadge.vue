<template>
    <v-chip
        :color="color"
        x-small
        class="ml-2"
    >{{ grade || '--' }} / {{ total }}</v-chip>
</template>

<script>
export default {
    name: 'GradeBadge',
    props: {
        grade: {
            type: Number,
            default: undefined
        },
        total: {
            type: Number,
            default: 0
        }
    },
    computed: {
        color() {
            if (this.grade === undefined || !this.total) return 'gray';
            let ratio = this.grade / this.total;
            if (ratio < 0.6) return 'red';
            if (ratio < 0.7) return 'orange darken-3';
            if (ratio < 0.85) return 'yellow darken-3';
            return 'green';
        }
    }
}
</script>

<style scoped lang="scss">

</style>
