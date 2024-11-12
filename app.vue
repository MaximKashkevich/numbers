<template>
  <div>
    <!-- Hide Registration when Verification is rendered -->
    <Registration v-if="signUp.signUp && !verification.signIn" />
    <Verification v-if="verification.signIn" />
    <Registration />
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
<<<<<<< HEAD
import { onMounted } from 'vue';
import axios from 'axios';
=======
import axios from 'axios'
import { ref, onMounted } from "vue";
>>>>>>> 641d0a664fe4b7eb16b025b732824d52cfbf41c8

import Entrance from "./components/Entrance.vue";
import Registration from "./components/Registration/Registration.vue";
import Verification from "./components/Verification.vue";
import GeneralEmpty from "./pages/GeneralEmpty.vue";
import GeneralPrimaryPages from "./components/general/GeneralPrimaryPages.vue";
import GeneralViewAds from "./components/general/GeneralViewAds.vue";
import ModalColectionWindow from "./components/ModalColectionWindow.vue";
import ModalWindowChoose from "./components/ModalWindowChoose.vue";
import MyColections from "./pages/MyColections.vue";
import ModalAddColection from "./components/ModalAddColection.vue";
import ModalWindiwLicense from "./components/ModalWindow/ModalWindiwLicense.vue";
import ArchiveModaLWindow from "./components/ModalWindow/ArchiveModaLWindow.vue";
import ArchiveModaLWindow2 from "./components/ModalWindow/ArchiveModaLWindow2.vue";
import ArchivePlate from "./components/ArchiveButtons/ArchivePlate.vue";
import ArchiveSimilar from "./components/ArchiveButtons/ArchiveSimilar.vue";
import ArchiveSimilarBlock from "./components/ArchiveButtons/ArchiveSimilarBlock.vue";
import GeneralBlockTariff from "./pages/GeneralBlockTariff.vue";
import GeneralAddAdvertiseAuto from "./pages/GeneralAddAdvertiseAuto.vue";
import SignUp from "./pages/SignUp.vue";
<<<<<<< HEAD
import Login from "./pages/Login.vue";
=======
>>>>>>> 641d0a664fe4b7eb16b025b732824d52cfbf41c8

import { useSignUpStore } from '@/stores/signUp';
import { useSignInStore } from '@/stores/verification';

const signUp = useSignUpStore();
const verification = useSignInStore();

<<<<<<< HEAD
async function fetchPhoneData(id) {
    const url = `https://api.dev.numbers.ae/v1/catalog/phone/12345`; 

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Ошибка при получении данных: ' + response.statusText);
        }

        const data = await response.json(); 
        console.log(data); 
    } catch (error) {
        console.error('Ошибка:', error);
    }
}





</script>
=======
<<<<<<< HEAD
interface IPlate {
        id: number
        photo: string
        emirate: string
        price: number
        isFeatured: boolean
        type: string
}


const plateNumbers = ref<IPlate[]>([]);


// onMounted(() => {
//         fetchPlate();
// });
</script>
=======
</script>
>>>>>>> cda641cfa71d4bc20fbd607a2cce5190b7700562
>>>>>>> cf6dd380d2f5ea62a29b7df2e693b773e557ceb0
>>>>>>> 641d0a664fe4b7eb16b025b732824d52cfbf41c8
