<template>
    <v-card dark width="100%" class="pa-4 course-card">
        <div class="info-text">
            {{ code }}
        </div>

        <div class="name-row">
            <nuxt-link class="d-inline-flex class-name" to="">
                {{ name }}
            </nuxt-link>
        </div>

        <div class="vertical-center">
            <input
                class="star"
                type="checkbox"
                title="bookmark page"
            />
        </div>

        <div class="minor-text-row">
            <div class="d-inline">
                {{ prof }}
            </div>

            <span v-if="extraInfo">
                &nbsp; • &nbsp;
            </span>

            <v-dialog
                v-model="dialog"
                width="500"
                overlay-color="black"
                overlay-opacity="0.7"
            >
                <template #activator="{ on, attrs }">
                    <a 
                        href="javascript:none"
                        v-bind="attrs"
                        v-on="on"
                    >
                        <span v-if="extraInfo">
                            More info
                        </span>
                    </a>
                </template>

                <v-card>
                    <v-card-title>{{ name }}</v-card-title>
                    <v-card-text>
                        {{ extraInfo }}
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'IndexClass',
    props: {
        name: {
            type: String,
            default: 'Unknown Class'
        },
        prof: {
            type: String,
            default: 'Unknown Prof'
        },
        code: {
            type: String,
            default: '????_????'
        },
        extraInfo: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            dialog: false,
        }
    }
}
</script>

<style scoped lang="scss">
.course-card {
    border-radius: 0 !important;
    margin: 4px 0;
}

// Prof and course code
.info-text {
    font-size: 11pt;
    opacity: $secondary-text-opacity;
}

.name-row {
    display: flex;
    flex-direction: row;

    .class-name {
        color: white;
        text-decoration: none;
        font-size: 14pt;
        max-width: calc(100% - 51px); // 51 px is width of star from right

        &:hover { text-decoration: underline; }
    }
}

.vertical-center {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 8px;   // Padding of card
    height: 45px; // Line height

    .star {
        margin-left: auto;
        visibility: hidden;
        font-size: 30px;
        cursor: pointer;
        color: gold;
        margin-right: 30px;

        &:before {
            content: "\2605";
            visibility: visible;
        }

        &:checked:before {
            color: gray;
            content: "\2606";
        }
    }
}

.minor-text-row {
    margin-top: 4px;
    opacity: 0.7;
    font-size: 10.5pt;

    a { opacity: 1; }
}
</style>
