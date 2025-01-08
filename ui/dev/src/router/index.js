import { route } from 'quasar/wrappers'
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

import routes from './routes'
import { LocalStorage } from 'quasar'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(async function ({ store, /* ssrContext */ }) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
  })

  // we get each page from server first!
  if (process.env.MODE === 'ssr' && process.env.CLIENT) {
    console.log('!!!!')
    console.log('On route change we deliberately load page from server -- in order to test hydration errors')
    console.log('!!!!')

    let reload = false

    Router.beforeEach((to, from, next) => {
      // Get the token from local storage
      const token = LocalStorage.getItem('token')

      console.log('Authenticated route: ' + to.matched.some(record => record.meta.requiresAuth))

      // If the user is not authenticated
      // and trying to access a protected route,
      // redirect to login page
      if (to.matched.some(record => record.meta.requiresAuth) && !token) {
        // Redirect to login page with the next route as query parameter
        next({ name: 'login', query: { next: to.fullPath } })
      } else {
        // If the user is authenticated and trying to access the login page,
        // redirect to the next requested page
        next()
      }

      if (reload) {
        // Reload the page
        window.location.href = to.fullPath
        return
      }

      reload = false

      next()
    })
  }

  return Router
})
