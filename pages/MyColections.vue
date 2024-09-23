<template>
    <div>
        <nav class="px-[20px] md:px-[60px] mt-[30px]">
            <NuxtLink to="/BuyNumbers" class="text-blue-500 cursor-pointer">
                Home /
            </NuxtLink>
            <span class="text-[#BFBFBF]"> My Dashboard</span>
        </nav>

        <div class="flex flex-col lg:flex-row px-[20px] md:px-[60px] justify-center gap-[30px] md:gap-[50px] mt-[30px] flex-wrap big-container">
            <div class="w-full md:w-[300px] lg:w-[500px]">
                <SideBar class="sidebar" />
            </div>

            <div class="flex-1">
                <h1 class="w-full md:w-[872px] text-[50px] font-medium leading-[50px] text-left uppercase">
                    My collections
                </h1>
                <div class="w-full white-conatiner  max-w-[870px] h-[345px] bg-[#FFFFFF] rounded-[20px] mt-[50px] flex justify-center">
                    <div class="flex flex-col items-center justify-center gap-[20px] p-6">
                        <h2 class="w-full max-w-[650px] font-medium text-[35px] text-center">
                            {{ displayText }}
                        </h2>
                        <button @click="openModal">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" class="img" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="98" height="98" rx="49" stroke="#005DCA" stroke-width="2" />
                                <path d="M67.0566 47.7783V51.6406H32.9453V47.7783H67.0566ZM51.915 31.8848V68.1152H47.8135V31.8848H51.915Z" fill="#005DCA" />
                            </svg>
                        </button>

                        <ModalAddColection v-if="isVisible" @close="closeModal" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../components/general/SideBar.vue';
import ModalAddColection from '../components/ModalAddColection.vue';

export default {
    components: {
        SideBar,
        ModalAddColection,
    },
    data() {
        return {
            activeButton: null,
            isVisible: false,
        };
    },
    computed: {
        displayText() {
            return window.innerWidth <= 574
                ? 'Create new collections'
                : "You don't have any collections yet. To add a collection, click on + and select the numbers you want to add.";
        },
    },
    methods: {
        openModal() {
            this.isVisible = true; // Показываем модальное окно
        },
        closeModal() {
            this.isVisible = false; // Скрываем модальное окно
        },
    },
};
</script>

<style scoped>
.checkbox {
    appearance: none;
    position: relative;
    background: #fff;
}
.checkbox:checked::before {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    transform: translate(-50%, -90%);
    color: blue;
}
.checkbox:not(:checked)::before {
    content: none;
}
.input {
    width: 210px;
}
@media(max-width: 575px){
.white-conatiner{
    height: 650px;
} 
}
</style>
