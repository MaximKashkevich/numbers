<template>
    <!-- Мутный фон -->
    <div class="h-[1400px] w-full absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm snap-none">
    </div>

    <div class="fixed top-0 left-0 w-full overflow-hidden flex items-center justify-center z-20">
        <div class="mt-1 w-[750px] h-[600px] bg-white shadow-lg p-6 rounded-[20px] overflow-scroll">
            <div class="relative mb-8">
                <h1 class="text-[35px] font-medium leading-[42px]">Sign in</h1>
                <NuxtLink class="absolute top-0 right-0" to="/">
                    <svg @click="onClickSignUP" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1.56622 0.267867C1.20792 -0.0904283 0.627013 -0.0904284 0.26872 0.267867C-0.0895737 0.626162 -0.0895731 1.20707 0.26872 1.56537L8.70293 9.99962L0.269341 18.4333C-0.0889529 18.7915 -0.088953 19.3725 0.269341 19.7308C0.627634 20.0891 1.20854 20.0891 1.56684 19.7308L10.0004 11.2971L18.4337 19.7304C18.792 20.0887 19.3729 20.0887 19.7312 19.7304C20.0894 19.3721 20.0894 18.7912 19.7312 18.4329L11.2979 9.99962L19.7318 1.56572C20.0901 1.20743 20.0901 0.626516 19.7318 0.26822C19.3735 -0.090075 18.7926 -0.0900745 18.4343 0.268221L10.0004 8.70212L1.56622 0.267867Z"
                            fill="#878787" />
                    </svg>
                </NuxtLink>
            </div>

            <div v-for="(field, index) in inputTitle" :key="index">
                <TextInput :title="field.title" :type="field.type" :placeholder="field.placeholder" />
            </div>
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <input id="remember-me" type="checkbox" v-model="checked"
                        class="custom-checkbox h-4 w-4 border border-gray-300 rounded focus:ring-0" />
                    <label class="ml-2 block text-sm text-[#B3B3B3]">
                        <span>I have read and agree</span>
                        <span><br />with terms and conditions</span>
                    </label>
                </div>
                <button
                    class="border-2 font-medium w-[300px] py-[14px] border-blue-500 rounded-[100px] text-[20px] font-bold text-blue-500 hover:bg-blue-500 hover:text-white transition">
                    Sign In
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import TextInput from './Input.vue';


import { ref, defineProps, } from 'vue';

// массив input полей
const inputTitle = ref([
    { title: 'Your Email:', type: 'email', value: '', placeholder: 'username@gmail.com' },
    { title: 'Choose login:', type: 'password', value: '', placeholder: 'JohnSnow_123' },
    { title: 'Full name:', type: 'text', value: '', placeholder: 'John Snow' },
    { title: 'Mobile number:', type: 'tel', value: '', placeholder: '050 123 45 67' },
    { title: 'Password:', type: 'password', value: '', placeholder: 'xxxxxxx' },
    { title: 'Password again:', type: 'password', value: '', placeholder: 'xxxxxxx' },
]);

defineProps({
    onClickSignUP: {
        type: Function,
        required: true,
    }
})

</script>

<style scoped></style>