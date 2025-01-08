import pages from './pages'

const children = pages.map(page => ({
  path: page.path,
  name: page.file,
  component: () => import('pages/' + page.file + '.vue'),
  meta: {
    requiresAuth: true,
    goBack: page.file !== 'IndexPage'
  }
}))

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/IndexPage.vue'),
        name: 'login',
        meta: {
          requiresAuth: false,
          goBack: false
        }
      }
    ].concat(children)
  },

  // Always leave this as the last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
