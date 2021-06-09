
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', 
        component: () => import('pages/Index.vue'),
        meta: { 
            requiresAuth: true,
            hideMenu: false
        }
      },
        { 
            path: 'login', 
            component: () => import('pages/Login.vue'),
            meta: { hideMenu: true }
        }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
