<template>
    <div>
        <!-- <Verification /> -->
        <Registration v-if="counter.signUp" :signUp="counter.signUp" />

        <!-- Сделать компонент Entrance для регистрации -->
        <Header />
        <Login />
        <Footer />

        <!-- <PlateNumbers /> -->
    </div>
</template>

<script lang="ts" setup>
// Доустановить ts 
import Header from './components/Header.vue';
import Login from './components/Login.vue';
import Footer from './components/Footer.vue';
import Registration from './components/Registration/Registration.vue';
import Verification from './components/Verification.vue';
import PlateNumbers from './components/PlateNumbers.vue';

import { useSignUpStore } from '@/stores/signUp';

const counter = useSignUpStore();
</script>