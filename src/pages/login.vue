<script setup>
import { VForm } from 'vuetify/components/VForm'
import axios from '@axios'
import { useAppAbility } from '@/plugins/casl/useAppAbility'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import authV2LoginIllustrationBorderedDark from '@images/pages/auth-v2-login-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight from '@images/pages/auth-v2-login-illustration-bordered-light.png'
import authV2LoginIllustrationDark from '@images/pages/auth-v2-login-illustration-dark.png'
import authV2LoginIllustrationLight from '@images/pages/auth-v2-login-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'  
import { auth, db,signInWithEmailAndPassword,onAuthStateChanged ,doc,getDocs,collection,query,where} from '../firebase/firebase'

import { useRouter } from 'vue-router';
 
import {
  emailValidator,
  requiredValidator,
  integerValidator,
} from '@validators'

const authThemeImg = useGenerateImageVariant(authV2LoginIllustrationLight, authV2LoginIllustrationDark, authV2LoginIllustrationBorderedLight, authV2LoginIllustrationBorderedDark, true)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)
const isPasswordVisible = ref(false)
const router = useRouter() 
const userAbilities = [
  { action: 'manage', subject: 'all' }, 
];
const ability = useAppAbility()

const errors = ref({
  email: undefined,
  password: undefined,
  referanceNo:undefined,
})

const refVForm = ref()
const email = ref('admin@kripton.com')
const password = ref('123456*') 
const rememberMe = ref(false)
 
const isFlatSnackbarVisible = ref(false)
// const  login = async () => {
 
//         try {
          
//         const hotelDocRef = doc(db, 'Hotels', "10002");
//         const hotelSnapshot = await getDoc(hotelDocRef);
//         if (hotelSnapshot.exists()) {
            
//             const usersCollectionRef = collection(hotelDocRef, 'Users');
//             const q = query(usersCollectionRef, where('Email', '==', email.value));  
//             const userQuerySnapshot = await getDocs(q); 
//             if (!userQuerySnapshot.empty) {
//                 const userDoc = userQuerySnapshot.docs[0];
//                 const userData = userDoc.data(); 
//                 const userAbilities = userData.abilities || {}; 
//                 signInWithEmailAndPassword(auth, email.value, password.value)
//                   .then((userCredential) => {
//                     console.log("Giriş başarılı:", userCredential.user); 
                   
                    
                 
//         let logControl={email:userData.email,token:userData.accessToken,userUid:userData.uid};
      
      
//         const jsonUserData=JSON.stringify(logControl);
//         localStorage.setItem("userData",jsonUserData); 
//         localStorage.setItem("accessToken",userCredential.user.accessToken); 
//         const userAbilities = [{ action: "manage", subject: "all" }];
   

 
// const existingUserData = JSON.parse(localStorage.getItem('userData')) || {};

 
// existingUserData.role = 'admin';


// localStorage.setItem('userData', JSON.stringify(existingUserData));
//                     localStorage.setItem('userAbilities', JSON.stringify(userAbilities));  
                    
//                    // router.replace('/');
//                   //router.replace('/dashboards/crm');
                  
//                   router.replace(  '/');
//                   })
//                   .catch((error) => {
                  
//                     //isFlatSnackbarVisible.value = true;
                  
//                       console.error("Giriş hatası:", error); 
//                   }); 
//                 return userData;
           
//             } else {
//                 console.log("Eşleşen kullanıcı bulunamadı.");
//                 return null;
//             }
//         } else {
//             console.log("Belirtilen otel bulunamadı.");
//             return null;
//         }
//     } catch (error) {
//         console.error("Hata oluştu:", error);
//         return null;
//     }
  
  
 

const handleLogin = async () => {
  
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const resultMail = query(collection(db, "Users"),where("email", "==", email.value));
    const userData = await getDocs(resultMail);
 
    userData.forEach((doc) => {
        Object.assign(userData, doc.data())
      })
      const allowedFields = ['id', 'role', 'fullName', 'username', 'email']
      let userInfo = {}
      userData.forEach((doc) => {
        const data = doc.data()
        allowedFields.forEach((field) => {
          if (data[field] !== undefined) {
            userInfo[field] = data[field]
          }
        })
      })

      console.log(userData)
      const token = await userCredential.user.getIdToken()
      console.log(token)
      localStorage.setItem('accessToken', token)
      localStorage.setItem('userData', JSON.stringify(userInfo))
      localStorage.setItem('userAbilities', JSON.stringify(userAbilities));
      router.replace('/');

};
const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      login()
  })
}
</script>

<template>
  <VRow
    no-gutters
    class="auth-wrapper bg-surface"
  >
    <VCol
      lg="8"
      class="d-none d-lg-flex"
    >
      <div class="position-relative bg-background rounded-lg w-100 ma-8 me-0">
        <div class="d-flex align-center justify-center w-100 h-100">
          <VImg
            max-width="505"
            :src="authThemeImg"
            class="auth-illustration mt-16 mb-2"
          />
        </div>

        <VImg
          :src="authThemeMask"
          class="auth-footer-mask"
        />
      </div>
    </VCol>

    <VCol
      cols="12"
      lg="4"
      class="auth-card-v2 d-flex align-center justify-center"
    >
      <VCard
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-4"
      >
        <VCardText>
          <VNodeRenderer
            :nodes="themeConfig.app.logo"
            class="mb-6"
          />

          <h5 class="text-h5 mb-1">
             <span class="text-capitalize"> OtelMate </span>Giriş Paneli 👋🏻
          </h5>
         
        </VCardText>
         
        <VCardText>
          <VForm
            ref="refVForm"
            @submit.prevent="handleLogin"
          >
            <VRow>
              <!-- id -->
              <VCol cols="12">
              
                  <!-- email -->
                <AppTextField
                  v-model="email"
                  label="Email"
                  type="email"
                  autofocus
                  :rules="[requiredValidator, emailValidator]"
                  :error-messages="errors.email"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="password"
                  label="Password"
                  :rules="[requiredValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :error-messages="errors.password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <div class="d-flex align-center flex-wrap justify-space-between mt-2 mb-4">
                  <VCheckbox
                    v-model="rememberMe"
                    label="Remember me"
                  />
                  <RouterLink
                    class="text-primary ms-2 mb-1"
                    :to="{ name: 'forgot-password' }"
                  >
                    Forgot Password?
                  </RouterLink>
                </div>

                <VBtn
                  block
                  type="submit"
                >
                  Login
                </VBtn>
              </VCol>
           
              <!-- create account -->
              <VCol
                cols="12"
                class="text-center"
              >
                <span>New on our platform?</span>
                <RouterLink
                  class="text-primary ms-2"
                  :to="{ name: 'register' }"
                >
                  Create an account
                </RouterLink>
              </VCol>
              <VCol
                cols="12"
                class="d-flex align-center"
              >
              
              </VCol>

              <!-- auth providers -->
              <VCol
                cols="12"
                class="text-center"
              >
             
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="top end"
      variant="flat"
      color="error"
    >
      Kullanıcı bilgileriniz hatalı lütfen kontrol ediniz.!
    </VSnackbar>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
