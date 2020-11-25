import Vue from 'vue'
import VueRouter from 'vue-router'
//import { component } from 'vue/types/umd'

const Home =  () => import('../views/Home.vue')
const Variables = () => import('../views/Variables.vue')
const Blog = () => import('../views/Blog.vue') 
const Contact = () => import('../views/Contact.vue')
const RecommendCook  = () => import('../views/RecommendCook')
const Recipes = () => import('../views/Recipes.vue')
const Tricks = () => import('../views/Tricks.vue')
const About = () => import('../views/About.vue')
const RecipeDetails = () => import('../views/RecipeDetails.vue')
const BlogDetails = () => import('../views/BlogDetails.vue')

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
