<template>
    <div class="content-container">
        <!-- TODO icon -->
        <v-icon large>
            {{ icon }}
        </v-icon>
        <div>
            <p class="title">
                {{ title }}
            </p>
            <slot />
        </div>
    </div>
</template>

<script>
import ContentProps from './content.js';

export default {
    name: 'GenericContent',
    mixins: [ContentProps]
};
</script>


<style lang="scss" scoped>
.content-container {
    display: flex;
    align-items: flex-start;
    padding: 16px;

    // Icon padding
    & > .v-icon {
        margin-right: 16px;
    }

    // Hover
    // TODO: don't hard code colors
    &:hover {
        background-color: #333;
    }

    margin-bottom: 4px;
    transition: background-color 0.2s;
    background-color: #1c1c1c;
}

.title {
    font-weight: bold;
    margin-bottom: 0;
}
</style>
