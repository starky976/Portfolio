import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Works from '../views/Works.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/works', name: 'Works', component: Works },
  { path: '/contact', name: 'Contact', component: Contact }
]

export default createRouter({
  history: createWebHistory(),
  routes
})