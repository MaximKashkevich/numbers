<template>
    <Header />
    <nav class="mb-[30px] mt-[30px]">
        <ul class="flex gap-[5px] pl-[100px]">
            <li>
                <a href="#" class="hover:text-[#005DCA] transition cursor-default">Home /</a>
            </li>
            <li>
                <a href="#" class="hover:text-[#005DCA] transition cursor-default">Plate numbers /</a>
            </li>
            <li>
                <a href="#" class="hover:text-[#005DCA] transition cursor-default">Dubai plate number for sale: AA
                    14611</a>
            </li>
        </ul>
    </nav>

    <div class="flex justify-center pt-[30px]">
        <div
            class="flex flex-wrap justify-between px-[30px] md: gap-[80px] lg:gap-[250px] min-w-[200px]  max-w-[1900px] sm:justify-center   ">
            <!-- Левая часть -->
            <div class="flex-1 min-w-[250px] max-w-[350px]  ">
                <h1 class="  font-medium text-[35px] leading-[42px] mb-[10px]">
                    Du mobile number for sale
                </h1>
                <p class="text-[12px] font-normal leading-[14.4px] opacity-30">
                    ID: 65131
                </p>
                <h2 class="font-medium text-[35px] mt-[50px] mb-[70px]">
                    20 000 AED
                </h2>
                <p class="text-[#B3B3B3] text-[16px] font-normal leading-[19.2px] mb-[10px]">
                    Description:
                </p>
                <p class="text-[16px] font-normal leading-[20px] mb-[70px]">
                    ETISALAT VIP Prepaid Fancy Mobile number For Sale. Call or WhatsApp 055-4400750.
                </p>

                <a href="#" class="text-[#005DCA] text-[20px] font-bold leading-[24px]">
                    See full collection
                </a>
            </div>

            <!-- Центральная часть -->
            <div class="flex-1  min-w-[700px]  h-[470px] rounded-[20px] bg-white border-[2px] border-[#B3B3B3]">
                <div class="flex justify-between w-full p-[30px]">
                    <ButtonShare />
                    <ButtonLike />
                </div>

                <div class="flex flex-col items-center justify-center h-full ">
                    <div class="flex items-center justify-center" id="top">
                        <img src="../public/assets/image.svg" alt="">

                    </div>
                    <div id="bottom" class="flex justify-center gap-2 ">
                        <div class="pagination-circle w-[8px] h-[8px] border-[#B3B3B3] bg-black rounded-full"></div>
                        <div class="pagination-circle w-[8px] h-[8px] bg-[#B3B3B3] rounded-full"></div>
                        <div class="pagination-circle w-[8px] h-[8px] bg-[#B3B3B3] rounded-full"></div>
                        <div class="pagination-circle w-[8px] h-[8px] bg-[#B3B3B3] rounded-full"></div>
                    </div>
                </div>


            </div>

            <!-- Правая часть -->
            <div class="flex-1 max-w-[350px]  ">

                <div class="flex items-center space-x-2 ">
                    <img src="../public/assets/avatar.svg" alt="" class="w-10 h-10 rounded-full">
                    <div>
                        <h2 class="text-[35px] font-medium leading-[42px]">
                            Suroor
                        </h2>
                        <p class="text-[#B3B3B3] text-[16px] font-normal leading-[19.2px]">
                            Online
                        </p>
                    </div>
                    <img src="../public/assets/iconamoon_attention-circle-light.svg" alt="">
                </div>

                <div class="flex gap-[25px] mt-[30px] ">
                    <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
                        Posted Today
                    </p>
                    <p class="text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">
                        12 Views
                    </p>
                </div>



                <div class="w-[212] mt-[30px] ">
                    <button
                        class="w-full w-[315px] h-[54px] border-2 font-medium border-[#000] rounded-[100px] text-[20px] font-bold text-[#000] hover:bg-white hover:text-black transition flex items-center justify-center space-x-2">
                        Show number
                        <img src="../public/assets/phone.svg" alt="" class="pl-[30px]">
                    </button>

                    <ButtonBlue class="w-full w-[315px] h-[54px] flex items-center justify-center mt-[212px]">
                        Buy as NFT
                    </ButtonBlue>
                </div>
            </div>
        </div>
    </div>
<div class="mt-[150px]">
    <div class="pl-[100px]">
    <div class="flex  w-[1320px] items-center">
        <h3 class="w-[376px] h-[60px] text-[50px] font-normal leading-[60px] text-left">
            Similar numbers:
        </h3>
        <div class="flex-grow pr-[100px] "></div> 
        <div class="flex gap-[30px] mt-[5px]">
            <LeftArrow class="w-[50px]" />
            <RightArrow class="w-[50px]" />
        </div>
    </div>
</div>
<div class="flex  justify-center items-center mt-[50px] ">
   <div class="w-[1320px] h-[410px] flex  gap-[20px]">
    <Card/>
    <Card/>
    <Card/>
    
   
</div> 
</div>
</div>
    

<Footer/>
</template>

<script>
import ButtonShare from './ButtonShare.vue';
import ButtonLike from './ButtonLike.vue';
import ButtonBlue from './Button-blue/ButtonBlue.vue';
import RightArrow from './RightArrow.vue';
import LeftArrow from './LeftArrow.vue';
import  Card  from './Card.vue';
import  Header  from './Header.vue';
import  Footer  from './Footer.vue';
</script>

<style>
.active {
    background-color: #000;
}

#bottom {
    display: flex;
    column-gap: 25px;
    justify-content: center;
    margin-top: 125px;
    gap: 8px;
}
</style>
