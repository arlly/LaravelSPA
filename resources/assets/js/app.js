
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/public/topics', component: require('./components/List.vue'), name: 'list'},
        {path: '/public/topics/create', component: require('./components/Form.vue'), name: 'create'},
        {path: '/public/topics/:id', component: require('./components/Detail.vue'), name: 'detail'}
    ]
});

Vue.component('navbar', require('./components/Navbar.vue'));

const app = new Vue({
    el: '#app',
    router
});
