import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// const Foo = { template: '<div>Not working</div>' }
import ExampleComponent from '../components/ExampleComponent.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/test',
        component: ExampleComponent
    }]
})

export default router;