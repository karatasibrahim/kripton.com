<script setup>
//import * as demoCode from '@/views/demos/forms/tables/data-table/demoCodeDataTable'
import * as demoCode from '@/views/demos/forms/tables/data-table/demoCodeDataTable'
</script>
<template>
  <VRow>
    
    <VCol >
      <AppCardCode
        title="Departman Bilgileri"
        :code="demoCode.rowEditingViaDialog"
      >
        <DepartmentTable />
      </AppCardCode>
    </VCol>
     </VRow>
</template>
