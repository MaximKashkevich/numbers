<template>





 <PlateNumbers/>

</template>


<script>
import Header from "./components/Header";
import Login from "./components/Login.vue";
import Footer from "./components/Footer.vue";
import PlateNumbers from "./components/PlateNumbers.vue";
import Registration from "./components/Registration/Registration.vue";

import { ref } from 'vue'

const signUp = ref(false)

const onClickSignUP = () => {
    signUp.value = !signUp.value;
    console.log(signUp)
}
</script>