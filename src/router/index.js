import { setupLayouts } from 'virtual:generated-layouts';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';
import { canNavigate } from '@layouts/plugins/casl';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: (to) => {
        const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        const userRole = userData?.role || null;
        if (userRole === 'admin') return { name: 'dashboards-crm' };
        if (userRole === 'client') return { name: 'access-control' };
        return { name: 'login', query: to.query };
      },
    },
    {
      path: '/pages/user-profile',
      redirect: () => ({ name: 'pages-user-profile-tab', params: { tab: 'profile' } }),
    },
    {
      path: '/pages/account-settings',
      redirect: () => ({ name: 'pages-account-settings-tab', params: { tab: 'account' } }),
    },
    ...setupLayouts(routes),
  ],
});

const isUserLoggedIn = () => {
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');
  return Boolean(userData && userData.role && localStorage.getItem('accessToken'));
};

router.beforeEach((to, from, next) => {
  const isLoggedIn = isUserLoggedIn();
  const hasAccess = true;

  console.log('Navigating to:', to.name, 'Has Access:', hasAccess, 'Is Logged In:', isLoggedIn);

  if (to.name === 'login' && isLoggedIn) {
    next({ name: 'dashboards-crm' });
    return;
  }

  if (!isLoggedIn && to.name !== 'login') {
    next({ name: 'login', query: { to: to.name !== 'index' ? to.fullPath : undefined } });
    return;
  }

  if (isLoggedIn && !hasAccess) {
    console.warn('Access Denied:', to.name);
    next({ name: 'not-authorized' });
    return;
  }

  next();
});

export default router;
