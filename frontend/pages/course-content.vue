<template>
    <div>
        <PageHeader text="Course Content" />

        <FileContent title="test">
            Attached files:

        <ol>
            <li><a>Test.pdf</a></li>
        </ol>
        </FileContent>

        <AnnouncementContent>
            <p>Homework information, including files and due dates, will be posted here. 
Your submission will only be accepted via Gradescope.
Your file must contain each problem statement followed by your solution. 
In your solutions, show all your work. 
Submissions that have been nicely formatted on LaTeX can receive a 5% bonus on the assignment. The .tex file for each assignment will be provided, so you can download it and build on that.
Submissions that are messy, difficult to read, and/or contain scratched out worked can receive a 5% penalty on the assignment.
Make sure to check if you have submitted the correct file.
Late submissions are subject to penalties, as described on the syllabus. If there are issues with particular due dates, the instructor should be contacted well in advance.
I encourage collaboration on homework. You are encouraged to work in groups in which you discuss the problems and help each other out if you are stuck. However, copying is forbidden, as is partitioning the homework among several students without everybody's participation on every problem. All of these are considered breaches of academic integrity. More precisely, you may collaborate as much as you want, as long as in the end you write your homework up on your own without looking at someone else's paper. The minimum penalty for students who submit identical solutions will be that they earn 0 points for the identical problem(s).
It is strictly forbidden to look for old solutions of recycled problems and copy them into your homework.  Such behavior is a breach of academic integrity and the minimum penalty will be that you earn 0 points for the entire assignment on which the copying occurs.
</p>
        </AnnouncementContent>

        <p>Folder thing</p>

        <pre>
TODO:
-announcement
- pdf
- single file
- attached files (multiple)
- folder
- external link
- quiz
- video??
        </pre>
    </div>
</template>


<script>
import FileContent from '../components/content/FileContent.vue';
import AnnouncementContent from '../components/content/AnnouncementContent.vue';

export default {
    name: 'CourseContentPage',
    components: { FileContent, AnnouncementContent }
};
</script>

<style lang="scss" scoped>

</style>
