<template>
  <NuxtLink>
    <!-- min-w-[300px] -->
    <div
      class="flex-1 min-w-[300px] max-w-[426px] h-[300px] rounded-[20px] bg-white border-[2px] border-[#BFBFBF]"
    >
      <img :src="imageSrc" class="mt-[40px] px-[20px]" alt="" />
      <div class="flex items-center justify-between mt-[30px] mr-[30px]">
        <div class="w-[110px] ml-[20px]">
          <h1 class="w-[110px] h-[24px] text-[20px] font-medium leading-[24px]">
            {{ price }}
          </h1>
        </div>

        <!-- Динамическое переключение компонентов -->
        <component
          :is="localLiked ? 'HeartRed' : 'ButtonLike'"
          class="w-[24px] h-[20px] img-like mini-img-like"
          @click="toggleLike"
        />
      </div>

      <div class="mt-[30px] pl-[20px]">
        <div class="flex gap-[10px]">
          <p
            class="w-[59px] h-[19px] text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
          >
            Emirate:
          </p>
          <p
            class="w-[59px] h-[19px] text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
          >
            {{ emirate }}
          </p>
        </div>

        <div class="flex gap-[25px] pt-[5px]">
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
            {{ postedAt }}
          </p>
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
            {{ views }} Views
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import ButtonLike from "../ButtonLike.vue";
import HeartRed from "../HeartRed.vue";

export default {
  components: {
    ButtonLike,
    HeartRed,
  },
  props: {
    imageSrc: {
      type: String,
      required: false,
      default: "/assets/Rectangle 73.png",
    },
    price: {
      type: String,
      required: false,
      default: "20 000 AED",
    },
    emirate: {
      type: String,
      required: false,
      default: "Dubai",
    },
    postedAt: {
      type: String,
      required: false,
      default: "Posted Today",
    },
    views: {
      type: Number,
      required: false,
      default: 12,
    },
    liked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      localLiked: this.liked,
    };
  },
  watch: {
    liked(newVal) {
      this.localLiked = newVal;
    },
  },
  methods: {
    toggleLike() {
      this.localLiked = !this.localLiked;
      this.$emit("update:liked", this.localLiked);
    },
  },
};
</script>

<style scoped>
@media (max-width: 500px) {
  .img-like {
    margin-left: -70px;
  }
}

@media (max-width: 400px) {
  .mini-img-like {
    margin-left: -120px;
  }
}
</style>
