<template>
  <div class="px-8 md:px-10 lg:px-12 xl:px-16">
    <nav class="mb-[30px] mt-[30px] navigation">
      <ul class="flex gap-[5px]">
        <li>
          <NuxtLink to="/" class="text-[#005DCA] transition cursor-pointer">
            Home /
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-[#BFBFBF] hover:text-[#005DCA] transition cursor-pointer"
          >
            Plate numbers
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <h1
      v-if="route.fullPath.includes('plate')"
      class="tw-page-heading w-[100%] lg:w-[900px] mb-10"
    >
      Buy and Sell Car Registration Plates in the UAE
    </h1>
    <h1 v-else class="tw-page-heading w-[100%] lg:w-[900px] mb-10">
      Buy and Sell Mobile Numbers in the UAE
    </h1>
    <CatalogComponent />
    <div ref="loader" class="loader"></div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import CatalogComponent from "~/components/Catalog/CatalogComponent.vue";
import useIntersectionObserver from "~/hooks/useIntersectionObserver";
import { usePlateFetchStore } from "~/stores/plateFetchStore.";
import { usePhoneFetchStore } from "~/stores/phoneFetchStore";

const plateFetchStore = usePlateFetchStore();
const phoneFetchStore = usePhoneFetchStore();
const loader = ref(null);
const isLoaderVisible = useIntersectionObserver(loader);

watch(isLoaderVisible, (visible) => {
  if (visible) {
    plateFetchStore.fetchFilteredPlates();
    phoneFetchStore.fetchFilteredPhones();
    console.log("лоадер отработал");
  }
});

const route = useRoute();
</script>

<style>
.loader {
  width: 1px;
  height: 1px;
  background-color: transparent;
}

.dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.dots span {
  width: 10px;
  height: 10px;
  background-color: #2b4dbd;
  border-radius: 50%;
  animation: blink 1.5s infinite ease-in-out;
}

.dots span:nth-child(1) {
  animation-delay: 0s;
}

.dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.dots span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes blink {
  0%,
  80%,
  100% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

::placeholder {
  color: #c2c2c2;
}

.custom-checkbox {
  width: 25px;
  height: 25px;
  border: 1px solid #bfbfbf;
  background-color: #fafafa;
  border-radius: 6px;
  appearance: none;
  /* Убирает стандартный стиль браузера */
  cursor: pointer;
  outline: none;
  position: relative;
  display: inline-block;
}

.custom-checkbox:checked {
  background-color: #fafafa;
  border-color: #bfbfbf;
}

.custom-checkbox:checked::before {
  content: "✔";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  color: #4a90e2;
  font-size: 16px;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-checkbox:focus {
  box-shadow: none;
}

.custom-label {
  font-size: 16px;
  color: #333;
  cursor: pointer;
  margin-left: 10px;
}

@media (max-width: 1024px) {
  .button-container {
    margin-top: 40px;
    margin-left: -1px;
  }

  .button--1 {
    margin-left: -1px;
  }

  .choice {
    margin-top: 30px;
    margin-left: -1px;
  }

  .text-checkbox {
    font-size: 16px;
    margin-bottom: 5px;
    width: 300px;
  }

  .checkbox-container {
    margin-bottom: 20px;
  }
}

@media (max-width: 530px) {
  .dots {
    margin-top: 80px;
  }
}
</style>
