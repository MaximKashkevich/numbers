<template>
  <!-- <NuxtLink>
    <div
      v-if="viewedPlate"
      class="hover:shadow-2xl hover:shadow-orange-200 transition flex-1 min-w-[300px] max-w-[100%] p-[5px] h-[100%] rounded-[20px] bg-white border-[3px] border-[#FF9C00]"
    >
      <img :src="viewedPlate.photo" class="mt-[40px] px-[20px]" alt="Image" />
      <div class="flex items-center justify-between mt-[30px] mr-[30px]">
        <div class="w-[110px] ml-[20px]">
          <h1
            class="flex items-center text-[19px] font-bold leading-[24px]"
            v-html="viewedPlate.price"
          ></h1>
        </div>
        <div>
          <div @click.prevent="toggleLike(props)">
            <img
              width="24px"
              :src="
                favorites.likes[plate.id]
                  ? '/assets/likeTrue.png'
                  : '/assets/like.svg'
              "
              alt="favorite"
            />
          </div>
        </div>
      </div>
      <div class="mt-[30px] pl-[20px]">
        <div class="flex gap-[10px]">
          <p
            class="w-[59px] h-[19px] text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
          >
            Emirate:
          </p>
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
            {{ viewedPlate.emirate }}
          </p>
        </div>
        <div class="flex gap-[25px] pt-[5px]">
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
            Posted {{ viewedPlate.datePosted }}
          </p>
          <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
            {{ viewedPlate.views }} Views
          </p>
        </div>
      </div>
    </div>
  </NuxtLink> -->
  <CardPlate
    to="/number"
    v-for="item in mobileNumbers"
    :key="item.id"
    v-bind="item"
    :is-featured-class="false"
  />
</template>
<script setup lang="ts">
import { defineProps, onMounted } from "vue";
import axios from "axios";
import { ref } from "vue";

const props = defineProps({
  // photo: { type: String, required: false },
  // price: { type: Number, required: true },
  // id: { type: Number, required: true },
  // emirate: { type: String, required: true },
  // datePosted: { type: String, required: false },
  // views: { type: Number, required: true },
  plate: { type: Object, required: true },
});

interface ViewedPlate {
  id: number;
  photo: string;
  price: number;
  emirate: string;
  datePosted: string;
  views: number;
}

const viewedPlate = ref<ViewedPlate | null>(null);

const fetchViewedPlate = async () => {
  try {
    const response = await axios.get(
      `https://api.dev.numbers.ae/v1/catalog/plate/${props.plate}`
    );
    viewedPlate.value = response.data;
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  console.log("лог");
  fetchViewedPlate();
});
import { useFavoritesStore } from "~/stores/favoritesStore";
const favorites = useFavoritesStore();
</script>
