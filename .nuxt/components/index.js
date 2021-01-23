export { default as Categories } from '../..\\components\\categories.vue'
export { default as HelloWorld } from '../..\\components\\HelloWorld.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as MyButton } from '../..\\components\\My-Button.vue'

export const LazyCategories = import('../..\\components\\categories.vue' /* webpackChunkName: "components/categories" */).then(c => c.default || c)
export const LazyHelloWorld = import('../..\\components\\HelloWorld.vue' /* webpackChunkName: "components/hello-world" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyMyButton = import('../..\\components\\My-Button.vue' /* webpackChunkName: "components/my-button" */).then(c => c.default || c)
