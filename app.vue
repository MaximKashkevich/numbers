<template>
    <div>
        <!-- Hide Registration when Verification is rendered -->
        <Registration v-if="signUp.signUp && !verification.signIn" />

        <Verification v-if="verification.signIn" />

        <Header />
        <Login />
        <Footer />
        <PlateNumbers />
    </div>
</template>

<script setup lang="ts">
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./components/Login.vue";
import Registration from "./components/Registration/Registration.vue";
import Verification from "./components/Verification.vue";
import PlateNumbers from "./components/PlateNumbers.vue";


import { useSignUpStore } from '@/stores/signUp';
import { useSignInStore } from '@/stores/verification';

const signUp = useSignUpStore();
const verification = useSignInStore();

</script>
