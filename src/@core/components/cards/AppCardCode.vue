<script setup>
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'vue-prism-component'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: Object,
    required: true,
  },
  codeLanguage: {
    type: String,
    required: false,
    default: 'markup',
  },
  noPadding: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const preferredCodeLanguage = useStorage('preferredCodeLanguage', 'ts')
const isCodeShown = ref(false)
const { copy, copied } = useClipboard({ source: computed(() => props.code[preferredCodeLanguage.value]) })
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>{{ props.title }}</VCardTitle>
     
    </VCardItem>
    <slot v-if="noPadding" />
    <VCardText v-else>
      <slot />
    </VCardText>
    
  </VCard>
</template>

<style lang="scss">
@use "@styles/variables/_vuetify.scss";

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  border-radius: vuetify.$card-border-radius;
}

.app-card-code-copy-icon {
  inset-block-start: 1.2em;
  inset-inline-end: 0.8em;
}
</style>
