<template>
    <div style="position:relative">
        <!-- Color coded background that changes based on assignment type-->
        <div class="background" :style="'background-color: ' + typeColor" />

        <!-- Main content, in 3 columns -->
        <v-row no-gutters class="main">
            <v-col cols="8">
                <div class="col">
                    <a href="" class="assignment-name"><b>{{ name }}</b></a>
                    <p class="text--secondary">
                        {{ type.substring(0, 1).toUpperCase() + type.substring(1) }}

                        <span v-if="description.length" class="font-italic">
                            &nbsp; • &nbsp;
                            {{ condensedDescription }}
                        </span>

                        <!-- Popup dialog for description -->
                        <v-dialog
                            v-if="description.length"
                            v-model="dialog"
                            width="500"
                        >
                            <template #activator="{ on, attrs }">
                                <a
                                    v-if="isLongDesc"
                                    href="javascript:none"
                                    v-bind="attrs"
                                    v-on="on"
                                >(more)</a>
                            </template>

                            <v-card>
                                <v-card-title>
                                    {{ name }}
                                </v-card-title>
                                <v-card-text>
                                    {{ description }}
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                    </p>
                </div>
            </v-col>
            <v-col cols="2">
                <div class="col">
                    <b class="text--primary">{{ dateNote }}</b><br>
                    <span class="text--secondary">{{ date }}</span>
                </div>
            </v-col>
            <v-col cols="2">
                <div class="col" :style="'color: ' + gradeColor">
                    <p class="grade-top">
                        {{ grade[0].toFixed(2) }}
                    </p>
                    <p class="grade-bottom">
                        / {{ grade[1] }}
                    </p>
                </div>
            </v-col>
        </v-row>
        <v-divider />
    </div>
</template>

<script>
import colors from 'vuetify/es5/util/colors';

const MAX_DESCRIPTION_LENGTH = 50;
const TYPES = ['homework', 'quiz', 'test', 'other'];
const TYPE_COLORS = [
    'transparent',
    colors.amber.accent2,
    colors.purple.accent2,
    colors.grey.accent2
];

export default {
    props: {
        name: {
            type: String,
            default: 'Unknown Assignment'
        },
        description: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'homework',
            validator(value) {
                return TYPES.includes(value);
            }
        },
        dateDue: {
            default: null,
            validator(value) {
                return value instanceof Date || value === null;
            }
        },
        grade: {
            type: Array,
            default: () => [0, 0],
            validator(value) {
                // Grades are 2 numbers: [num, denom], and all values are numbers >= 0
                return value.length === 2 && value.every(v => typeof v === 'number' && v >= 0);
            }
        }
    },
    computed: {
        typeColor() {
            return TYPE_COLORS[TYPES.indexOf(this.type)];
        },
        gradeColor() {
            if (this.grade[1] === 0)
                return colors.grey.lighten1;
            let grade = this.grade[0] / this.grade[1];
            if (grade < 0.6) return colors.red.accent2;
            if (grade < 0.7) return colors.orange.accent2;
            if (grade < 0.85) return colors.yellow.accent1;
            return colors.green.accent3;
        },
        dateNote() {
            if (!this.dateDue || this.dateDue > Date.now())
                return 'Upcoming';
            return 'Date Graded';
        },
        date() {
            return this.dateDue ? (this.dateDue.toDateString()) : '';
        },
        condensedDescription() {
            return this.description.length > MAX_DESCRIPTION_LENGTH ?
                this.description.substring(0, MAX_DESCRIPTION_LENGTH - 3) + '...' :
                this.description;
        },
        isLongDesc() {
            return this.description.length > MAX_DESCRIPTION_LENGTH;
        }
    }
};
</script>


<style lang="scss">
.assignment-name { color: white !important; }

.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.03;
    pointer-events: none;
}

.main {
    padding: 12px;

    p { margin: 0; }
    a { text-decoration: none; }
}

.col {
    padding: 0 5px;
}

.grade-top,
.grade-bottom {
    text-align: right;
    margin: 0 !important;
}

.grade-top {
    font-size: 16pt;
    font-weight: bold;
    margin-bottom: -5px !important;
}

.grade-bottom {
    font-size: 10pt;
    opacity: $secondary-text-opacity;
}
</style>
