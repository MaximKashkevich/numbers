<template>
  <NuxtLink>
    <div
      class="hover:shadow-2xl hover:shadow-orange-200 transition flex-1 min-w-[300px] max-w-[426px] h-[300px] rounded-[20px] bg-white border-[3px] border-[#FF9C00]">
      <img :src="photo" class="mt-[40px] px-[20px]" alt="Image" />
      <div class="flex items-center justify-between mt-[30px] mr-[30px]">
        <div class="w-[110px] ml-[20px]">
          <h1 class="text-[20px] font-medium leading-[24px]" v-html="price"></h1>
        </div>
        <component :is="localLiked ? 'HeartRed' : 'ButtonLike'" class="w-[24px] h-[20px] img-like mini-img-like"
          @click="toggleLike" />
      </div>
      <div class="mt-[30px] pl-[20px]">
        <div class="flex gap-[10px]">
          <p class="w-[59px] h-[19px] text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Emirate:</p>
          <p class=" text-[16px] font-normal leading-[19.2px] text-[#B3B3B3] flex">{{
            emirate }}</p>
        </div>
        <div class="flex gap-[25px] pt-[5px]">
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">today</p>
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">1 Views</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts">

import ButtonLike from '../ButtonLike.vue';
import HeartRed from '../HeartRed.vue';

export default {
  components: {
    ButtonLike,
    HeartRed,
  },
  props: {
    discount: Boolean,
    emirate: String,
    id: Number,
    isFeatured: Boolean,
    photo: String,
    price: String,
    type: String
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
      this.$emit('update:liked', this.localLiked);
    },
  },
  setup() {

  },
};
</script>

<style>
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
