<template>
  <div
    class="flex flex-col gap-[30px] min-w-[250px] w-[320px] md:w-[426.67px] h-[250px] md:h-[310px] pt-[20px] md:pt-[30px] px-[15px] md:px-[20px] rounded-[20px] border-[#BFBFBF] border-[2px]"
  >
    <div>
      <h1
        class="w-full h-[40px] md:h-[50px] text-[30px] md:text-[50px] font-medium leading-[30px] md:leading-[50px] whitespace-nowrap"
      >
        {{ title }}
      </h1>
      <ul class="list-none mt-[20px] md:mt-[30px]">
        <li class="flex items-center mb-2">
          <span
            class="inline-block w-[3px] md:w-[4px] h-[3px] md:h-[4px] bg-black rounded-full mr-2"
          ></span>
          <p
            class="w-[280px] md:w-[386.67px] h-[15px] md:h-[19px] text-[14px] md:text-[16px] font-medium leading-[18px] md:leading-[19.2px] text-left"
          >
            {{ text1 }}
          </p>
        </li>
        <li class="flex items-center mb-2">
          <span
            class="inline-block w-[3px] md:w-[4px] h-[3px] md:h-[4px] bg-black rounded-full mr-2"
          ></span>
          <p
            class="w-[280px] md:w-[386.67px] h-[15px] md:h-[19px] text-[14px] md:text-[16px] font-medium leading-[18px] md:leading-[19.2px] text-left"
          >
            {{ text2 }}
          </p>
        </li>
        <li class="flex items-center mb-2">
          <span
            class="inline-block w-[3px] md:w-[4px] h-[3px] md:h-[4px] bg-black rounded-full mr-2"
          ></span>
          <p
            class="w-[280px] md:w-[386.67px] h-[15px] md:h-[19px] text-[14px] md:text-[16px] font-medium leading-[18px] md:leading-[19.2px] text-left"
          >
            {{ text3 }}
          </p>
        </li>
      </ul>

      <div>
        <ButtonBlue
          class="max-w-[280px] w-[200px] md:w-[210px] h-[40px] md:h-[52px] mt-[30px] md:mt-[40px] flex justify-center items-center"
        >
          {{ cost }}
        </ButtonBlue>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "title error ",
    },
    text1: {
      type: String,
      default: "Plate or phone",
    },
    text2: {
      type: String,
      default: "Any number of ads",
    },
    text3: {
      type: String,
      default: "Updates every 7 days",
    },
    cost: {
      type: String,
      default: "FREE 1 MONTH",
    },
  },
});
</script>
