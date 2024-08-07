import { createRouter, createWebHistory } from 'vue-router'
import PassengerListView from '@/views/PassengerListView.vue'
import PassengerLayoutView from '@/views/passenger/LayoutView.vue'
import PassengerDetailView from '@/views/passenger/DetailView.vue'
import AirlineView from '@/views/passenger/AirlineView.vue'

import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'passenger-list-view',
      component: PassengerListView,
      props: (route) => ({
        // size: parseInt(route.query.size?.toString() || '2'),
        // page: parseInt(route.query.page?.toString() || '1')
        size: parseInt('2'),
        page: parseInt('1')
      })
    },
    {
      path: '/passenger/:id',
      name: 'passenger-layout-view',
      component: PassengerLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'passenger-detail-view',
          component: PassengerDetailView,
          props: true
        },
        {
          path: '',
          name: 'airline-view',
          component: AirlineView,
          props: true
        }
      ]
    },
    {
      path: '/',
      name: 'passenger-list-view',
      component: PassengerListView
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/network-error',
      name: 'network-error-view',
      component: NetworkErrorView
    }
  ]
})

export default router
