export default [
  {
    title: 'Ana Sayfa',
    icon: { icon: 'tabler-smart-home' },
    to: 'dashboards-crm',
   
    children: [
      {
        title: 'Analytics',
        to: 'dashboards-analytics',
      },
      {
        title: 'eCommerce',
        to: 'dashboards-ecommerce',
      },
      {
        title: 'CRM',
        to: 'dashboards-crm',
      },
    ],
    badgeContent: '3',
    badgeClass: 'bg-primary',
  },
]
