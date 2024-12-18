<template>
  <NuxtLink to="/PlateNumbers">
    <div
      class="flex-1 min-w-[300px] max-w-[426px] h-auto p-4 rounded-[20px] bg-white border-[2px] border-[#B3B3B3] flex flex-col justify-between">
      <!-- Динамическое изображение -->
      <img v-if="imageUrl" :src="imageUrl" alt="Numbers" class="mx-auto mt-[20px]" />
      <img v-else src="../public/assets/numbers.svg" alt="Numbers" class="mx-auto mt-[20px]" />

      <div class="flex items-center justify-between mt-[30px]">
        <h1 class="text-[20px] font-medium leading-[24px]" v-html="price"></h1>

        <component :is="localLiked ? 'HeartRed' : 'ButtonLike'" class="w-[24px] h-[20px]" @click.stop="toggleLike" />
      </div>

      <div class="mt-[20px]">
        <div class="flex gap-[10px]">
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Emirate:</p>
          <p class="text-[16px] text-[#BFBFBF] font-normal leading-[19.2px]">{{ emirate }}</p>
        </div>

        <div class="flex pt-[5px] gap-[10px]">
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">{{ postedAt }}</p>
          <p class="text-[16px] text-[#BFBFBF] font-normal leading-[19.2px]">{{ views }} Views</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import ButtonLike from './ButtonLike.vue';
import HeartRed from './HeartRed.vue';
import axios from 'axios';

export default {
  components: {
    ButtonLike,
    HeartRed,
  },
  props: {
    liked: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const localLiked = ref(props.liked);
    const price = ref('');
    const emirate = ref('');
    const postedAt = ref('Posted Today');
    const views = ref(0);
    const imageUrl = ref('');

    watch(
      () => props.liked,
      (newVal) => {
        localLiked.value = newVal;
      }
    );

    const toggleLike = () => {
      localLiked.value = !localLiked.value;
      emit('update:liked', localLiked.value);
    };

    const fetchPhoneData = async () => {
      try {
        const response = await axios.get('https://api.dev.numbers.ae/v1/catalog/phone/71037');
        const data = response.data;

        price.value = data.price ? `${data.price} ` : 'not price';
        emirate.value = data.emirate || 'Nan';
        views.value = data.views || 0;
        imageUrl.value = data.imageUrl || '';
      } catch (error) {
        // console.error('Ошибка при получении данных:', error);
      }
    };

    onMounted(() => {
      fetchPhoneData();
    });

    return {
      localLiked,
      toggleLike,
      price,
      emirate,
      postedAt,
      views,
      imageUrl,
    };
  },
};
</script>
