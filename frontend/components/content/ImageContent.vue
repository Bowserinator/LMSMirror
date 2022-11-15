<template>
    <GenericContent
        :title="title"
        icon="mdi-file-image"
    >
        <slot />
    </GenericContent>
</template>

<script>
import ContentProps from './content.js';
import GenericContent from './GenericContent.vue';

export default {
    components: { GenericContent },
    mixins: [ContentProps]
};
</script>
