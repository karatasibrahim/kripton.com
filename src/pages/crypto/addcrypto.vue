<script setup>
import { ref } from 'vue'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebase' // Firebase yapılandırmasını içe aktar

// Yeni kripto verilerini tutacak state
const cryptoData = ref({
  Symbol: '',
  ProjectName: '',
  CoinMCap: 0,
  CryptoRank: 0,
  Unlocks: '',
  Categories: '',
  CurrentPrice: 0,
  CirculatingSupply: 0,
  MarketCap: 0,
  Note: '',
})

// Diğer ayarlar
const paymentTerms = ref(true)
const clientNotes = ref(false)
const paymentStub = ref(false)

// Kaydetme işlemi
const saveCryptoData = async () => {
  try {
    await addDoc(collection(db, 'Crypto'), {
      ...cryptoData.value,
      Categories: cryptoData.value.Categories.split(',').map((c) => c.trim()),
      Timestamp: new Date(),
    })
    alert('Crypto bilgisi başarıyla kaydedildi!')
    resetForm()
  } catch (error) {
    console.error('Veri kaydedilirken hata oluştu:', error)
    alert('Bir hata oluştu. Lütfen tekrar deneyin.')
  }
}

// Formu sıfırlama
const resetForm = () => {
  cryptoData.value = {
    Symbol: '',
    ProjectName: '',
    CoinMCap: 0,
    CryptoRank: 0,
    Unlocks: '',
    Categories: '',
    CurrentPrice: 0,
    CirculatingSupply: 0,
    MarketCap: 0,
    Note: '',
  }
}
</script>

<template>
  <VRow>
    <!-- 👉 Sol Panel: Crypto Form -->
    <VCol cols="12" md="12">
      <VCard class="mb-12">
        <VCardText>
          <h4>Yeni Crypto Verisi Ekle</h4>

          <!-- Form alanları -->
          <VTextField
            v-model="cryptoData.Symbol"
            label="Symbol"
            placeholder="BTC"
            class="mb-4"
          />
          <VTextField
            v-model="cryptoData.ProjectName"
            label="Proje İsmi"
            placeholder="Bitcoin"
            class="mb-4"
          />
          <VTextField
            v-model="cryptoData.CoinMCap"
            label="Coin Market Cap"
            type="number"
            placeholder="500000000"
            class="mb-4"
          />
          <VTextField
            v-model="cryptoData.CryptoRank"
            label="Crypto Rank"
            type="number"
            placeholder="1"
            class="mb-4"
          />
          <VTextField
            v-model="cryptoData.Unlocks"
            label="Unlocks"
            placeholder="None"
            class="mb-4"
          />
          <VTextField
            v-model="cryptoData.Categories"
            label="Kategoriler"
            placeholder="Currency, Store of Value"
            class="mb-4"
          />
          <VTextField
            v-model="cryptoData.CurrentPrice"
            label="Güncel Fiyat $"
            type="number"
            placeholder="30000"
            class="mb-4"
          />
          <VTextField
            v-model="cryptoData.CirculatingSupply"
            label="Bugün Ki Circulating Supply"
            type="number"
            placeholder="19000000"
            class="mb-4"
          />
          <VTextField
            v-model="cryptoData.MarketCap"
            label="Bugün Ki Market Cap"
            type="number"
            placeholder="570000000"
            class="mb-4"
          />
          <VTextarea
            v-model="cryptoData.Note"
            label="Notlar"
            placeholder="Ek açıklamalar"
            class="mb-4"
          />

          <!-- Kaydet Butonu -->
          <VBtn
            block
            color="primary"
            @click="saveCryptoData"
            prepend-icon="tabler-save"
          >
            Kaydet
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>

   
    
  </VRow>
</template>
