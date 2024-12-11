export default [
  { heading: 'İşletme Ayarları' },
  {
    title: 'Tanımlar',
    icon: { icon: 'tabler-toggle-left' },
    children: [
      { title: 'Acente Tanımlama', to: 'forms-autocomplete' },
      { title: 'Şube Tanımlama', to: 'forms-checkbox' },
      { title: 'Laundry', to: 'forms-combobox' },
      { title: 'Oda Tanım', to: 'forms-date-time-picker' },
      { title: 'Oda Tipi', to: 'forms-file-input' },
      { title: 'Oda Grubu', to: 'forms-radio' },
      { title: 'Oda Durumu', to: 'forms-custom-input' },
      { title: 'Oda Özellikleri', to: 'forms-range-slider' },
      { title: 'Oda Fiyatlandırma', to: 'forms-rating' },
      { title: 'Para Birimleri', to: 'forms-select' },
      { title: 'Ödeme Tipleri', to: 'forms-slider' },
      { title: 'Departman', to: 'forms-switch' },
       
      
    ],
  },
  {
    title: 'Form Layouts',
    icon: { icon: 'tabler-layout-navbar' },
    to: 'forms-form-layouts',
  },
  {
    title: 'Form Validation',
    icon: { icon: 'tabler-checkbox' },
    to: 'forms-form-validation',
  },
  {
    title: 'Tables',
    icon: { icon: 'tabler-table' },
    children: [
      { title: 'Simple Table', to: 'tables-simple-table' },
      { title: 'Data Table', to: 'tables-data-table' },
    ],
  },
]
