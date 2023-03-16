<script>
import AppPagination from '../AppPagination.vue';
import ProjectCard from './ProjectCard.vue';

export default {
    name: "ProjectsList",
    props: {
        projects: Array,
        links: Array,
        pages: Number
    },
    components: { ProjectCard, AppPagination }
}
</script>

<template>
    <section id="projects-list" class="container my-5">
        <ul class="px-0" v-if="projects.length">
            <ProjectCard v-for="project in projects" :project="project" :isDetail="false" />
        </ul>
        <h2 v-else class="text-light py-5 text-center">Non ci sono post</h2>
        <footer v-if="pages > 1">
            <AppPagination :links="links" @change-page="$emit('change-page', $event)" />
        </footer>
    </section>
</template>

<script scoped lang="scss">
</script>