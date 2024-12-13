<script setup>
import { ref } from 'vue'
import { VContainer, VRow, VCol, VCard, VCardTitle, VCardText } from 'vuetify/components'

// Kategoriler ve Projeler
const categories = [
  {
    title: "Layer 0",
    description: "Farklı blockchain ağlarının bir arada çalışabilmesini sağlayan altyapı katmanıdır.",
    projects: ["Polkadot (DOT)", "Cosmos (ATOM)", "ARPA (ARPA)"],
  },
  {
    title: "Layer 1",
    description: "Bağımsız çalışan temel blockchain ağlarıdır.",
    projects: ["Bitcoin (BTC)", "Ethereum (ETH)", "Solana (SOL)", "TRON (TRX)"],
  },
  {
    title: "Layer 2",
    description: "Daha hızlı işlem kapasitesi ve ölçeklenebilirlik sağlayan çözümler.",
    projects: ["Arbitrum (ARB)", "Optimism (OP)", "Polygon (MATIC)"],
  },
  {
    title: "Smart Contract Platform",
    description: "Akıllı sözleşmelerle çalışan blockchain platformları.",
    projects: ["Ethereum (ETH)", "Avalanche (AVAX)", "TRON (TRX)"],
  },
  {
    title: "DeFi",
    description: "Merkeziyetsiz finans hizmetleri sunan projeler.",
    projects: ["Uniswap (UNI)", "Sushiswap (SUSHI)", "Maker (MKR)"],
  },
  {
    title: "Payments",
    description: "Ödeme sistemlerini destekleyen blockchain projeleri.",
    projects: ["Bitcoin (BTC)", "XRP (XRP)", "Stellar (XLM)"],
  },
  {
    title: "Meme Coin",
    description: "Topluluk odaklı eğlenceli projeler.",
    projects: ["Dogecoin (DOGE)", "Shiba Inu (SHIB)", "PEPE (PEPE)"],
  },
  {
    title: "NFTs",
    description: "NFT'lerle çalışan blockchain projeleri.",
    projects: ["Ethereum (ETH)", "Solana (SOL)", "Flow (FLOW)"],
  },
]
</script>

<template>
  <VContainer>
    <h1 class="page-title">Kripto Kategorileri</h1>
    <VRow>
      <VCol
        v-for="category in categories"
        :key="category.title"
        cols="12" md="6" lg="4"
      >
        <VCard outlined>
          <VCardTitle class="category-title">{{ category.title }}</VCardTitle>
          <VCardText>
            <p class="category-description">{{ category.description }}</p>
            <ul>
              <li v-for="project in category.projects" :key="project">
                {{ project }}
              </li>
            </ul>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>
.page-title {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}

.category-title {
  font-size: 20px;
  font-weight: bold;
}

.category-description {
  margin-bottom: 1rem;
  font-size: 16px;
}
</style>
