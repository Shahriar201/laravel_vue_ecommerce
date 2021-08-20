require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import router from './frontend/router';

const app = new Vue({
    el: '#app',
    router,
});