<template>
        <div>
          <!-- Hide Registration when Verification is rendered -->
          <Registration v-if="signUp.signUp && !verification.signIn" />
          <Verification v-if="verification.signIn" />
          <Entrance />
          <!-- Здесь можно добавить другие компоненты -->
          <!-- <GeneralEmpty /> -->
          <!-- <GeneralPrimaryPages /> -->
          <!-- <GeneralViewAds /> -->
          <!-- <Login /> -->
          <!-- <GeneralBlockTariff /> -->
          <!-- <GeneralAddAdvertiseAuto /> -->
        </div>
      </template>
      
      <script setup lang="ts">
      import { onMounted } from 'vue';
      import axios from 'axios';
      
      import Entrance from "./components/Entrance.vue";
      import Registration from "./components/Registration/Registration.vue";
      import Verification from "./components/Verification.vue";
      
      // Другие импорты...
      import { useSignUpStore } from '@/stores/signUp';
      import { useSignInStore } from '@/stores/verification';
      
      // Определение пропсов
   
      
      const signUp = useSignUpStore();
      const verification = useSignInStore();
      
    
      const fetchSneakers = async () => {
        try {
          const id = '123'
          const { data } = await axios.get(`https://api.dev.numbers.ae/v1/catalog/phone/123`);
          
          console.log(data);
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };

      onMounted(() => {
        fetchSneakers();
      });
      </script>
      