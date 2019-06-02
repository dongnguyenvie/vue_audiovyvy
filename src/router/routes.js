import DefaultContainer from '@/container/DefaultContainer'

const ping = {
  path: '/ping',
  component: DefaultContainer,
  children: [
    {
      path: '',
      name: 'listMaps',
      meta: {
        label: 'Manage Maps',
        title: 'List of Maps'
      },
      component: () => import('../views/Ping.vue')
    }
  ]
}
const home = {
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
    }
  ]
}
export default [ping, home]
