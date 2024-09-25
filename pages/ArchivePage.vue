<template>
    <div>
        <nav class="px-[20px] md:px-[60px] mt-[30px]">
            <NuxtLink to="/BuyNumbers" class="text-blue-500 cursor-pointer">
                Home /
            </NuxtLink>
          
            <NuxtLink to="/GeneralEmpty" class="text-blue-500 cursor-pointer">
                My Dashboard / 
            </NuxtLink>
            <span class="text-[#BFBFBF]"> Archive</span>
        </nav>

        <div
            class="flex flex-col lg:flex-row px-[20px] md:px-[60px] justify-center gap-[30px] md:gap-[50px] mt-[30px] flex-wrap big-container">
            <div class="w-full md:w-[300px] lg:w-[500px]">
                <SideBar class="sidebar " />
            </div>

            <div class="flex-1 ">
               
                   <h1 class="w-full md:w-[872px] text-[50px] font-medium leading-[50px] text-left uppercase mb-[65px] title-text">
                    Archive
                </h1>
                <div class="w-full h-[52px] mt-[65px]">
                    <div class="flex items-center flex-wrap justify-between mt-[65px] gap-[20px] ">
                        <p class="font-normal text-[20px] text-[#BFBFBF]">Subscription up to: <span class="text-[#000000] ml-[20px]">Create more.</span></p>
                        <ButtonBlue class="w-[272px] h-[52px] flex justify-center items-center px-[40px] button--blue">
                            Extend subscription
                        </ButtonBlue>

                    </div>  
                
               
                    <div class="flex gap-[50px] items-center mt-[70px] ">
                        <h2 class="w-[352px] h-[42px] font-medium text-[35px]">
                            Archive plate numbers
                        </h2>
                    </div>



                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-[215px] container-order  w-full">
                    <ArchivePlateBlock />
                    <ArchivePlate />
                    <ArchiveSimilarBlock />
                    <ArchiveSimilarBlock />
                    <ArchiveSimilar />
                    
                </div>
                <div class="flex gap-[50px] items-center mt-[70px]">
                    <h2 class="w-[381px] h-[42px] font-medium text-[35px]">
                        Archive mobile numbers
                        </h2>
                    </div>


                    <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-[100px] container-order  w-full">
                    <ArchiveMobile />
                    <ArchiveMobileBlock />
                    <Card2 />
                    
           

            </div>
                </div>
                


        </div>
    </div>
</template>

<script>
import SideBar from '../components/general/SideBar.vue';
import MiniButton from '../components/MiniButton/MiniButton.vue';
import ButtonBlue from '../components/Button-blue/ButtonBlue.vue';
import ArchiveMobile from '../components/ArchiveButtons/ArchiveMobile.vue';
import ArchiveMobileBlock from '../components/ArchiveButtons/ArchiveMobileBlock.vue';
import ArchivePlate from '../components/ArchiveButtons/ArchivePlate.vue';
import ArchivePlateBlock from '../components/ArchiveButtons/ArchivePlateBlock.vue';
import ArchiveSimilar from '../components/ArchiveButtons/ArchiveSimilar.vue';
import ArchiveSimilarBlock from '../components/ArchiveButtons/ArchiveSimilarBlock.vue';
export default {
    components: {
        SideBar,
        MiniButton,
        ButtonBlue,
        ArchiveMobileBlock,
        ArchiveMobile,
        ArchivePlateBlock,
        ArchivePlate,
        ArchiveSimilarBlock,
        ArchiveSimilar,

    },
};
import { ref } from 'vue';

const collectionName = ref('');
</script>
<style>
.input--2 {
    width: 384px;
    height: 52px;
    background: #FAFAFA;
    font-size: 35px;
    border: none;
    outline: none;
    color: #000000;
}

input::placeholder {
    font-size: 42px;
    color: #BFBFBF;
}


input::-webkit-input-placeholder {
    color: #BFBFBF;
    font-size: 42px;
}


input::-moz-placeholder {
    color: #BFBFBF;
    font-size: 42px;
}


input:-ms-input-placeholder {
    color: #BFBFBF;
    font-size: 42px;
}


input::-ms-input-placeholder {
    color: #BFBFBF;
    font-size: 42px;
}
.img-2{
    width: 100px;
    height: 100px;
}
@media(max-width: 694px){
    .container-input{
      
       margin-top: -110px;
    }
}
</style>