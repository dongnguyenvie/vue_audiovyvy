import DefaultContainer from '@/container/DefaultContainer'

const ping = {
  path: '/ping',
  component: DefaultContainer,
  children: [
    {
      path: '',
      name: 'ping-page',
      meta: {
        label: 'ping pages',
        title: 'ping pages'
      },
      component: () => import('../views/Ping.vue')
    }
  ]
}
const pages = {
  path: '/',
  component: DefaultContainer,
  children: [
    {
      path: '',
      name: 'home-page',
      meta: {
        label: 'Home page',
        title: 'Home page'
      },
      component: () => import('../views/Home.vue')
    },
    {
      path: 'single-audio/:slug',
      name: 'single-audio',
      meta: {
        label: 'single audio page',
        title: 'single audio page'
      },
      component: () => import('../views/Single.vue')
    }
  ]
}

export default [ping, pages]
