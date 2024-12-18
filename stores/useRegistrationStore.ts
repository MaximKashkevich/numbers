import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import axios from "axios";

export interface ApiRegisterData {
  email: string;
  login: string;
  fullName: string;
  mobileNumber: string;
  password: string;
}

export const useRegistation = defineStore("signUp", () => {
  const apiRegisterData = reactive<ApiRegisterData>({
    email: "",
    login: "",
    fullName: "",
    mobileNumber: "",
    password: "",
  });

  const token = ref<string>("");

  const errors = ref<string[]>([]);

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (phone: string) => {
    const phonePattern = /^\+\d{10,15}$/;
    return phonePattern.test(phone);
  };

  const validate = () => {
    errors.value = []; // Сброс ошибок

    if (!apiRegisterData.email || !validateEmail(apiRegisterData.email)) {
      errors.value[0] = "Invalid email address.";
    }
    if (!apiRegisterData.login) {
      errors.value[1] = "Login is required.";
    }
    if (!apiRegisterData.fullName) {
      errors.value[2] = "Full name is required.";
    }
    if (
      !apiRegisterData.mobileNumber ||
      !validatePhoneNumber(apiRegisterData.mobileNumber)
    ) {
      errors.value[3] = "Invalid phone number format. Use +XXXXXXXXXXX.";
    }
    if (!apiRegisterData.password || apiRegisterData.password.length < 6) {
      errors.value[4] = "Password must be at least 6 characters long.";
    }
  };

  const onSubmit = async () => {
    validate();

    if (errors.value.length > 0) {
      return;
    }

    apiRegisterData.mobileNumber = apiRegisterData.mobileNumber
      .replace(/\s+/g, "")
      .trim();

    try {
      const response = await axios.post(
        "https://api.dev.numbers.ae/v1/auth/signup",
        {
          email: apiRegisterData.email,
          login: apiRegisterData.login,
          fullName: apiRegisterData.fullName,
          mobileNumber: apiRegisterData.mobileNumber,
          password: apiRegisterData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.token) {
        token.value = response.data.token;
        localStorage.setItem("authToken", token.value);
      }

      return response.data;
    } catch (error: any) {
      if (error.response) {
        console.error(error.response.data);
        if (error.response.data.result) {
          errors.value.push(...(error.response.data.result.mobilenumber || []));
        }
      } else {
        console.error(error);
      }
    }
  };

  return {
    apiRegisterData,
    errors,
    token,
    onSubmit,
  };
});
