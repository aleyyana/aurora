import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import VueKinesis from "vue-kinesis";
import Carousel3d from 'vue-carousel-3d';
import './assets/main.css'

const app = createApp(App)

app.use(router);
app.use(VueKinesis);
app.use(Carousel3d);

app.mount('#app')
