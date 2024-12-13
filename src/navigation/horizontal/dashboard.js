export default [
  {
    title: 'Ana Sayfa',
    icon: { icon: 'tabler-smart-home' },
    to: 'dashboards-crm',
   
    children: [
      {
        title: 'Analiz',
        to: 'dashboards-analytics',
      },
      {
        title: 'Yatırım',
        to: 'dashboards-ecommerce',
      },
      {
        title: 'Kategori',
        to: 'dashboards-crm',
      },
    ],
    badgeContent: '3',
    badgeClass: 'bg-primary',
  },
]
