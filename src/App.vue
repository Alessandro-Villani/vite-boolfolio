<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppLoader from './components/generics/AppLoader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api/';

export default {
  name: "Boolfolio",
  components: { AppHeader, ProjectsList, AppLoader },
  data() {
    return {
      projects: {
        data: [],
        links: [],
        pages: null,
      },
      isLoading: false,
      error: {
        status: false,
        type: 'Error',
        class: 'alert-danger',
        message: '',
      }
    }
  },
  methods: {
    fetchProjects(url = null) {
      this.isLoading = true;
      if (!url) url = apiBaseUrl + 'projects'
      axios.get(url).then(res => {
        this.projects.data = res.data.data;
        this.projects.links = res.data.links;
        this.projects.pages = res.data.last_page;
      }).catch(e => {
        this.error.status = true;
        this.error.message = e;

      }).then(() => {
        this.isLoading = false;
      })
    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <AppHeader />
  <main class="app-main">
    <AppAlert v-if="error.status" class="my-5" :alertClass="error.class" :alertType="error.type"
      :alertMessage="error.message" @alert-close="error.status = false" />
    <AppLoader v-if="isLoading" />
    <ProjectsList v-else :projects="projects.data" :links="projects.links" :pages="projects.pages"
      @change-page="fetchProjects" />
  </main>
</template>

<style lang="scss">
@use './assets/sass/style.scss';
</style>
