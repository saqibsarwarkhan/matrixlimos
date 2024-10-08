import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import axios from 'axios';

// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"
import '@/assets/scss/main.scss'; 

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();




// createApp(App).use(router).mount('#app')

const app = createApp(App);
// app.prototype.$http = axios;
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

// add necessary dependencies...

app.mount("#app");
