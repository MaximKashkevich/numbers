<template>
  <div
    class="wrapper__signUp flex justify-between gap-[20px] pl-[60px] pr-[60px] pt-[70px] block"
  >
    <div
      class="w-[650px] max-w-[100%] flex flex-col justify-between min-h-[100%]"
    >
      <div>
        <h1
          class="font-roboto text-[50px] font-medium uppercase tracking-wide leading-none w-[430px] textOne"
        >
          Welcome<br />
          to Numbers.ae
        </h1>
        <p class="pt-[30px] max-w-[500px]">
          Numbers.ae is a Web service aimed to create an easy and convenient way
          to purchase or sell Plate and Mobile Numbers in Dubai, Abu Dhabi, and
          other Emirates.
        </p>
      </div>

      <div class="flex items-end pt-[30px] xl:pt-0">
        <h2 class="font-roboto text-[35px] font-medium leading-[42px]">
          No account?
          <span @click="toggleSignUp" class="text-blue-500 cursor-pointer"
            >Sign Up</span
          >
        </h2>
      </div>
    </div>

    <div class="mr-[50px]">
      <h2 class="font-roboto text-[35px] font-medium leading-[42px]">
        Login with social networks
      </h2>
      <div class="button-container flex flex-col gap-[20px] pt-[30px]">
        <div class="gap-[20px] grid grid-cols-2 image">
          <ButtonLogin class="w-full">
            <img
              src="../public/assets/google-logo.svg"
              alt="Google"
              class="w-[90px] h-[30px]"
            />
          </ButtonLogin>
          <ButtonLogin class="w-full">
            <img
              src="../public/assets/facebook.svg"
              alt="Facebook"
              class="w-[100px] h-[20px]"
            />
          </ButtonLogin>
        </div>
        <div class="pt-[70px]">
          <h3
            class="font-roboto text-[35px] font-medium leading-[42px] text-left flex-wrap"
          >
            Or login with username and password
          </h3>
          <form @submit.prevent="handleSubmit" class="pt-[30px]">
            <div class="flex flex-col">
              <label for="username" class="text-[14px] leading-[16.8px]"
                >Login, e–mail or username:</label
              >
              <input
                v-model="apiLog.email"
                type="text"
                id="username"
                class="inputs mt-2 bg-[#fff] h-[52px] border-[1px] pl-[20px] text-[#B3B3B3] border-[#B3B3B3] rounded-[50px] placeholder-custom mb-[10px]"
                placeholder="username@gmail.com or 050 123 45 67 or JohnSnow_123"
              />
              <span v-if="errors.username" class="text-red-500">{{
                errors.username
              }}</span>
            </div>

            <div class="flex flex-col">
              <label
                for="password"
                class="text-[14px] leading-[16.8px] h-[20px]"
                >Password:</label
              >
              <input
                v-model="apiLog.password"
                type="password"
                id="password"
                class="inputs mt-2 bg-[#fff] h-[52px] border-[1px] pl-[20px] text-[#B3B3B3] border-[#B3B3B3] rounded-[50px] placeholder-custom"
                placeholder="xxxxxxx"
              />
              <span v-if="errors.password" class="text-red-500">{{
                errors.password
              }}</span>
            </div>
            <div class="flex items-center mt-[15px] mb-[30px]">
              <input
                id="remember-me"
                type="checkbox"
                v-model="form.rememberMe"
                class="custom-checkbox h-[20px] w-[20px] border border-gray-300 rounded focus:ring-0"
              />
              <label for="remember-me" class="ml-2 block text-sm text-[#B3B3B3]"
                >Remember me</label
              >
            </div>

            <NuxtLink>
              <ButtonBlue type="submit" class="w-[300px] py-[0.7rem]">
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
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import { useSignUpStore } from "@/stores/signUp";

const SignUp = useSignUpStore();

const toggleSignUp = () => {
  SignUp.onClickSignUP();
};

interface FormInterface {
  username: string | number;
  password: string | number;
  rememberMe: boolean;
}

interface errors {
  username: string;
  password: string;
}

interface apiLOgs {
  email: string;
  password: string;
}
const router = useRouter();

// Data binding for the form
const form = ref<FormInterface>({
  username: "",
  password: "",
  rememberMe: false,
});

const errors = ref<errors>({
  username: "",
  password: "",
});

const apiLog = reactive<apiLOgs>({
  email: "",

  password: "",
});

// Form validation
const validate = () => {
  errors.value.username = "";
  errors.value.password = "";

  const username = apiLog.email;

  if (!username) {
    errors.value.username = "Username is required.";
  } else if (
    !/^[a-zA-Z0-9_]+$/.test(username) &&
    !/^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(username) &&
    !/^\+?\d{1,3}[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/.test(
      username
    )
  ) {
    errors.value.username =
      "Please enter a valid email, phone number, or username.";
  }

  if (!apiLog.password) {
    errors.value.password = "Password is required.";
  } else if (apiLog.password.length < 6) {
    errors.value.password = "Password must be at least 6 characters.";
  }
};

// API login function
const apiLogin = async () => {
  const authStore = useAuthStore();

  try {
    const response = await axios.post(
      "https://api.dev.numbers.ae/v1/auth/signin",
      apiLog,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const token = response.data?.result?.token;

    if (token) {
      authStore.setToken(token);
      router.push("/GeneralEmpty");
    } else {
      console.error("Токен отсутствует в ответе от сервера.");
    }
  } catch (error) {
    console.error("Ошибка при логине:", error);
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
@media (max-width: 430px) {
  .textOne {
    font-size: 45px;
  }
}

@media (max-width: 430px) {
  .block {
    flex-wrap: wrap;
  }
}

@media (max-width: 430px) {
  .sp {
    display: flex;
    text-align: center;
  }
}

@media (max-width: 430px) {
  .textTwo {
    width: 300px;
  }
}

@media (max-width: 430px) {
  .textThird {
    font-size: 26px;
  }
}

@media (max-width: 430px) {
  .textFours {
    display: flex;
    font-size: 16px;
  }
}

@media (max-width: 430px) {
  .inputs {
    width: clamp(200px, 90vw, 600px);
    display: block;
  }

  .inputs::placeholder {
    font-size: clamp(16px, 3vw, 20px);
  }

  p {
    font-size: clamp(20px, 4.8vw, 32px);
    max-width: 90vw;
  }

  h2 {
    font-size: clamp(16px, 7vw, 36px);
    text-wrap: nowrap;
  }

  h3 {
    font-size: clamp(16px, 5vw, 36px);
    text-wrap: nowrap;
  }
}

@media (max-width: 760px) {
  .wrapper__signUp {
    padding: 20px;
  }
}

@media (max-width: 430px) {
  .block {
    flex-wrap: wrap;
  }
}

@media (max-width: 430px) {
  .sp {
    display: flex;
    text-align: center;
  }
}

@media (max-width: 430px) {
  .inputs {
    width: 250px;
    display: flex;
  }
}

@media (max-width: 430px) {
  .buttonSign {
    width: 250px;
    justify-content: center;
  }
}

@media (max-width: 760px) {
  .image {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 1200px) {
  .block {
    flex-wrap: wrap;
  }
}
</style>
