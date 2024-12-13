<script setup>
import navItems from '@/navigation/vertical'
import { useThemeConfig } from '@core/composable/useThemeConfig'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavBarI18n from '@/layouts/components/NavBarI18n.vue'
import NavBarNotifications from '@/layouts/components/NavBarNotifications.vue'
import NavbarShortcuts from '@/layouts/components/NavbarShortcuts.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import NavSearchBar from '@/layouts/components/NavSearchBar.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

// @layouts plugin
import { VerticalNavLayout } from '@layouts'
const selectedOption1 = ref('Merkez')
const { appRouteTransition, isLessThanOverlayNavBreakpoint } = useThemeConfig()
const { width: windowWidth } = useWindowSize()
const states = [
  'Merkez',
  'Şube-1',
  'Şube-2',
  'Şube-3',
   
]
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return
  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
</script>

<template>
  <VerticalNavLayout :nav-items="navItems">
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <IconBtn
          v-if="isLessThanOverlayNavBreakpoint(windowWidth)"
          id="vertical-nav-toggle-btn"
          class="ms-n3"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon
            size="26"
            icon="tabler-menu-2"
          />
        </IconBtn>

        <NavSearchBar class="ms-lg-n3" />

        <VSpacer />
        
        <VCol cols="2">
      <!-- <AppSelect
        v-model="selectedOption1"
        :items="states"  
        single-line
        variant="filled"
      /> -->
     
      
    </VCol>
    <!-- <VBtn
      size="38"
      color="primary"
    >
      <VIcon
        icon="tabler-direction-sign"
        size="20"
        :disabled="isDialogVisible"
        @click="isDialogVisible = true"
      />
    </VBtn> -->
    <!-- <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
    append-icon="tabler-direction-sign" 
    
    width="15"
  >
    Geç
  </VBtn> -->

    <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
    color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Yükleniyor lütfen bekleyiniz...
        <VProgressLinear
          indeterminate
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
        <NavBarI18n class="me-1" />
        <NavbarThemeSwitcher class="me-1" />
        <NavbarShortcuts class="me-1" />
        <NavBarNotifications class="me-2" />
        <UserProfile />
      </div>
    </template>

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component }">
      <Transition
        :name="appRouteTransition"
        mode="out-in"
      >
        <Component :is="Component" />
      </Transition>
    </RouterView>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>

    <!-- 👉 Customizer -->
    <TheCustomizer />
  </VerticalNavLayout>
</template>
