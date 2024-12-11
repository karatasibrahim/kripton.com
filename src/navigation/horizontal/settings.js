export default [
    { heading: 'Genel Ayarlar' },
    {
        title: 'Tanımlar',
        icon: { icon: 'tabler-notebook' },
        children: [
            {title: 'Acente Tanımla',to: 'apps-accounting-account' },
          { title: 'Departman Tanımla', to: 'apps-accounting-income' }, 
          { title: 'Laundry', to: 'apps-accounting-expense' },
         
          { title: 'Oda İşlemleri', 
          children: [
           
            {
              title: 'Oda Tipi',
              to:'apps-accounting-pruchaseinvoice',
            },
            {
                title: 'Oda Tanım',
                to:'apps-accounting-salesinvoice',
              },
            {
              title: 'Oda Grubu',
              to: 'apps-accounting-waybill',
            },
            {
                title: 'Oda Özellikleri',
                to: 'apps-accounting-waybill',
              },
              {
                title: 'Oda Fiyatlandırma',
                to: 'apps-accounting-waybill',
              },
          ], },

        
          {title: 'Ödeme Tipi',to: 'apps-accounting-account' },
          {title: 'Para Birimi',to: 'apps-accounting-account' },
          {title: 'Şube Tanımlama',to: 'apps-accounting-account' },
          
        ],
      },
      {
        title: 'Personel',
        icon: { icon: 'tabler-users' },
        children: [
          { title: 'Personel Listesi', to: 'apps-user-list' },
          //{ title: 'View', to: { name: 'apps-user-view-id', params: { id: 21 } } },
        ],
      },
      {
        title: 'Rol & Yetkiler',
        icon: { icon: 'tabler-shield-half-filled' },
        children: [
          { title: 'Rol Tanımlama', to: 'apps-roles' },
          { title: 'Yetki Tanımlama', to: 'apps-permissions' },
        ],
      },
      {
        title: 'Entegrasyon',
        icon: { icon: 'tabler-api-app' },
        children: [
          { title: 'E-Fatura Ayarları', to: 'apps-user-list' },
          { title: 'Sms Ayarları', to: 'apps-user-list' },
          { title: 'E-KBS Servisi', to: 'apps-user-list' },
          { title: 'J-KBS Servisi', to: 'apps-user-list' },
          
        ],
      },
      {
        title: 'Yardım',
        icon: { icon: 'tabler-help-square-rounded' },
        children: [
          { title: 'Kullanım Klavuzu', to: 'apps-user-list' },
          { title: 'Sıkça Sorulan Sorular', to: 'apps-user-list' },
          { title: 'Eğitim Videoları', to: 'apps-user-list' },
       
        ],
      },
     
  ]
 