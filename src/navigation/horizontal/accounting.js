export default [
    { heading: 'Ön Muhasebe' },
    {
        title: 'İşlemler',
        icon: { icon: 'tabler-adjustments-plus' },
        children: [
            {
                title: 'Cari Hesaplar',
                
                to: 'apps-accounting-account',
            },
          { title: 'Gelir Ekle', to: 'apps-accounting-income' }, 
          { title: 'Gider Ekle', to: 'apps-accounting-expense' },
          { title: 'Çek/Senet', to: 'apps-accounting-bill' },
          { title: 'Fatura', 
          children: [
           
            {
              title: 'Alış Faturası',
              to:'apps-accounting-pruchaseinvoice',
            },
            {
                title: 'Satış Faturası',
                to:'apps-accounting-salesinvoice',
              },
            {
              title: 'İrsaliye',
              to: 'apps-accounting-waybill',
            },
          ], },
          { title: 'Kasa', to: 'apps-accounting-add' ,
          children: [
            {
              title: 'Giriş/Çıkış',
              to:'apps-accounting-entryexit',
            },
            {
                title: 'Günlük Kasa',
                to:'apps-accounting-dailycash',
              },
            {
              title: 'Bankaya Virman',
              to: 'apps-accounting-banktransfer',
            },
          ],},
          
          
        ],
      },
      
      {
        title: 'Envanter',
        icon: { icon: 'tabler-device-floppy' },
        children: [
          { title: 'Stok', to: 'apps-accounting-stock' }, 
          { title: 'Demirbaş', to: 'apps-accounting-fixture' }, 
        ],
      },
  ]
 