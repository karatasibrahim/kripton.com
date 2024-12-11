export default [
    { heading: 'Raporlar' },
    {
        title: 'Günlük Raporlar',
        icon: { icon: 'tabler-report-search' },
        children: [ 
          { title: 'Rezervasyon Hareket', to: null }, 
          { title: 'Oda Değişimi', to: null },
          { title: 'Günlük Uyruk', to: null }, 
        ],
      },
      {
        title: 'Forecast Raporlar',
        icon: { icon: 'tabler-chart-infographic' },
        children: [ 
          { title: 'Doluluk Raporu', to: null }, 
          { title: 'Yıllık Uyruk', to: null }, 
        ],
      },
      {
        title: 'Sistem Raporları',
        icon: { icon: 'tabler-brand-laravel' },
        children: [ 
          { title: 'Misafir Şehir', to: null }, 
          { title: 'Misafir Yaş', to: null },
          { title: 'Tekrar Konaklama', to: null }, 
          { title: 'Oda Değişimi', to: null }, 
          { title: 'Oda Demirbaş', to: null }, 
        ],
      },
     
      {
        title: 'Stok Raporları',
        icon: { icon: 'tabler-building-factory-2' },
        children: [ 
          { title: 'Stok Raporu', to: null }, 
          { title: 'Aylık Stok Alış', to: null },
          { title: 'Stok Sayım', to: null }, 
          { title: 'Depo Stok Bakiye', to: null }, 
        ],
      },
      {
        title: 'İşlem Logları',
        icon: { icon: 'tabler-transform-filled' },
         to: null }, 
      
     
  ]
 