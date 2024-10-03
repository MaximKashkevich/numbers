<template>
    <!-- Мутный фон -->
    <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10" aria-hidden="true"></div>

    <!-- Контейнер карточки -->
    <div class="fixed inset-0 flex  items-center justify-center z-20 py-[10px]" role="dialog"
        aria-labelledby="dialog-title">
        <div
            class="w-full max-w-[750px] h-full bg-white shadow-lg p-6 rounded-[20px] flex flex-col overflow-y-auto mx-4">

            <!-- Заголовок и кнопка закрытия -->
            <div class="relative mb-8">
                <h1 id="dialog-title" class="genText text-[28px] md:none md:text-[35px] font-medium leading-[42px]">Sign
                    in</h1>
                <NuxtLink class="absolute md:flex-row close top-0 right-0" to="/" aria-label="Close">
                    <svg @click="signUp.onClickSignUP" class="cursor-pointer" width="20" height="20" viewBox="0 0 20 20"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1.56622 0.267867C1.20792 -0.0904283 0.627013 -0.0904284 0.26872 0.267867C-0.0895737 0.626162 -0.0895731 1.20707 0.26872 1.56537L8.70293 9.99962L0.269341 18.4333C-0.0889529 18.7915 -0.088953 19.3725 0.269341 19.7308C0.627634 20.0891 1.20854 20.0891 1.56684 19.7308L10.0004 11.2971L18.4337 19.7304C18.792 20.0887 19.3729 20.0887 19.7312 19.7304C20.0894 19.3721 20.0894 18.7912 19.7312 18.4329L11.2979 9.99962L19.7318 1.56572C20.0901 1.20743 20.0901 0.626516 19.7318 0.26822C19.3735 -0.090075 18.7926 -0.0900745 18.4343 0.268221L10.0004 8.70212L1.56622 0.267867Z"
                            fill="#878787" />
                    </svg>
                </NuxtLink>
            </div>

            <!-- Поля ввода -->
            <form @submit.prevent="onSubmit" class="flex flex-col gap-4 mb-6">
                <fieldset>
                    <legend class="sr-only">Sign In Form</legend>

                    <!-- Список полей ввода -->
                    <ul class="flex-col gap-4">
                        <li v-for="(field, index) in inputTitle" :key="index" class="flex flex-col">
                            <label :for="'field' + index" class="text-sm font-medium text-gray-700">{{ field.title
                                }}</label>
                            <TextInput :id="'field' + index" :type="field.type" :placeholder="field.placeholder"
                                v-model="field.value" class="w-full" />
                            <p v-if="errors[index]" class="text-red-500 text-sm">{{ errors[index] }}</p>
                        </li>
                    </ul>

                    <div class="flex items-center justify-between mt-[45px] flex-col btnInput md:flex-row">
                        <div class="flex items-center mb-4 md:mb-0">
                            <input id="remember-me" type="checkbox"
                                class="custom-checkbox h-4 w-4 border border-gray-300 rounded focus:ring-0" />
                            <label for="remember-me" class="ml-2 block text-sm text-[#B3B3B3]">
                                <span>I have read and agree</span>
                                <span><br />with terms and conditions</span>
                            </label>
                        </div>
                        <ButtonBlue @click="onSubmit" class="flex-wrap btn w-full md:w-[200px] py-[14px] md:ml-auto">
                            Sign In
                        </ButtonBlue>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>

</template>


<script setup lang="ts">
import TextInput from './Input.vue';
import ButtonBlue from '../Button-blue/ButtonBlue.vue';
import { ref } from 'vue';
import { useSignUpStore } from '@/stores/signUp';
import { useSignInStore } from '@/stores/verification'

const signUp = useSignUpStore();
const verification = useSignInStore();
const errors = ref<string[]>([])

interface Input {
    title: string;
    type: string;
    value: string;
    placeholder: string;
}

// Массив input полей
const inputTitle = ref<Input[]>([
    { title: 'Your Email:', type: 'email', value: '', placeholder: 'username@gmail.com' },
    { title: 'Choose login:', type: 'text', value: '', placeholder: 'JohnSnow_123' },
    { title: 'Full name:', type: 'text', value: '', placeholder: 'John Snow' },
    { title: 'Mobile number:', type: 'tel', value: '', placeholder: '050 123 45 67' },
    { title: 'Password:', type: 'password', value: '', placeholder: 'xxxxxxx' },
    { title: 'Password again:', type: 'password', value: '', placeholder: 'xxxxxxx' },
]);

const validate = () => {
    errors.value = []; // Сброс ошибок

    const validateEmail = (email) => {
        const emailPattern = /^\\S+@\\S+\\.\\S+$/; // Паттерн для проверки email
        return emailPattern.test(email);
    };

    const validatePhoneNumber = (phone) => {
        const phonePattern = /^\\d{3}\\s\\d{3}\\s\\d{2}\\s\\d{2}$/; // Паттерн для проверки номера телефона
        return phonePattern.test(phone);
    };

    inputTitle.value.forEach((field, index) => {
        if (!field.value) {
            errors.value[index] = `${field.title} is required.`; // Поле обязательно для заполнения
        } else {
            switch (field.type) {
                case 'email':
                    if (!validateEmail(field.value)) {
                        errors.value[index] = 'Invalid email address.'; // Неверный формат email
                    }
                    break;
                case 'tel':
                    if (!validatePhoneNumber(field.value)) {
                        errors.value[index] = 'Invalid mobile number format.'; // Неверный формат номера телефона
                    }
                    break;
                case 'password':
                    if (field.value.length < 6) {
                        errors.value[index] = 'Password must be at least 6 characters long.'; // Минимальная длина пароля
                    }
                    break;
                case 'password again':
                    const passwordField = inputTitle.value.find(f => f.type === 'password');
                    if (passwordField && field.value !== passwordField.value) {
                        errors.value[index] = 'Passwords do not match.'; // Пароли не совпадают
                    }
                    break;
                default:
                    errors.value[index] = ''; // Нет ошибок
            }
        }
    });

    // Проверка логина на соответствие с мобильным номером (дополнительная логика)
    const loginField = inputTitle.value.find(f => f.type === 'text');
    const mobileField = inputTitle.value.find(f => f.type === 'tel');

    if (loginField && mobileField && mobileField.value.startsWith(loginField.value.slice(0, 3))) {
        errors.value[inputTitle.value.indexOf(loginField)] = 'Login should not start with the same digits as mobile number.'; // Логин не должен начинаться с тех же цифр
    }
}
// Метод для обработки отправки формы
const onSubmit = () => {
    validate();
    // Если ошибок нет, можно продолжить процесс входа
    if (errors.value.length === 0) {
        // Выполнить вход
        console.log('Form is valid, proceed with sign in.');
        // your sign in logic here
    } else {
        console.log('Form has errors:', errors.value);
    }
};

</script>

<style scoped>
.text-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    box-sizing: border-box;
}

@media(max-width:625px) {
    .close {
        top: 0;
        left: 0;
    }

    .genText {
        margin-top: 30px
    }

    .btn {
        width: 200px;
        display: inline-block;

    }

    .btnInput {
        margin-right: 400px;
    }
}
</style>