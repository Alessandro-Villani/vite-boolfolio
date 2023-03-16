import { createApp } from 'vue';
import App from './App.vue';
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
// ALERT COMPONENT
import AppAlert from './components/generics/AppAlert.vue';
// ROUTER
import { router } from './router'
const app = createApp(App);

app.component('AppAlert', AppAlert);
app.use(router);

app.mount('#app');
