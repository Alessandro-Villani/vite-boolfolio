<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api/';

export default {
  name: "Boolfolio",
  components: { AppHeader, ProjectsList },
  data() {
    return {
      projects: [],
    }
  },
  methods: {
    fetchProjects() {
      axios.get(apiBaseUrl + 'projects').then(res => {
        this.projects = res.data;
      }).catch(e => {
        console.error(e);
      }).then(() => {

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
    <ProjectsList :projects="projects" />
  </main>
</template>

<style lang="scss">
@use './assets/sass/style.scss';
</style>
