<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>
    <div class="fixed inset-0 flex items-center justify-center z-50 py-[10px]">
        <div class="w-[600px] h-[522px] bg-white rounded-[20px] ">
            <div class="relative flex items-center justify-between  ">
                <h3 class=" ml-12 mt-6 text-[35px] leading-[42px] font-medium text-black">Phone number confirmation</h3>
                <NuxtLink>
                    <svg class="cursor-pointer" @click="verification.onClickSignIn" width="60" height="60"
                        viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M21.5657 20.2687C21.2074 19.9104 20.6265 19.9104 20.2682 20.2687C19.9099 20.627 19.9099 21.2079 20.2682 21.5662L28.7024 30.0005L20.2689 38.4341C19.9106 38.7924 19.9106 39.3733 20.2689 39.7316C20.6271 40.0899 21.2081 40.0899 21.5663 39.7316L29.9999 31.298L38.4332 39.7313C38.7915 40.0896 39.3724 40.0896 39.7307 39.7313C40.089 39.373 40.089 38.7921 39.7307 38.4338L31.2974 30.0005L39.7313 21.5666C40.0896 21.2083 40.0896 20.6274 39.7313 20.2691C39.373 19.9108 38.7921 19.9108 38.4338 20.2691L29.9999 28.703L21.5657 20.2687Z"
                            fill="#BFBFBF" />
                    </svg>

                </NuxtLink>
            </div>

            <p class="ml-12 leading-[19.2px] mt-6"><strong>We sent a validation code to the number you provided during
                    <br />registration:</strong>
            </p>

            <div class="ml-12 mt-10">
                <span class="leading-[19.2px] text-black font-bold"><strong>050 123 45 67</strong></span>
                <NuxtLink class="text-blue-500 ml-10">
                    Change the number
                </NuxtLink>
            </div>
            <div class="ml-12 mt-10">
                <p class="text-gray-300">Validation code:</p>
                <div>
                    <input type="tel" class="my-input" maxlength="1" placeholder="_" />
                    <input type="tel" class="my-input" maxlength="1" placeholder="_" />
                    <input type="tel" class="my-input" maxlength="1" placeholder="_" />
                    <input type="tel" class="my-input" maxlength="1" placeholder="_" />
                </div>
                <div class="mt-6">
                    <p class="leading-[19.2px] text-gray-300">
                        Didn't you get the validation code? <br /><span class="text-blue-500">Send it again</span> via
                        57 seconds
                    </p>
                </div>

                <ButtonBlue class="w-[300px] py-[14px] mt-12">
                    Sign in
                </ButtonBlue>

            </div>

        </div>
    </div>

</template>

<style scoped>
.my-input {
    border: 1px;
    width: 67.5px;
    height: 50px;
    outline: solid #BFBFBF;
    border-radius: 10px;
    margin-top: 7px;
    margin-right: 10px;
    text-align: center
}

.my-input::placeholder {
    text-align: center;
    color: black;
    margin: 0 auto;
}

.my-input:focus {
    outline: solid black;
    transition: 0.5s
}
</style>

<script setup>

import ButtonBlue from './Button-blue/ButtonBlue.vue'

import { useSignUpStore } from '@/stores/signUp'
import { useSignInStore } from '@/stores/verification'

const signUp = useSignUpStore()
const verification = useSignInStore()

</script>