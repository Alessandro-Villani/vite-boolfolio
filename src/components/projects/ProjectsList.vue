<script>
import ProjectCard from './ProjectCard.vue';

export default {
    name: "ProjectsList",
    props: {
        projects: Array,
    },
    components: { ProjectCard }
}
</script>

<template>
    <section id="projects-list" class="container my-5">
        <ul>
            <ProjectCard v-for="project in projects" :project="project" />
        </ul>
    </section>
</template>

<script scoped lang="scss">
</script>