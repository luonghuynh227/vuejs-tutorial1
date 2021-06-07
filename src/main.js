import {createApp} from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import dropdown from '../node_modules/vue-simple-search-dropdown/dist/vue-simple-search-dropdown'
// import vuetify from '../node_modules/vuetify'
import VModal from 'vue-js-modal'
// import 'vue-js-modal/dist/styles.css'
// import BootstrapVue from 'bootstrap-vue'
// import VueSingleSelect from "vue-single-select";

// Vue.component('vue-single-select', VueSingleSelect);

import Dropdown from "vue-simple-search-dropdown";
// import CustomGoogleAutocomplete from 'vue-custom-google-autocomplete'

createApp(App).use(store, Dropdown, VModal).use(router).mount('#app')
// const root= new Vue({
//   store,
//   router,
//   render: (h) => h(App),
// }).$mount('#app')

// Vue.use()

// new Vue({
//   App,
//   store,
//   router
// }).$mount('#app');

// const app = new Vue({
//   store,
//   router,
//   el: '#app',
//   render: h => h(App)
// })

// export default app;