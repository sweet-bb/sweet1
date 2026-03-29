const routes = [
  {
    path: '/',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/products',
    component: () => import('../pages/Products.vue'),
  },
  {
    path: '/about',
    component: () => import('../pages/About.vue'),
  },
  {
    path: '/contact',
    component: () => import('../pages/Contact.vue'),
  },
]

export default routes
