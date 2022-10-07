<template>
    <!-- TODO color code left side? -->
    <div>
        <v-row no-gutters>
            <v-col cols="8">
                <div class="col">
                    <a href=""><b>Assignment Name</b></a>
                    <p>Homework / Test / Whatever | <a href="">View description</a></p>
                </div>
            </v-col>
            <v-col cols="3">
                <div class="col">
                    <b>Date</b>
                    <b>Graded</b> <!-- Or upcoming if not graded -->
                </div>
            </v-col>
            <v-col cols="1">
                <div class="col">
                    <!-- TODO color code this number? -->
                    <p class="grade-top">5.00</p>
                    <p class="grade-bottom">/15</p>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<style lang="scss">
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
