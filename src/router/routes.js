import DefaultContainer from '@/container/DefaultContainer'

const ping = {
  path: '/',
  component: DefaultContainer,
  children: [
    {
      path: 'ping',
      name: 'listMaps',
      meta: {
        label: 'Manage Maps',
        title: 'List of Maps'
      },
      component: () => import('../views/Ping.vue')
    }
  ]
}
export default [ping]
