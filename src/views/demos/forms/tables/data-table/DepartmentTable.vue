<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable' 
import data from '@/views/demos/forms/tables/data-table/datatable'

const editDialog = ref(false)
const saveDialog=ref(false)
const deleteDialog = ref(false)

const search = ref('')

const defaultItem = ref({
  responsive_id: '', 
  full_name: '', 
  email: '',
   
})

const editedItem = ref(defaultItem.value)
const editedIndex = ref(-1)
const userList = ref([])

 

// headers
const headers = [
  {
    title: 'DEPARTMAN ADI',
    key: 'full_name',
  },
  {
    title: 'AKTİF/PASİF',
    key: 'email', 
  },
   
  {
    title: 'İŞLEMLER', 
    key: 'actions',
  },
]

 
const editItem = item => {
  console.log("Edit item clicked:", item);
  editedIndex.value = userList.value.indexOf(item);
  editedItem.value = { ...item };
  editDialog.value = true;
};

const deleteItem = item => {
  editedIndex.value = userList.value.indexOf(item)
  editedItem.value = { ...item }
  deleteDialog.value = true
}

const close = () => {
  editDialog.value = false
  saveDialog.value=false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}
const options = ref({
  page: 1,
  itemsPerPage: 10,
  sortBy: [],
  groupBy: [],
  search: undefined,
})
const closeDelete = () => {
  deleteDialog.value = false
  editedIndex.value = -1
  editedItem.value = { ...defaultItem.value }
}

const moreListDialog = ref(false)
const currentParamId = ref(null)
const openEditDialog = paramId => { 
    editDialog.value = true; 
    console.log("Edit action selected for item with ID:", paramId);
};

const handleMoreButtonClick = (item) => {
  // `MoreBtn` bileşeninden gelen olayı işleyin
  console.log("More button clicked for item:", item);
  // Menü öğesine göre işlem yapın
  switch (item.value) {
    case 'edit':
      editItem(item.raw);
      break;
    case 'download':
      // İndirme işlemini gerçekleştirin
      break;
    case 'duplicate':
      // Kopyalama işlemini gerçekleştirin
      break;
    default:
      break;
  }
}
 
const save = () => {
  if (editedIndex.value > -1)
    Object.assign(userList.value[editedIndex.value], editedItem.value)
  else
    userList.value.push(editedItem.value) 
  close()
}

const deleteItemConfirm = () => {
  userList.value.splice(editedIndex.value, 1)
  closeDelete()
}




onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data))
})
</script>

<template>
    <!-- 👉 Datatable  -->
    <VCardText class="d-flex align-center flex-wrap gap-4">
        <div class="me-3 d-flex gap-3">

            <!-- 👉 Create Department -->
            <VBtn prepend-icon="tabler-plus" @click="saveDialog = true">
                Yeni Ekle
            </VBtn>
        </div>

        <VSpacer />
        <VCol
          cols="4"
          offset-md="2"
          md="2"
        >
          <AppTextField
            v-model="search"
            density="compact"
            placeholder="Search"
            append-inner-icon="tabler-search"
            single-line
            hide-details
            dense
            outlined
          />
        </VCol>
        <div class="d-flex align-center flex-wrap gap-2">
            

            <!-- 👉 Select status -->
            <VBtn size="38" color="success">
                <VIcon icon="tabler-file-spreadsheet" size="22" />
            </VBtn>
            <VBtn size="38" color="error">
                <VIcon icon="tabler-file-type-pdf" size="22" />
            </VBtn>
            <VBtn size="38" color="secondary">
                <VIcon icon="tabler-printer" size="22" />
            </VBtn>
        </div>
    </VCardText>

    <VDivider />
    <VDataTable 
    :headers="headers" 
    :items="userList" 
    :items-per-page="5" 
    show-select  
    :search="search">
       

   <!-- FORM VALIDATION EKLENECEK TOAST EKLENECEK -->
 
        <!-- Actions -->
        <template #item.actions="{ item }">
            <div class="d-flex gap-1">
        <IconBtn @click="editItem(item.raw)">
          <VIcon icon="mdi-pencil-outline" color="primary"/>
        </IconBtn>
        <IconBtn @click="deleteItem(item.raw)">
          <VIcon icon="mdi-delete-outline" color="error"/>
        </IconBtn>
       
       
      </div>
            
    </template>
    
        
    </VDataTable>



