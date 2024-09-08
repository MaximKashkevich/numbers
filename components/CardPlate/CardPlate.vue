<template>
    <div class="flex-1 min-w-[300px] max-w-[426px] h-[300px] rounded-[20px] bg-white border-[3px] border-[#FF9C00]">
        <img class="mt-[40px] px-[20px]" src="../../public/assets/Numberpalet.png" alt="">
        <div class="flex items-center mt-[40px] gap-[235px] pl-[20px]">
            <div class="w-[110px]">
               <h1 class="min-w-[110px] h-[24px] text-[20px] font-medium leading-[24px]">20 000 AED</h1>   
            </div>
          

            <!-- Динамическое переключение компонентов -->
            <component :is="liked ? 'HeartRed' : 'ButtonLike'" class="w-[24px] h-[20px]" @click="toggleLike" />
        </div>

        <div class="mt-[30px] pl-[20px]">
            <div class="flex gap-[10px]">
                <p class="w-[59px] h-[19px] text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
                    Emirate:
                </p>
                <p class="w-[59px] h-[19px] text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
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
import ButtonLike from '../ButtonLike.vue';
import HeartRed from '../HeartRed.vue';

export default {
    components: {
        ButtonLike,
        HeartRed,
    },
    data() {
        return {
            liked: false, // Состояние для управления кнопкой
        };
    },
    methods: {
        toggleLike() {
            this.liked = !this.liked; // Переключение состояния "лайка"
        },
    },
};
</script>
