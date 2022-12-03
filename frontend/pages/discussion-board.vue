<template>
    <div class="content">
        <PageHeader text="Discussion Board: XYZ" />

        <v-card class="d-flex justify-space-between mb-6 align-center" extension extension-height="700">
            <v-btn
                plain depressed :ripple="false" dark
                class="ma-2 pa-2"
                to="../create-discussion-post"
            >
                Create Thread
                <v-icon right dark>mdi-plus</v-icon>
            </v-btn>
            <v-text-field
                v-model="search" filled solo flat
                hide-details
                single-line
                height="56px"
                prepend-inner-icon="mdi-magnify"
                label="Search"
                background-color="grey darken-3"
                class="search_bar rounded-0"
                style="max-width: 300px;"
            />
        </v-card>

        <div>
            <v-data-table
                hide-default-footer disable-pagination
                fixed-header style="min-height: 400px"
                :search="search"
                :headers="headers"
                :items="threads"
                class="elevation-1 rounded-0"
            >
                <template #item.thread="{ item }">
                    <nuxt-link class="thread-link" :to="`/to${item.thread}`">
                        {{ item.thread }}
                    </nuxt-link>
                </template>
            </v-data-table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DiscussionBoard',
    data () {
        return {
            search: '',
            headers: [
                { text: 'Thread', value: 'thread',  },
                { text: 'Author', value: 'author', width: '220px' },
                { text: 'Date', value: 'date', width: '150px' },
                { text: 'Unread', value: 'unread', width: '90px' },
                { text: 'Total Comments', value: 'comments', width: '140px' }
            ],
            threads: [
                {
                    'thread': 'Thread Name',
                    'author': 'John Smith',
                    'date': 'Dec 25th 2022',
                    'unread': 10,
                    'comments': 10
                },
                {
                    'thread': 'Thread Name',
                    'author': 'John Smith',
                    'date': 'Dec 25th 2022',
                    'unread': 10,
                    'comments': 10
                },
                {
                    'thread': 'Thread Name',
                    'author': 'John Smith',
                    'date': 'Dec 25th 2022',
                    'unread': 10,
                    'comments': 10
                },
                {
                    'thread': 'Thread Name',
                    'author': 'John Smith',
                    'date': 'Dec 25th 2022',
                    'unread': 10,
                    'comments': 10
                },
                {
                    'thread': 'Thread Name',
                    'author': 'John Smith',
                    'date': 'Dec 25th 2022',
                    'unread': 10,
                    'comments': 10
                }
            ]
        }
    }
};
</script>
<style scoped>
.thread-link {
    text-decoration: none;
    filter: brightness(150%);
    width: 100%;
    display: block;
}

.thread-link:hover {
    text-decoration: underline;
}
</style>
