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
    border: 1px solid white;
    padding: 16px;

    // Icon padding
    & > .v-icon {
        margin-right: 16px;
    }
}

.title {
    font-weight: bold;
    margin-bottom: 0;
}
</style>
