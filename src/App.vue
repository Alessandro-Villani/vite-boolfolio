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
      projects: {
        data: [],
        links: [],
      },
    }
  },
  methods: {
    fetchProjects(url = null) {
      if (!url) url = apiBaseUrl + 'projects'
      axios.get(url).then(res => {
        this.projects.data = res.data.data;
        this.projects.links = res.data.links;
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
    <ProjectsList :projects="projects.data" :links="projects.links" @change-page="fetchProjects" />
  </main>
</template>

<style lang="scss">
@use './assets/sass/style.scss';
</style>
