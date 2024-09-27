<template>
    <NuxtLink to="/PlateNumbers">
        <div class="flex-1 w-full p-4 rounded-[20px] bg-white border-[2px] border-[#FF9C00] flex flex-col justify-between 
                    min-w-[300px] max-w-[426px] md:min-w-[280px] lg:max-w-[380px] xl:max-w-[426px] 
                    sm:w-auto w-full">
            <!-- Статичное изображение -->
            <img :src="imageSrc" class="mt-[25px] px-[20px]" alt="">

            <div class="flex items-center justify-between mt-6">
                <h1 class="text-[18px] md:text-[20px] font-medium leading-[24px]">{{ price }}</h1>

                <!-- Динамическое переключение компонентов и текст рядом с сердечком -->
                <div class="flex items-center gap-[5px]">
                    <p class="text-[14px] md:text-[16px] text-[#BFBFBF] mr-[3px]">{{ likeds }}</p>
                    <component :is="localLiked ? 'HeartRed' : 'ButtonLike'" class="w-[24px] h-[20px]"
                        @click="toggleLike" />
                </div>
            </div>

            <div class="mt-6 flex justify-between">
                <div>
                    <p class="w-full text-[14px] md:text-[16px] font-normal leading-[19.2px] text-[#BFBFBF]">
                        Сollection:
                    </p>
                    <p class="mt-[3px] text-[14px] md:text-[16px]">{{ collections }}</p>
                </div>

                <ButtonPlus />
            </div>

            <div class="mt-6 pb-4">
                <div class="flex gap-[10px]">
                    <p class="text-[14px] md:text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Emirate:</p>
                    <p class="text-[14px] md:text-[16px] text-[#BFBFBF] font-normal leading-[19.2px]">{{ emirate }}</p>
                </div>

                <div class="flex pt-[5px] gap-[10px]">
                    <p class="text-[14px] md:text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">{{ postedAt }}</p>
                    <p class="text-[14px] md:text-[16px] text-[#BFBFBF] font-normal leading-[19.2px]">{{ views }} Views
                    </p>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script>
import ButtonLike from '../ButtonLike.vue';
import HeartRed from '../HeartRed.vue';


export default {
    components: {
        ButtonLike,
        HeartRed,
    },
    props: {
        imageSrc: {
            type: String,
            default: '/assets/Numberpalet.png'
        },
        price: {
            type: String,
            required: true,
            default: '20 000 AED',
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
        likeds: {
            type: String,
            default: '123',
        },
        collections: {
            type: String,
            default: 'None',
        }
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
};
</script>

<style>
@media (max-width: 420px) {
    .flex-1 {
        max-width: 80%;
        /* Уменьшение ширины карточки */
        min-width: 250px;
        /* Минимальная ширина */
        margin: 0 auto;
        /* Центрирование */
    }
}
</style>