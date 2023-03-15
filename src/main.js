import { createApp } from 'vue';
import App from './App.vue';
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
// ALERT COMPONENT
import AppAlert from './components/generics/AppAlert.vue'

const app = createApp(App);

app.component('AppAlert', AppAlert);

app.mount('#app');
