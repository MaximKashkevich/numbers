import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

interface ApiRegisterData {
  email: string;
  login: string;
  fullName: string;
  mobileNumber: string;
  password: string;
}

export const useSignUpStores2 = defineStore("signUp", () => {
  const router = useRouter();
  const errors = ref<string[]>([]);
  const apiRegisterData = reactive<ApiRegisterData>({
    email: "",
    login: "",
    fullName: "",
    mobileNumber: "",
    password: "",
  });

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (phone: string) => {
    const phonePattern = /^\\+\\d{10,15}$/; // Format: +1234567890123
    return phonePattern.test(phone);
  };

  const validate = () => {
    errors.value = [];

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
      .replace(/\\s+/g, "")
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
        localStorage.setItem("authToken", response.data.token);
      }

      router.push("/");
    } catch (error: any) {
      if (error.response) {
        if (error.response.data.result) {
          errors.value.push(...(error.response.data.result.mobilenumber || []));
        }
      }
    }
  };

  return {
    apiRegisterData,
    errors,
    onSubmit,
  };
});
