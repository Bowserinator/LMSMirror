<template>
    <GenericContent
        :title="title"
        icon="mdi-file-document-multiple"
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
