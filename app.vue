<template>
    <div>
        <!-- <Verification /> -->
        <Registration v-if="counter.signUp" />
        <!-- Сделать компонент Entrance для регистрации -->
        <Header />
        <BuyNumbers/>
        <Footer />

        <!-- <PlateNumbers /> -->
    </div>
</template>

<script setup lang="ts">
// Доустановить ts 
import Header from './components/Header.vue';
import Login from './components/login.vue';
import Footer from './components/Footer.vue';
import Registration from './components/Registration/Registration.vue';
import Verification from './components/Verification.vue';
import PlateNumbers from './components/PlateNumbers.vue';
import BuyNumbers from './components/BuyNumbers/BuyNumbers.vue'

import { useSignUpStore } from '@/stores/signUp';

const counter = useSignUpStore();

</script>