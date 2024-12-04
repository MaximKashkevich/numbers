<template>
  <div class="container-input mt-[150px]">
    <h3
      class="w-[1320px] h-[60px] leading-[60px] text-left title-input mb-[50px]"
    >
      Choose your number
    </h3>
    <div class="flex gap-[20px] items-center flex-wrap">
      <div>
        <label
          class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
          for="type"
          >Type:</label
        >
        <div class="mt-[10px] flex gap-[10px]">
          <button
            @click="setTogglePlate"
            :class="[
              'button__filter w-[130px] h-[47px] rounded-[100px] border font-roboto text-[16px] font-normal leading-[19.2px] flex justify-center items-center text-center',
              toggleOptionIsNumbers ? 'border-[#000]' : 'border-[#bfbfbf]',
            ]"
          >
            Plate
          </button>
          <button
            @click="setToggleMobile"
            :class="[
              'button__filter w-[130px] h-[47px] rounded-[100px] border font-roboto text-[16px] font-normal leading-[19.2px] flex justify-center items-center text-center',
              !toggleOptionIsNumbers ? 'border-[#000]' : 'border-[#bfbfbf]',
            ]"
          >
            Mobile
          </button>
        </div>
      </div>
      <div>
        <label
          for="emirate"
          class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
          >Emirate:</label
        >
        <select
          id="emirate"
          name="emirate"
          class="button__filter mt-[10px] text-[16px] font-normal leading-[19.2px] text-left block w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]"
        >
          <option value="city">Dubai</option>
          <option value="city">Abu Dhabi</option>
          <option value="city">Ajman</option>
          <option value="city">Umm Al Quwain</option>
          <option value="city">Ras Al Khaimah</option>
          <option value="city">None</option>
        </select>
      </div>
      <div>
        <label
          for="code"
          class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
          >Code:</label
        >
        <select
          id="emirate"
          name="code"
          class="button__filter mt-[10px] text-[16px] font-normal leading-[19.2px] text-left block w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]"
        >
          <option>AA</option>
          <option>None</option>
        </select>
      </div>
      <div>
        <label
          for="sort"
          class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
          >Sort by:</label
        >
        <select
          id="emirate"
          name="sort"
          class="button__filter mt-[10px] text-[16px] font-normal leading-[19.2px] text-left block w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]"
        >
          <option>Latest</option>
        </select>
      </div>
      <ButtonBlue
        class="w-[310px] h-[52px] flex justify-center items-center font-bold mt-[30px]"
      >
        Show 1234 numbers
      </ButtonBlue>
    </div>
    <CardPlateList />
  </div>
</template>
<script setup>
import CardPlateList from "./CardPlate/CardPlateList.vue";
import { usePlateStore } from "/stores/plateStore";
// if toggleNumbers === plate return true
// else if mobile return false
let toggleOptionIsNumbers = ref(true);

const setTogglePlate = () => {
  toggleOptionIsNumbers.value = true;
  plateStore.fetchPlate("plate");
};
const setToggleMobile = () => {
  toggleOptionIsNumbers.value = false;
  plateStore.fetchPlate("phone");
};

const plateStore = usePlateStore();

onMounted(() => {
  plateStore.fetchPlate("plate");
});
</script>
<style>
.button__filter {
  transition: border 0.3s;
}
.button__filter:hover {
  border-color: #000;
}

h3 {
  font-size: clamp(32px, 10vw, 56px);
}
</style>
