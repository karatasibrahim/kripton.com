<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import { paginationMeta } from '@/@fake-db/utils'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const searchQuery = ref('')

const options = ref({
  page: 1,
  itemsPerPage: 20, 
  sortBy: [{ key: 'name', order: 'asc' }],
  groupBy: [],
  search: undefined,
})

const projects = ref([])

// Tablo başlıkları
const headers = [
{ title: 'Icon', key: 'icon', sortable: false },
  { title: 'Coin Name', key: 'name' },
  { title: 'Symbol', key: 'symbol' },
  { title: 'Price (USD)', key: 'price' },
  { title: 'Circulating Supply', key: 'supply' },
  { title: 'Last Update', key: 'lastUpdate' },
  { title: 'Comment', key: 'comment', sortable: false },
]

// API'den veri çekme
async function fetchCryptoPrices() {
  const apiKey = '9a9d74af-1316-4aff-80a4-e0d645aa1b29'
  const symbols = [
    'BTC', 'ETH', 'XRP', 'SOL', 'BNB', 'DOGE', 'ADA', 'TRX', 'AVAX', 'SHIB', 'XLM', 
    'DOT', 'HBAR', 'SUI', 'UNI', 'LTC', 'NEAR', 'APT', 'ICP', 'CRO', 'RENDER', 'ARB',
    'ALGO', 'STX', 'FTM', 'TIA', 'INJ', 'FLOKI', 'THETA', 'SEI', 'WLD', 'RUNE', 
    'SAND', 'QNT', 'FLR', 'FLOW', 'DYDX', 'ENS', 'MANA', 'MATIC', 'APE', 'GT', 
    'MINA', 'ZK', 'AMP', 'ROSE', 'ZRO', '1INCH', 'KSM', 'DASH', 'BOME'
  ]
  const apiUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbols.join(',')}`
  
  // try {
  //   const response = await axios.get(apiUrl, {
  //     headers: {
  //       'X-CMC_PRO_API_KEY': apiKey,
  //       Accept: 'application/json',
  //     },
  //   })
  try {
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-CMC_PRO_API_KEY': apiKey,
            'Accept': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data2 = await response.json(); 
 

    const data = data2.data

    projects.value = Object.values(data).map(coin => ({
      icon: `https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`, // İkon URL
      
      name: coin.name,
      symbol: coin.symbol,
      price: coin.quote.USD.price.toFixed(2),
      supply: coin.circulating_supply.toLocaleString(),
      lastUpdate: new Date(coin.last_updated).toLocaleString(),
      comment: '',
    })) .sort((a, b) => a.name.localeCompare(b.name))

    //console.log(projects.value)
  } catch (error) {
    console.error('API Fetch Error:', error)
  }
}

onMounted(fetchCryptoPrices)
</script>
<template>
  <VCard v-if="projects.length">
    <VCardItem class="project-header d-flex flex-wrap justify-space-between py-4 gap-4">
      <VCardTitle>Cryptocurrency Prices</VCardTitle>
    </VCardItem>

    <VDivider />

    <!-- Tablo -->
    <VDataTable
      v-model:page="options.page"
      :items-per-page="20"
      show-select
      :search="searchQuery"
      :headers="headers"
      :items="projects"
      class="text-no-wrap"
      @update:options="options = $event"
    >
      <!-- İkon sütunu -->
      <template #item.icon="{ item }">
        <img :src="item.value.icon" alt="Icon" width="38" height="38" />
        
      </template>

      <!-- Yorum sütunu editable -->
      <template #item.comment="{ item }">
        <VTextField
          v-model="item.comment"
          variant="outlined"
          placeholder=""
          dense
        />
      </template>

      <template #bottom>
        <VDivider />
        <div class="d-flex align-center justify-center justify-sm-space-between flex-wrap gap-3 pa-5 pt-3">
          <p class="text-sm text-disabled mb-0">
            Showing {{ options.page * options.itemsPerPage }} of {{ projects.length }} entries
          </p>
          <VPagination
            v-model="options.page"
            :total-visible="Math.ceil(projects.length / options.itemsPerPage)"
            :length="Math.ceil(projects.length / options.itemsPerPage)"
          />
        </div>
      </template>
    </VDataTable>
  </VCard>
</template>

<style lang="scss">
.project-header .v-card-item__append {
  padding-inline-start: 0;
}
</style>