<template>
  <div
    class="grid mt-[50px] md:mt-[150px] grid-cols-1 lg:grid-cols-2 flex-wrap gap-[20px] justify-center md:justify-between"
  >
    <!-- Форма ввода -->
    <form
      @submit.prevent="handleSubmit"
      class="flex flex-col gap-4 mb-6 w-full"
    >
      <fieldset>
        <div>
          <h3
            class="text-3xl md:text-5xl font-normal leading-[40px] md:leading-[60px] text-left w-full form-title"
          >
            Do you still have questions or have suggestions?
          </h3>
          <p
            class="text-sm md:text-base font-normal leading-[18px] md:leading-[19.2px] text-left w-full mt-[10px] md:mt-[20px] mb-[30px] md:mb-[70px]"
          >
            Leave your contacts and question or suggestion and we will contact
            you to discuss.
          </p>
        </div>
        <legend class="sr-only">Contact Form</legend>

        <!-- Список полей ввода -->
        <ul class="flex flex-col gap-4">
          <!-- Name -->
          <li>
            <label for="name" class="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              v-model="formData.name"
              class="border border-[#bfbfbf] rounded-[100px] w-full h-[50px] max-h-[150px] pl-[14px] cursor-text"
              @blur="validateField('name')"
            />
            <p v-if="errors.name" class="text-red-500 text-xs mt-1">
              {{ errors.name }}
            </p>
          </li>

          <!-- Phone -->
          <li>
            <label for="phone" class="text-sm font-medium text-gray-700">
              Phone
            </label>
            <div class="relative flex items-center">
              <input
                type="text"
                placeholder="___  -  ___  -  ____"
                v-model="formData.phone"
                @input="formatPhoneInput"
                @blur="validateField('phone')"
                class="border border-[#bfbfbf] rounded-[100px] w-full h-[50px] max-h-[150px] pl-[56px] cursor-text"
              />
              <h3 class="absolute left-[14px] text-[16px]">+971</h3>
            </div>
            <p v-if="errors.phone" class="text-red-500 text-xs mt-1">
              {{ errors.phone }}
            </p>
          </li>

          <!-- Message -->
          <li>
            <label for="message" class="text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              v-model="formData.message"
              class="h-[150px] w-full max-h-[150px] border-gray-400 border-[1px] pl-[15px] pr-[12px] pt-[12px] placeholder:text-gray-400 placeholder:opacity-80 overflow-hidden resize-none bg-transparent rounded-[20px]"
              placeholder="Write your question or suggestion"
              @blur="validateField('message')"
            ></textarea>
            <p v-if="errors.message" class="text-red-500 text-xs mt-1">
              {{ errors.message }}
            </p>
          </li>
        </ul>

        <!-- Кнопка отправки -->
        <ButtonBlue
          class="w-[220px] mt-[30px] md:mt-[50px] self-start"
          type="submit"
        >
          Send
        </ButtonBlue>
      </fieldset>
    </form>

    <!-- Изображение -->
    <div class="w-full h-full">
      <img
        src="../../public/assets/backgroundContact.webp"
        alt="contact us form background"
        class="rounded-lg w-full h-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface FormData {
  name: string;
  phone: string;
  message: string;
}

const formData = ref<FormData>({
  name: "",
  phone: "",
  message: "",
});

const errors = ref<{ name?: string; phone?: string; message?: string }>({});

// ✅ Функция валидации телефона
const validatePhone = (phone: string): string | null => {
  const phonePattern = /^\d{3} - \d{3} - \d{4}$/;
  if (!phone) return "Phone number is required.";
  if (!phonePattern.test(phone))
    return "Invalid phone number format (xxx - xxx - xxxx)";
  return null;
};

// ✅ Автоформатирование ввода номера
const formatPhoneInput = () => {
  let value = formData.value.phone.replace(/\D/g, ""); // Оставляем только цифры

  if (value.length > 9) value = value.slice(0, 10); // Ограничиваем 9 цифрами

  if (value.length <= 3) {
    formData.value.phone = value;
  } else if (value.length <= 6) {
    formData.value.phone = `${value.slice(0, 3)} - ${value.slice(3)}`;
  } else {
    formData.value.phone = `${value.slice(0, 3)} - ${value.slice(
      3,
      6
    )} - ${value.slice(6)}`;
  }
};

// ✅ Универсальная функция валидации полей
const validateField = (field: keyof FormData) => {
  if (field === "name") {
    errors.value.name = formData.value.name.trim()
      ? undefined
      : "Name is required.";
  } else if (field === "phone") {
    errors.value.phone = validatePhone(formData.value.phone) || undefined;
  } else if (field === "message") {
    errors.value.message = formData.value.message.trim()
      ? undefined
      : "Message is required.";
  }
};

// ✅ Валидация перед отправкой формы
const handleSubmit = () => {
  validateField("name");
  validateField("phone");
  validateField("message");

  if (!errors.value.name && !errors.value.phone && !errors.value.message) {
    alert("Form submitted successfully! 🚀");
  }
};
</script>
