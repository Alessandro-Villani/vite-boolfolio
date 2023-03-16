<script>
import axios from 'axios'
import AppLoader from '../generics/AppLoader.vue';
import ProjectCard from '../projects/ProjectCard.vue';

const apiBaseUrl = 'http://127.0.0.1:8000/api/projects/'
export default {
    name: "ProjectPage",
    data() {
        return {
            project: {},
            isLoading: false,
        };
    },
    computed: {
        postId() {
            return this.$route.params.id;
        }
    },
    methods: {
        fetchProject() {
            this.isLoading = true;
            axios.get(apiBaseUrl + this.postId).then(res => {
                this.project = res.data;
            }).catch(e => {
                console.error(e);
            }).then(() => {
                this.isLoading = false;
            });
        }
    },
    created() {
        this.fetchProject();
    },
    components: { ProjectCard, AppLoader }
}
</script>

<template>
    <main>
        <div class="container my-5">
            <AppLoader v-if="isLoading" />
            <ProjectCard v-else :project="project" />
        </div>
    </main>
</template>

<style scoped lang="scss"></style>

