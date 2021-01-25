import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5a11b8e1 = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _38d2b87e = () => interopDefault(import('..\\pages\\Blog.vue' /* webpackChunkName: "pages/Blog" */))
const _60250714 = () => interopDefault(import('..\\pages\\BlogDetails.vue' /* webpackChunkName: "pages/BlogDetails" */))
const _1f03d8f4 = () => interopDefault(import('..\\pages\\Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _1a3a6ec8 = () => interopDefault(import('..\\pages\\Recipedetails.vue' /* webpackChunkName: "pages/Recipedetails" */))
const _d671720e = () => interopDefault(import('..\\pages\\Recipes.vue' /* webpackChunkName: "pages/Recipes" */))
const _57582810 = () => interopDefault(import('..\\pages\\RecommendCook.vue' /* webpackChunkName: "pages/RecommendCook" */))
const _1ab8845c = () => interopDefault(import('..\\pages\\Tricks.vue' /* webpackChunkName: "pages/Tricks" */))
const _4f47e06a = () => interopDefault(import('..\\pages\\Variables.vue' /* webpackChunkName: "pages/Variables" */))
const _025773c6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _5a11b8e1,
    name: "About"
  }, {
    path: "/Blog",
    component: _38d2b87e,
    name: "Blog"
  }, {
    path: "/BlogDetails",
    component: _60250714,
    name: "BlogDetails"
  }, {
    path: "/Contact",
    component: _1f03d8f4,
    name: "Contact"
  }, {
    path: "/Recipedetails",
    component: _1a3a6ec8,
    name: "Recipedetails"
  }, {
    path: "/Recipes",
    component: _d671720e,
    name: "Recipes"
  }, {
    path: "/RecommendCook",
    component: _57582810,
    name: "RecommendCook"
  }, {
    path: "/Tricks",
    component: _1ab8845c,
    name: "Tricks"
  }, {
    path: "/Variables",
    component: _4f47e06a,
    name: "Variables"
  }, {
    path: "/",
    component: _025773c6,
    name: "index"
  }, {
    path: "/recipedetails",
    component: _1a3a6ec8,
    name: "recipedetails"
  }, {
    path: "/Blogdetails",
    component: _60250714,
    name: "blogdetails"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
