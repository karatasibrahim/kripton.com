<script setup>
import { ref } from 'vue'
import { VCard, VCardTitle, VCardText, VRow, VCol, VContainer } from 'vuetify/components'
import { PieChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

// Yatırım oranları
const investmentData = {
  labels: ['Ana Altcoinler', 'Kaliteli Coinler', 'Riskli Yatırımlar', 'Trade/Nakit'],
  datasets: [
    {
      label: 'Yatırım Dağılımı',
      data: [25, 25, 35, 10],
      backgroundColor: ['#F44336', '#2196F3', '#FFC107', '#4CAF50'],
    },
  ],
}

// Kategori Açıklamaları
const categories = [
  {
    title: 'Ana Altcoinler',
    description: 'BTC, ETH ve ana altcoinler (AVAX, SOL, DOT, XRP, HBAR...)',
    range: '1T - 1B',
    percent: '25%',
  },
  {
    title: 'Kaliteli Coinler',
    description: 'x10 - 50 yapabilecek borsa tokenları ve kaliteli altcoinler',
    range: '1B - 100M',
    percent: '25%',
  },
  {
    title: 'Riskli Yatırımlar',
    description: 'x100+ potansiyeli olan, yatırımcısı güçlü altcoinler',
    range: '100M - 1M',
    percent: '35%',
  },
  {
    title: 'Trade / Cash',
    description: 'USDT, USDC ve al-sat işlemleri',
    range: 'Trade / Cash',
    percent: '10%',
  },
]

// Proje Seçim Kriterleri
const selectionCriteria = [
  'Unlock- Vesting Takvimi uygun mu?',
  'Yatırımcısı iyi mi? Ortaklıkları.. Balina yatırımı var mı?',
  'Funding mevcut MarketCap oranı ne?',
  'Total Supply, MarketCap?',
  'Proje Ekibi ve Geliştirmeler?',
  'Web sitesi ve sosyal medya durumu nasıl?',
  'Proje bir soruna çözüm buluyor mu?',
  'Hangi borsalarda var? Büyük borsalara girebilir mi?',
  'Fiyatı alım seviyesinde mi? Alırsam kaça satabilirim?',
  'Projenin HOT haberleri var mı?',
]
</script>

<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <VCard>
          <VCardTitle class="text-h5">Yatırım Dağılım Stratejisi</VCardTitle>
          <VCardText>
            <PieChart :chart-data="investmentData" :options="{ responsive: true }" />

          </VCardText>
        </VCard>
      </VCol>

      <VCol cols="12">
        <VCard>
          <VCardTitle class="text-h5">Yatırım Kategorileri</VCardTitle>
          <VRow>
            <VCol v-for="category in categories" :key="category.title" cols="12" md="6" lg="3">
              <VCard outlined>
                <VCardTitle class="text-h6">{{ category.title }}</VCardTitle>
                <VCardText>
                  <p><strong>Açıklama:</strong> {{ category.description }}</p>
                  <p><strong>Aralık:</strong> {{ category.range }}</p>
                  <p><strong>Oran:</strong> {{ category.percent }}</p>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </VCard>
      </VCol>

      <VCol cols="12">
        <VCard>
          <VCardTitle class="text-h5">Proje Seçim Kriterleri</VCardTitle>
          <VCardText>
            <ul>
              <li v-for="criterion in selectionCriteria" :key="criterion">{{ criterion }}</li>
            </ul>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
</style>