<!-- 👉Save Dialog-->
<VDialog v-model="saveDialog" max-width="600px">
        <VCard>
            <VCardTitle>
                <span class="headline">Yeni Departman Adı</span>
            </VCardTitle>

            <VCardText>
              
                <VContainer>
                    <VRow>
                        <!-- full_name -->
                        <VCol cols="12" sm="6" md="4">
                            <VTextField   label="User name" />
                        </VCol>

                        <!-- email -->
                        <VCol cols="12" sm="6" md="4">
                            <VTextField   label="Email" />
                        </VCol>

                        <!-- salary -->
                        <VCol cols="12" sm="6" md="4">
                            <VTextField   label="Salary" prefix="$" type="number" />
                        </VCol>

                        <!-- age -->
                        <VCol cols="12" sm="6" md="4">
                            <VTextField  label="Age" type="number" />
                        </VCol>

                        <!-- start date -->
                        <VCol cols="12" sm="6" md="4">
                            <VTextField   label="Date" />
                        </VCol>

                        <!-- status -->
                        <VCol cols="12" sm="6" md="4">
                            <VSelect   :items="selectedOptions" item-title="text"
                                item-value="value" label="Standard" variant="underlined" readonly />
                        </VCol>
                    </VRow>
                </VContainer>
            </VCardText>

            <VCardActions>
                <VSpacer />

                <VBtn color="error" variant="outlined" @click="close">
                    İptal
                </VBtn>

                <VBtn color="success" variant="elevated" @click="save">
                    Kaydet
                </VBtn>
            </VCardActions>
        </VCard>
    </VDialog>
<!-- -->
    <!-- 👉 Edit Dialog  -->
    <VDialog v-model="editDialog" max-width="600px">
        <VCard>
            <VCardTitle>
                <span class="headline">Edit Item</span>
            </VCardTitle>

            <VCardText>
                {{ editedItem?.full_name }}
                <VContainer>
                    <VRow>
                        <!-- full_name -->
                        <VCol cols="12" sm="6" md="4">
                            <VTextField v-model="editedItem.full_name" label="User name" />
                        </VCol>

                        <!-- email -->
                        <VCol cols="12" sm="6" md="4">
                            <VTextField v-model="editedItem.email" label="Email" />
                        </VCol>

                        <!-- salary -->
                        <VCol cols="12" sm="6" md="4">
                            <VTextField v-model="editedItem.salary" label="Salary" prefix="$" type="number" />
                        </VCol>

                        <!-- age -->
                        <VCol cols="12" sm="6" md="4">
                            <VTextField v-model="editedItem.age" label="Age" type="number" />
                        </VCol>

                        <!-- start date -->
                        <VCol cols="12" sm="6" md="4">
                            <VTextField v-model="editedItem.start_date" label="Date" />
                        </VCol>

                        <!-- status -->
                        <VCol cols="12" sm="6" md="4">
                            <VSelect v-model="editedItem.status" :items="selectedOptions" item-title="text"
                                item-value="value" label="Standard" variant="underlined" readonly />
                        </VCol>
                    </VRow>
                </VContainer>
            </VCardText>

            <VCardActions>
                <VSpacer />

                <VBtn color="error" variant="outlined" @click="close">
                    İptal
                </VBtn>

                <VBtn color="success" variant="elevated" @click="save">
                    Kaydet
                </VBtn>
            </VCardActions>
        </VCard>
    </VDialog>

    <!-- 👉 Delete Dialog  -->
    <VDialog v-model="deleteDialog" max-width="500px" class="error">
        <VCard>
            <VCardTitle>
                Bu öge kalıcı olarak silinecektir. Silmek istediğinizden emin misiniz?
            </VCardTitle>

            <VCardActions>
                <VSpacer />

                <VBtn color="error" variant="outlined" @click="closeDelete">
                    İptal
                </VBtn>

                <VBtn color="success" variant="elevated" @click="deleteItemConfirm">
                    Evet
                </VBtn>

                <VSpacer />
            </VCardActions>
        </VCard>
    </VDialog>
    
</template>

<style scoped>
    
  .v-data-table th:last-child {
    text-align: center;
  } 
  .v-data-table td:nth-child(3) .v-btn__content {
    text-align: center;
  } 
  
</style>
<style>
  .v-data-table th:last-child {
    width: 10px;  
    text-align: right;
  }
</style>