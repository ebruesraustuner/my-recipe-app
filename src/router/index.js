import Vue from 'vue'
import VueRouter from 'vue-router'
//import { component } from 'vue/types/umd'
import Home from '../views/Home.vue'
import Variables from '../views/Variables.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import RecommendCook from '../views/RecommendCook'
import Recipes from '../views/Recipes.vue'
import Tricks from '../views/Tricks.vue'
import About from '../views/About.vue'
import RecipeDetails from '../views/RecipeDetails.vue'
import BlogDetails from '../views/BlogDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/variables',
    name: 'Variables',
    component: Variables
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/recommendcook',
    name: 'recommendcook',
    component: RecommendCook
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: Recipes
  },
  {
    path: '/tricks',
    name: 'tricks',
    component: Tricks
  },
  {
    path: '/recipedetails/:Rid',
    name: 'recipedetails',
    component: RecipeDetails
  },
  {
    path: '/blogdetails/:Rid',
    name: 'blogdetails',
    component: BlogDetails
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
