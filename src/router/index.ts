import { createRouter, createWebHistory } from 'vue-router'
import ConnexionView from '../views/ConnexionView.vue'
import ProductView from '../views/ProductView.vue'
import InventoryView from '../views/InventoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'connexion',
      component: ConnexionView
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: InventoryView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView,
      beforeEnter: (to, from, next) => {
        const email = localStorage.getItem('email');
        if (email) {
          next();
        } else {
          next('/');
        }
      }
    }
  ]
});

export default router;

