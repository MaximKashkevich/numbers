<template>

   
       <div>
           <Registration v-if="signUp" :onClickSignUP="onClickSignUP" />
           <Header />
          
          <BuyNumbers/>
          
           <Footer />
       </div>
   </template>
   
  
   <script setup>
   // Доустановить ts
   import Header from './components/Header.vue';
   import Login from './components/Login.vue';
   import Footer from './components/Footer.vue';
   import Registration from './components/Registration/Registration.vue';
   import PlateNumbers from './components/PlateNumbers.vue';
   import BuyNumbers from './components/BuyNumbers/BuyNumbers.vue';
   import { ref } from 'vue'
   const signUp = ref(false)
   const onClickSignUP = () => {
       signUp.value = !signUp.value;
       console.log(signUp)
   }
   </script>