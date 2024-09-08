<template>
    <div class="  flex-1 min-w-[300px]  max-w-[426px]  h-[300px] rounded-[20px] bg-white border-[2px] border-[#B3B3B3]">
        <img class="mt-[40px] ml-[15px]" src="../public/assets/numbers.svg" alt="">
        <div class="flex items-center mt-[40px] gap-[235px] pl-[20px]">
            <h1 class="w-[99px] h-[24px] text-[20px] font-medium leading-[24px] ">2 000 AED</h1>
            <ButtonLike class="w-[24px] h-[20px] " />
        </div>

        <div class="mt-[30px] pl-[20px]">
            <div class="flex gap-[10px]">
                <p class="w-[59px] h-[19px]  text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
                    Emirate:
                </p>
                <p class="w-[59px] h-[19px]  text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
                    Dubai
                </p>
            </div>

            <div class="flex gap-[25px] pt-[5px]">
                <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
                    Posted Today
                </p>
                <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
                    12 Views
                </p>
            </div>


        </div>
    </div>
</template>

<script>
import ButtonLike from './ButtonLike.vue';
</script>