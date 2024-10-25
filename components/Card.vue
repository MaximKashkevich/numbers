<template>
  <NuxtLink to="/PlateNumbers">
    <div
      class="flex-1 min-w-[300px] max-w-[426px] h-auto p-4 rounded-[20px] bg-white border-[2px] border-[#B3B3B3] flex flex-col justify-between">
      <img class="mx-auto mt-[20px]" src="../public/assets/numbers.svg" alt="Numbers">
      <div class="flex items-center justify-between mt-[30px]">
        <h1 class="text-[20px] font-medium leading-[24px]">{{ price }}</h1>
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
    price: {
      type: String,
      required: true,
      default: '2 000 AED',
    },
    emirate: {
      type: String,
      required: true,
      default: 'Dubai',
    },
    postedAt: {
      type: String,
      required: true,
      default: 'Posted Today',
    },
    views: {
      type: Number,
      required: true,
      default: 12,
    },
    liked: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const localLiked = ref(props.liked);

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
    const fetchSneakers = async () => {
      try {
        const { data } = await axios.get('https://dev.numbers.ae/api/catalog/phone/71031', {
          headers: {
            'Authorization': `Bearer ${yourActualToken}`, // вставь реальный токен
          },
        });

        console.log(data); // работа с данными
      } catch (error) {
        if (error.response) {
          console.error("Response error:", error.response.status, error.response.data);
        } else {
          console.error("Network or other error:", error.message);
        }
      }
    };

    ;



    onMounted(() => {
      fetchSneakers();
    });

    return {
      localLiked,
      toggleLike,
    };
  },
};
</script>
