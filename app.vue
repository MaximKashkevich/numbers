<template>
        <div>
                <!-- Hide Registration when Verification is rendered -->
                <!-- <Registration v-if="signUp.signUp && !verification.signIn" /> -->

                <!-- <Verification v-if="verification.signIn" /> -->
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

import Entrance from "./components/Entrance.vue";
import Registration from "./components/Registration/Registration.vue";
import Verification from "./components/Verification.vue";
import GeneralEmpty from "./pages/GeneralEmpty.vue";
import GeneralPrimaryPages from "./components/general/GeneralPrimaryPages.vue";
import GeneralViewAds from "./components/general/GeneralViewAds.vue";
<<<<<<< HEAD
import GeneralBlockTariff from "./pages/GeneralBlockTariff.vue";
import GeneralAddAdvertiseAuto from "./pages/GeneralAddAdvertiseAuto.vue";
import SignUp from "./pages/SignUp.vue";
=======
import GeneralBlockTariff from "./components/general/GeneralBlockTariff.vue";
import GeneralAddAdvertiseAuto from "./components/general/GeneralAddAdvertiseAuto.vue";
import ModalColectionWindow from "./components/ModalColectionWindow.vue";
import ModalWindowChoose from "./components/ModalWindowChoose.vue";
import MyColections from "./pages/MyColections.vue";
import ModalAddColection from "./components/ModalAddColection.vue";
<<<<<<< HEAD
import ModalWindiwLicense from "./components/ModalWindow/ModalWindiwLicense.vue";
import ArchiveModaLWindow from "./components/ModalWindow/ArchiveModaLWindow.vue";
import ArchiveModaLWindow2 from "./components/ModalWindow/ArchiveModaLWindow2.vue";
import ArchivePlate from "./components/ArchiveButtons/ArchivePlate.vue";
import ArchiveSimilar from "./components/ArchiveButtons/ArchiveSimilar.vue";
import ArchiveSimilarBlock from "./components/ArchiveButtons/ArchiveSimilarBlock.vue";
=======
>>>>>>> 1f60de504f5891cb772a3e906b71f27745970399
>>>>>>> 376b5c0c58cb063526267410b094977dc582903b
//import PlateNumbers from "./components/PlateNumbers.vue";
//import BuyNumbers2 from "./components/BuyNumbers2/BuyNumbers2.vue";
//import CatalogNumbers from "./components/CatalogNumbers/CatalogNumbers.vue";
//import License from "./components/Licence/License.vue";
//import Viewed from "./components/viewed/Viewed.vue";
//import Documentation from "./components/Documentation/Documentation.vue";
//import PlateNUmberCard from "./components/PlateNumberCard/PlateNUmberCard.vue";


import { useSignUpStore } from '@/stores/signUp';
import { useSignInStore } from '@/stores/verification';
import Login from "./pages/Login.vue";

const signUp = useSignUpStore();
const verification = useSignInStore();

</script>