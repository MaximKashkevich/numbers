<template>
    <div class="flex justify-between items-start pl-[60px] pr-[60px] pt-[100px] block">
      <div class="w-[650px] h-[650px]">
        <h1 class="font-roboto text-[50px] font-medium uppercase tracking-wide leading-none w-[400px] textOne">
          Welcome <span class="pr-[15px] sp">to</span> Numbers.ae
        </h1>
        <p class="w-[500px] pt-[30px] textTwo">
          Numbers.ae is a Web service aimed to create an easy and convenient way to purchase or sell Plate and
          Mobile Numbers in Dubai, Abu Dhabi, and other Emirates.
        </p>
        <div class="flex items-end h-[390px] textThird">
          <h2 class="font-roboto text-[35px] font-medium leading-[42px]">
            No account?
          </h2>
        </div>
      </div>
  
      <div class="w-[650px] mr-[50px]">
        <h2 class="font-roboto text-[35px] font-medium leading-[42px] pt-[20px] textThird">Login with social networks</h2>
        <div class="button-container flex flex-col gap-[20px] pt-[40px]">
          <div class="flex gap-[20px] sm:grid sm:grid-cols-2 image">
            <ButtonLogin>
              <img src="../public/assets/google-logo.svg" alt="Google" class="w-[90px] h-[30px]" />
            </ButtonLogin>
            <ButtonLogin>
              <img src="../public/assets/facebook-logo.webp" alt="Facebook" class="w-[100px] h-[20px]" />
            </ButtonLogin>
          </div>
          <div class="pt-[70px]">
            <h3 class="textFours w-[600px] h-[42px] font-roboto text-[35px] font-medium leading-[42px] text-left flex-wrap">
              Or login with username and password
            </h3>
            <form @submit.prevent="handleSubmit" class="pt-[30px]">
              <div>
                <label for="username" class="text-[14px] font-medium leading-[16.8px]">Login, e–mail or username:</label>
                <input v-model="apiLog.email" type="text" id="username"
                  class="inputs bg-[#fff] w-[600px] h-[52px] border-[1px] pl-[30px] text-[#B3B3B3] border-[#B3B3B3] rounded-[50px] placeholder-custom mb-[10px]"
                  placeholder="username@gmail.com or 050 123 45 67 or JohnSnow_123" />
                <span v-if="errors.username" class="text-red-500">{{ errors.username }}</span>
              </div>
  
              <div>
                <label for="password" class="text-[14px] font-medium leading-[16.8px] h-[20px]">Password:</label>
                <input v-model="apiLog.password" type="password" id="password"
                  class="inputs bg-[#fff] w-[600px] h-[52px] border-[1px] pl-[30px] text-[#B3B3B3] border-[#B3B3B3] rounded-[50px] placeholder-custom"
                  placeholder="xxxxxxx" />
                <span v-if="errors.password" class="text-red-500">{{ errors.password }}</span>
              </div>
              <div class="flex items-center my-2">
                <input id="remember-me" type="checkbox" v-model="form.rememberMe"
                  class="custom-checkbox h-4 w-4 border border-gray-300 rounded focus:ring-0" />
                <label for="remember-me" class="ml-2 block text-sm text-[#B3B3B3]">Remember me</label>
              </div>
  
              <NuxtLink>
                <ButtonBlue type="submit" class="w-[15rem] py-[0.7rem]">
                  Sign in
                </ButtonBlue>
              </NuxtLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  import { useAuthStore } from '@/stores/auth'

  interface FormInterface {
    username: string | number,
    password: string | number,
    rememberMe: boolean,
  }

  interface errors {
    username: string,
    password: string,
  }

  interface apiLOgs {
    email: string,
    password: string,
  }
  
  
  const router = useRouter();
  
  // Data binding for the form
  const form = ref<FormInterface>({
    username: '',
    password: '',
    rememberMe: false,
  });
  
  const errors = ref<errors>({
    username: '',
    password: '',
  });
  
  const apiLog = reactive<apiLOgs>({
    email: "",
    password: ""
  });
  
  // Form validation
  const validate = () => {
    errors.value.username = '';
    errors.value.password = '';
  
    const username = apiLog.email;
  
    if (!username) {
      errors.value.username = 'Username is required.';
    } else if (!/^[a-zA-Z0-9_]+$/.test(username) && !/^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(username) && !/^\+?\d{1,3}[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/.test(username)) {
      errors.value.username = 'Please enter a valid email, phone number, or username.';
    }
  
    if (!apiLog.password) {
      errors.value.password = 'Password is required.';
    } else if (apiLog.password.length < 6) {
      errors.value.password = 'Password must be at least 6 characters.';
    }
  };
  
  // API login function
  const apiLogin = async () => {
    const authStore = useAuthStore();
  
    try {
      const response = await axios.post('https://api.dev.numbers.ae/v1/auth/signin', apiLog, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const token = response.data?.result?.token;
  
      if (token) {
      
  
        authStore.setToken(token);
        router.push('/GeneralEmpty');
      } else {
        console.error('Токен отсутствует в ответе от сервера.');
      }
    } catch (error) {
      console.error('Ошибка при логине:', error);
      console.error('Ответ сервера:', error.response ? error.response.data : error.message);
    }
  };
  

  const handleSubmit = () => {
    validate();
    if (!errors.value.username && !errors.value.password) {
      apiLogin();  
    }
  };
  </script>
  

<style scoped>
@media(max-width: 430px) {
    .textOne {
        font-size: 45px;
    }
}

@media(max-width: 430px) {
    .block {
        flex-wrap: wrap;
    }
}

@media(max-width: 430px) {
    .sp {
        display: flex;
        text-align: center;
    }
}

@media(max-width: 430px) {
    .textTwo {
        width: 300px;
    }
}

@media(max-width: 430px) {
    .textThird {
        font-size: 26px;
    }
}

@media(max-width: 430px) {
    .textFours {
        display: flex;
        font-size: 16px;
    }
}

@media(max-width: 430px) {
    .inputs {
        width: 250px;
        display: flex;
    }
}

@media(max-width: 430px) {
    .buttonSign {
        width: 250px;
        justify-content: center;
    }
}

@media(max-width: 430px) {
    .image {
        display: flex;
        flex-direction: column;
    }
}

@media(max-width: 1200px) {
    .block {
        flex-wrap: wrap;
    }
}
</style>