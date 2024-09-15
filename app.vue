<template>
    <div>
        <!-- Hide Registration when Verification is rendered -->
        <!-- <Registration v-if="signUp.signUp && !verification.signIn" />

        <Verification v-if="verification.signIn" /> -->
        <!-- <NuxtPage /> -->
        <Entrance />
        <!-- <GeneralEmpty /> -->
        <!-- <GeneralPrimaryPages /> -->
    </div>
</template>

<script setup lang="ts">

import Entrance from "./components/Entrance.vue";
import Registration from "./components/Registration/Registration.vue";
import Verification from "./components/Verification.vue";
import GeneralEmpty from "./components/general/GeneralEmpty.vue";
import GeneralPrimaryPages from "./components/general/GeneralPrimaryPages.vue";
//import PlateNumbers from "./components/PlateNumbers.vue";
//import BuyNumbers2 from "./components/BuyNumbers2/BuyNumbers2.vue";
//import CatalogNumbers from "./components/CatalogNumbers/CatalogNumbers.vue";
//import License from "./components/Licence/License.vue";
//import Viewed from "./components/viewed/Viewed.vue";
//import Documentation from "./components/Documentation/Documentation.vue";
//import PlateNUmberCard from "./components/PlateNumberCard/PlateNUmberCard.vue";

import { useSignUpStore } from '@/stores/signUp';
import { useSignInStore } from '@/stores/verification';

const signUp = useSignUpStore();
const verification = useSignInStore();

</script>