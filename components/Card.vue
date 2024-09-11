<template>
  <div class="flex-1 min-w-[300px] max-w-[426px] h-auto p-4 rounded-[20px] bg-white border-[2px] border-[#B3B3B3] flex flex-col justify-between">
    <!-- Статичное изображение -->
    <img class="mx-auto mt-[20px]" src="../public/assets/numbers.svg" alt="Numbers">

    <div class="flex items-center justify-between mt-[30px]">
      <h1 class="text-[20px] font-medium leading-[24px]">{{ price }}</h1>

      <!-- Динамическое переключение компонентов -->
      <component
        :is="localLiked ? 'HeartRed' : 'ButtonLike'"
        class="w-[24px] h-[20px]"
        @click="toggleLike"
      />
    </div>

    <div class="mt-[20px]">
      <div class="flex gap-[10px]">
        <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
          Emirate:
        </p>
        <p class="text-[16px] text-[#BFBFBF] font-normal leading-[19.2px]">
          {{ emirate }}
        </p>
      </div>

      <div class="flex pt-[5px] gap-[10px]">
        <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
          {{ postedAt }}
        </p>
        <p class="text-[16px]  text-[#BFBFBF] font-normal leading-[19.2px]">
          {{ views }} Views
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLike from './ButtonLike.vue';
import HeartRed from './HeartRed.vue';

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
  data() {
    return {
      localLiked: this.liked, // Локальное состояние, синхронизируемое через v-model
    };
  },
  watch: {
    liked(newVal) {
      this.localLiked = newVal; // Обновляем локальное состояние при изменении пропса
    },
  },
  methods: {
    toggleLike() {
      this.localLiked = !this.localLiked;
      this.$emit('update:liked', this.localLiked); // Эмитим событие обновления liked
    },
  },
};
</script>
