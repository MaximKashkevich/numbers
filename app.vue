<template>
        <div class="overflow-x-hidden">
                <!-- Hide Registration when Verification is rendered -->
                <Registration v-if="signUp.signUp && !verification.signIn" />

                <Verification v-if="verification.signIn" />
                <!-- <NuxtPage /> -->
                <!-- <Entrance /> -->
                <!-- <GeneralEmpty /> -->
                <!-- <GeneralPrimaryPages /> -->
                <!-- <GeneralPrimaryPages />
                <GeneralViewAds /> -->
                <!-- <Login /> -->
                <!-- <GeneralBlockTariff /> -->
                <!-- <GeneralAddAdvertiseAuto /> -->
        </div>
        <!-- 
        <Verification v-if="verification.signIn" /> -->
        <!-- <NuxtPage /> -->
        <Entrance />
        <!-- <GeneralEmpty /> -->

        <!-- <GeneralPrimaryPages /> -->

        <!-- <GeneralPrimaryPages />
        <GeneralViewAds /> -->

        <!-- <SignUp /> -->
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from "vue";

import Entrance from "./components/Entrance.vue";
import Registration from "./components/Registration/Registration.vue";
import Verification from "./components/Verification.vue";

import { useSignUpStore } from '@/stores/signUp';
import { useSignInStore } from '@/stores/verification';

const signUp = useSignUpStore();
const verification = useSignInStore();


const plateNumbers = ref<IPlate[]>([]);

interface IPlate {
        id: number;
        photo: string;
        emirate: string;
        price: number;
        isFeatured: boolean;
        type: string;
}

const fetchPlate = async () => {
        try {
                const { data } = await axios.get<IPlate[]>('https://api.dev.numbers.ae./v1/catalog/plate');
                plateNumbers.value = data;
                console.log(plateNumbers.value);
        } catch (e) {
                console.log(e)
        }
};

onMounted(() => {
        fetchPlate();
});


</script>