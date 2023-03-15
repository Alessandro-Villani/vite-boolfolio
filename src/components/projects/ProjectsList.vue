<script>
import AppPagination from '../AppPagination.vue';
import ProjectCard from './ProjectCard.vue';

export default {
    name: "ProjectsList",
    props: {
        projects: Array,
        links: Array
    },
    components: { ProjectCard, AppPagination }
}
</script>

<template>
    <section id="projects-list" class="container my-5">
        <ul>
            <ProjectCard v-for="project in projects" :project="project" />
        </ul>
        <footer>
            <AppPagination :links="links" @change-page="$emit('change-page', $event)" />
        </footer>
    </section>
</template>

<script scoped lang="scss">
</script>