<template>
  <div>
    <PageHeader text="Grades" />

    <div class="top-bar">
      <v-tabs v-model="tab" class="tabs">
        <v-tab>All</v-tab>
        <v-tab>Graded</v-tab>
        <v-tab>Upcoming</v-tab>
        <v-tab>Submitted</v-tab>
      </v-tabs>
      <v-select
        class="sort-dropdown"
        :items="sortBy"
        :value="sortBy[0]"
        filled
        solo
        flat
        hide-details
        background-color="grey darken-3"
      />
    </div>

    <v-tabs-items v-model="tab" class="tab-items">
      <v-tab-item>
        <v-container>
          <GradeAssignment
            name="RCOS test"
            type="test"
            :grade="[5, 10]"
            description="This was a test"
          />
          <GradeAssignment
            type="quiz"
            :grade="[7, 10]"
            name="ROCS QUIZ"
            description="Ok this was a really long assignment description that just goes on for forever"
          />
          <GradeAssignment type="quiz" :grade="[8, 10]" />
          <GradeAssignment type="quiz" :grade="[9, 10]" />
          <GradeAssignment
            type="quiz"
            :grade="[6, 10]"
            :date-due="new Date(Date.now() - 100)"
          />
          <GradeAssignment />
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container>
          <GradeAssignment />
          <GradeAssignment />
          <GradeAssignment />
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container>
          <GradeAssignment />
          <GradeAssignment />
          <GradeAssignment />
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container>
          <GradeAssignment />
          <GradeAssignment />
          <GradeAssignment />

          <p>Submission Receipts: 0</p>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import GradeAssignment from "../components/GradeAssignment.vue"
export default {
  name: "GradesPage",
  components: { GradeAssignment },
  data() {
    return {
      tab: null,
      sortBy: [
        "Course Order",
        "Last Activity",
        "Due Date (Latest First)",
        "Due Date (Oldest First)",
        "Type",
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 2px solid black;

  align-items: flex-start;
  align-content: flex-start;
  justify-content: stretch;

  & > .tabs {
    width: auto !important;
    max-width: 100%;
    height: 56px !important;

    &:deep(.v-tabs-bar) {
      height: 100% !important;
    }
  }

  & > .sort-dropdown {
    height: 100% !important;
    border-radius: 0 !important;
  }
}

.tab-items {
  background-color: #212121;
  min-height: 300px;
}
</style>
