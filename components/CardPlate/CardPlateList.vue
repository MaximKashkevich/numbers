<template>
  <div class="platelist__grid">
    <div v-for="plate in plateNumbers" :key="plate.id">
      <div
        class="hover:shadow-2xl hover:shadow-orange-200 transition flex-1 min-w-[300px] max-w-[426px] h-[300px] rounded-[20px] bg-white border-[3px] border-[#FF9C00] plate__card"
      >
        <img
          src="/assets/Rectangle 73.png"
          class="mt-[40px] px-[20px]"
          alt="Image"
        />
        <div class="flex items-center justify-between mt-[30px] mr-[30px]">
          <div class="w-[110px] ml-[20px]">
            <h1
              class="w-[110px] h-[24px] text-[20px] font-medium leading-[24px]"
              v-html="plate.price"
            ></h1>
          </div>
        </div>
        <div class="mt-[30px] pl-[20px]">
          <div class="flex gap-[10px]">
            <p
              class="w-[59px] h-[19px] text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]"
            >
              Emirate:
            </p>
            <p class="ext-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
              {{ plate.emirate }}
            </p>
          </div>
          <div class="flex gap-[25px] pt-[5px]">
            <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
              Today{{ plate.postedAt }}
            </p>
            <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
              {{ plate.views }} Views
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { usePlateStore } from "../../stores/plateStore";

export default defineComponent({
  setup() {
    const plateStore = usePlateStore();

    // Создаём локальные computed свойства для реактивности
    const plateNumbers = computed(() => plateStore.plateNumbers);

    return {
      plateNumbers,
    };
  },
});
</script>

<style scoped>
.platelist__grid {
  padding-block: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

@media (max-width: 1280px) {
  .platelist__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 1024px) {
  .platelist__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 760px) {
  .platelist__grid {
    grid-template-columns: repeat(1, 1fr);
    margin: auto;
  }
  .plate__card {
    max-width: 100%;
  }
}
</style>
