<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10" aria-hidden="true"></div>

  <div class="fixed inset-0 flex items-center justify-center z-20 py-[10px]" role="dialog"
    aria-labelledby="dialog-title">
    <div class="w-full max-w-[750px] h-full bg-white shadow-lg p-6 rounded-[20px] flex flex-col overflow-y-auto mx-4">
      <div class="relative mb-8">
        <h1 id="dialog-title" class="genText text-[28px] md:none md:text-[35px] font-medium leading-[42px]">Sign Up</h1>
        <NuxtLink class="absolute md:flex-row close top-0 right-0" to="/" aria-label="Close">
          <svg @click="toggleSignUp" class="cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1.56622 0.267867C1.20792 -0.0904283 0.627013 -0.0904284 0.26872 0.267867C-0.0895737 0.626162 -0.0895731 1.20707 0.26872 1.56537L8.70293 9.99962L0.269341 18.4333C-0.0889529 18.7915 -0.088953 19.3725 0.269341 19.7308C0.627634 20.0891 1.20854 20.0891 1.56684 19.7308L10.0004 11.2971L18.4337 19.7304C18.792 20.0887 19.3729 20.0887 19.7312 19.7304C20.0894 19.3721 20.0894 18.7912 19.7312 18.4329L11.2979 9.99962L19.7318 1.56572C20.0901 1.20743 20.0901 0.626516 19.7318 0.26822C19.3735 -0.090075 18.7926 -0.0900745 18.4343 0.268221L10.0004 8.70212L1.56622 0.267867Z"
              fill="#878787" />
          </svg>
        </NuxtLink>
      </div>


      <form @submit.prevent="onSubmit" class="flex flex-col gap-4 mb-6">
        <fieldset>
          <legend class="sr-only">Sign Up Form</legend>
          <ul class="flex-col gap-4">
            <TextInput v-for="(field, index) in inputTitle" :key="index" :id="'field' + index" :type="field.type"
              :placeholder="field.placeholder" :title="field.title" v-model="apiRegisterData[field.value]"
              class="w-full" />
          </ul>

          <!-- Блок для вывода ошибок -->
          <div class="mt-4">
            <p v-if="errors.length > 0" class="text-red-500 text-sm font-medium">
              Please fix the following errors:
            </p>
            <ul class="list-disc list-inside text-red-500 text-sm">
              <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
          </div>

          <ButtonBlue class="flex-wrap btn w-full max-w-[200px] py-[14px] mt-4">
            Sign Up
          </ButtonBlue>
        </fieldset>
      </form>

    </div>
  </div>
</template>

<script setup lang="ts">
import TextInput from './Input.vue';
import ButtonBlue from '../Button-blue/ButtonBlue.vue';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useSignUpStore } from '../../stores/signUp';

interface ApiRegisterData {
  email: string;
  login: string;
  fullName: string;
  mobileNumber: string;
  password: string;
}

interface InputField {
  title: string;
  type: string;
  value: keyof ApiRegisterData;
  placeholder: string;
}

const signUpStore = useSignUpStore();
const router = useRouter();

const toggleSignUp = () => {
  signUpStore.onClickSignUP();
};

const errors = ref<string[]>([]);
const apiRegisterData = reactive<ApiRegisterData>({
  email: '',
  login: '',
  fullName: '',
  mobileNumber: '',
  password: '',
});

const inputTitle = ref<InputField[]>([
  { title: 'Your Email:', type: 'email', value: 'email', placeholder: 'username@gmail.com' },
  { title: 'Choose login:', type: 'text', value: 'login', placeholder: 'JohnSnow_123' },
  { title: 'Full name:', type: 'text', value: 'fullName', placeholder: 'John Snow' },
  { title: 'Mobile number:', type: 'tel', value: 'mobileNumber', placeholder: '012 345 67 89' },
  { title: 'Password:', type: 'password', value: 'password', placeholder: 'xxxxxxx' },
]);

const validateEmail = (email: string) => {
  // Исправлено: убраны лишние обратные слэши
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

// Валидация мобильного номера
const validatePhoneNumber = (phone: string) => {
  // Исправлено: убраны лишние обратные слэши
  const phonePattern = /^\+\d{10,15}$/; // Формат: +1234567890123
  return phonePattern.test(phone);
};

// Основная функция валидации
const validate = () => {
  errors.value = []; // Сбрасываем ошибки

  // Валидация электронной почты
  if (!apiRegisterData.email || !validateEmail(apiRegisterData.email)) {
    errors.value[0] = 'Invalid email address.'; // Ошибка электронной почты
  }

  // Валидация логина
  if (!apiRegisterData.login) {
    errors.value[1] = 'Login is required.'; // Ошибка логина
  }

  // Валидация полного имени
  if (!apiRegisterData.fullName) {
    errors.value[2] = 'Full name is required.'; // Ошибка полного имени
  }

  // Валидация номера мобильного телефона
  if (!apiRegisterData.mobileNumber || !validatePhoneNumber(apiRegisterData.mobileNumber)) {
    errors.value[3] = 'Invalid phone number format. Use +XXXXXXXXXXX.'; // Ошибка номера телефона
  }

  // Валидация пароля
  if (!apiRegisterData.password || apiRegisterData.password.length < 6) {
    errors.value[4] = 'Password must be at least 6 characters long.'; // Ошибка пароля
  }
};

// Обработка отправки формы
const onSubmit = async () => {
  validate(); // Запускаем валидацию

  if (errors.value.length > 0) {
    return; // Если есть ошибки, завершаем выполнение
  }

  // Удаляем все пробелы в мобильном номере
  apiRegisterData.mobileNumber = apiRegisterData.mobileNumber.replace(/\s+/g, '').trim();

  try {
    const response = await axios.post('https://api.dev.numbers.ae/v1/auth/signup', {
      email: apiRegisterData.email,
      login: apiRegisterData.login,
      fullName: apiRegisterData.fullName,
      mobileNumber: apiRegisterData.mobileNumber,
      password: apiRegisterData.password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data);

    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
      // Сохраняем токен
    }

    router.push('/GeneralEmpty'); // Перенаправляем на главную страницу
    signUpStore.signUp = !signUpStore.signUp


  } catch (error: any) {
    if (error.response) {
      console.error(error.response.data);

      // Обрабатываем специфические сообщения об ошибках
      if (error.response.data.result) {
        errors.value.push(...error.response.data.result.mobilenumber || []);
      }
    } else {
      console.error(error);
    }
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

@media(max-width: 640px) {
  .close {
    display: block;
  }
}
</style>