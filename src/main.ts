import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3';
import pluginPersistence from 'pinia-plugin-persistence'

const pinia = createPinia();
pinia.use(pluginPersistence);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

createApp(App).use(pinia).use(BootstrapVue3).mount('#app');
