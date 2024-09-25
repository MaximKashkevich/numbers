<template>
    <NuxtLink to="/PlateNumbers">
        <div class="flex-1 w-full p-4 rounded-[20px] bg-white border-[1px] border-[#B3B3B3] flex flex-col justify-between 
                    min-w-[300px] max-w-[426px] md:min-w-[280px] lg:max-w-[380px] xl:max-w-[426px] 
                    sm:w-auto w-full">
            <!-- Статичное изображение -->
            <svg width="386" height="93" class="mx-auto  w-full h-auto max-h-[200px] object-contain"
                viewBox="0 0 386 93" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="386" height="93" rx="5" fill="url(#pattern0_2107_1460)" />
                <defs>
                    <pattern id="pattern0_2107_1460" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_2107_1460"
                            transform="matrix(0.00162758 0 0 0.00675534 -0.00259067 0.0473921)" />
                    </pattern>
                    <image id="image0_2107_1460" width="616" height="134"
                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmgAAACGCAYAAABpPnaSAAAAAXNSR0IArs4c6QAAIABJREFUeF7tfWmUFsXZdo9xxSUYUWRghtnYZB0QRBmZAWQbBgU0LtFoEvV4PJKTvD+TX9/3531/fskJnByPC4nGuCvIMIAgm8CwC4igzPKMDMwoGDHRoIaE/rz6tcaHZ6q6q7ur+unBq855zihdVV11VXX11fda4LAQASJABIgAESACRIAIpAqBglSNhoMhAkSACBABIkAEiAARcEjQuAmIABEgAkSACBABIpAyBEjQUrYgHA4RIAJEgAgQASJABEjQuAeIABEgAkSACBABIpAyBEjQUrYgHA4RIAJEgAgQASJABEjQuAeIABEgAkSACBABIpAyBEjQUrYgHA4RIAJEgAgQASJABEjQuAeIABEgAkSACBABIpAyBEjQUrYgHA4RIAJEgAgQASJABEjQuAeIABEgAkSACBABIpAyBEjQUrYgHA4RIAJEgAgQASJABEjQuAeIABEgAkSACBABIpAyBEjQUrYgHA4RIAJEgAgQASJABEjQuAeIABEgAkSACBABIpAyBEjQUrYgHA4RIAJEgAgQASJABEjQuAeIABEgAkSACBABIpAyBEjQUrYgHA4RIAJEgAgQASJABEjQuAeIABEgAkSACBABIpAyBEjQUrYgHA4RIAJEgAgQASJABEjQuAeIABEgAkSACBABIpAyBEjQUrYgHA4RIAJEgAgQASJABFJF0Nrb2y/5+uuvT3311VfO119/7Zw+fdr597//7biu6/0KCgq6fueff76D3wUXXOD9veiii46cd955o0tLSz/jshIBIkAEiAARIAJEoCcjkHeC1tzc7P797393/vWvf3lk7MyZM5HxBIE777zznB/84AfeD+TtkksucS699NJBRUVFzZE7ZkMiQASIABEgAkSACCSIQN4IWktLy4fHjx8vBjFLooC49erVC2QN0rYrKWlLAnXegwgQASJABIgAEYiCQOIEzXXdgj179pz55z//6aktRYH0C2QNqk38hSTtP//5T5dqEwRLSMcgGbvooos81SbaZfejAwLaoA8hYevVqxcJmw5wrEMEiAARIAJEgAgkgkCiBA02Zh0dHZ6NGcgXbMxOnTrlQMUJwoZ/A3nSKSBwIGwXXnihR9a+VWV6pCtbzanTF+qA7P3whz+E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ZT+StGozd85+qk4b7vPZ95fFBjT1Ba67tmHqybDK50syaOwIO7No0aLTufXmzZtn3AQiaCy617knzkbKLxyP7eczaM1Uqk4TZ1rqCVq2HRqkZwhyCscBvJThcQljbBwOeNllFyFNg4Tskksueal///7W1F1BC8jr4RGA6rOjo8NTfYofAg9jraG2xg9ku7CwcEt5eXlV+DvYaQHjd6jlv/zyS2+f4gcJm1Cfi/RfIGZhPD7tjNZxkPsW2TWAMcaMH6TV8E7Gs4Ofbo5bW2Nkv0SACBCB7yMCqSdora2t3gtP2J7hJS3yV2Z774l/g0E2Xi70svw+bmfOmQgQASJABIjAuYFA6glae3v7JR0dHadUdj5QXYov/QEDBpxXUFDgnhtLw1kQASJABIgAESAC31cEUk/QsDBQGwn7HhGTDJIyqF5KS0t7xBy+rxuM8yYCRIAIEAEiQATCI9AjyA2kaJ999tkpkQz98ssvZxql8GvNFkSACBABIkAEiEAPQaBHELQegiWHSQSIABEgAkSACBABIwiQoBmBkZ0QASJABIgAESACRMAcAiRo5rBkT0SACBABIkAEiAARMIIACZoRGNkJESACRIAIEAEiQATMIUCCZg5L9kQEiAARIAJEgAgQASMIkKAZgZGdEAEiQASIABEgAkTAHAIkaOawZE9EgAgQASJABIgAETCCAAmaERjZCREgAkSACBABIkAEzCFAgmYOS/ZEBIgAESACRIAIEAEjCJCgGYGRnRABIkAEiAARIAJEwBwCJGjmsGRPRIAIEAEiQASIABEwggAJmhEY2QkRIAJEgAgQASJABMwhQIJmDkv2RASIABEgAkSACBABIwiQoBmBkZ0QASJABIgAESACRMAcAiRo5rBkT0SACBABIkAEiAARMIIACZoRGNkJESACRIAIEAEiQATMIUCCZg5L9kQEiAARIAJEgAgQASMIkKAZgZGdEAEiQASIABEgAkTAHAIkaOawZE9EgAgQASJABIgAETCCAAmaERjZCREgAkSACBABIkAEzCFAgmYOS/ZEBIgAESACRIAIEAEjCJCgGYGRnRABIkAEiAARIAJEwBwCJGjmsGRPRIAIEAEiQASIABEwggAJmhEY2QkRIAJEgAgQASJABMwhQIJmDkv2RASIABEgAkSACBABIwiQoBmBkZ0QASJABIgAESACRMAcAiRo5rBkT0SACBABIkAEiAARMIIACZoRGNkJESACRIAIEAEiQATMIUCCZg5L9kQEiAARIAJEgAgQASMIkKAZgZGdEAEiQASIABEgAkTAHAIkaOawZE9EgAgQASJABIgAETCCAAmaERjZCREgAkSACBABIkAEzCFAgmYOS/ZEBIgAESACRIAIEAEjCJCgGYGRnRABIkAEiAARIAJEwBwC/x8inIxnX13OKgAAAABJRU5ErkJggg==" />
                </defs>
            </svg>

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


            </div>

            <div class="mt-6 pb-4 flex justify-between items-center">
                <div>
                    <div class="flex gap-[10px]">
                        <p class="text-[14px] md:text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Emirate:</p>
                        <p class="text-[14px] md:text-[16px] text-[#BFBFBF] font-normal leading-[19.2px]">{{ emirate }}
                        </p>
                    </div>

                    <div class="flex pt-[5px] gap-[10px]">
                        <p class="text-[14px] md:text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">{{ postedAt }}
                        </p>
                        <p class="text-[14px] md:text-[16px] text-[#BFBFBF] font-normal leading-[19.2px]">{{ views }}
                            Views
                        </p>
                    </div>
                </div>

                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.75" y="0.75" width="28.5" height="28.5" rx="14.25" stroke="#EA0038" stroke-width="1.5" />
                    <rect x="3.68555" y="24.8984" width="30" height="2" transform="rotate(-45 3.68555 24.8984)"
                        fill="#EA0038" />
                </svg>


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