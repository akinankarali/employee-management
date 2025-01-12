// src/routes/router.js
import { Router } from '@vaadin/router';

export const routes = [
  {
    path: '/',
    component: 'employee-list'
  },
  {
    path: '/add-employee',
    component: 'employee-form'
  },
  {
    path: '/edit-employee/:id',
    component: 'employee-form'
  }
];

const router = new Router(); // Changed from 'Router' to 'router'

window.addEventListener('load', () => {
  const outlet = document.querySelector('#outlet');
  router.setOutlet(outlet);
  router.setRoutes(routes);
});

export { router }; // Export the instance, not the class