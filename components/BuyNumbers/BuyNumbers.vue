<template>
    <div class="pl-[60px] pr-[60px] mt-[150px]">
        <h1 class="w-[1320px] h-[200px] text-[100px] font-high leading-[100px] text-left title-2">
            PLATE AND MOBILE NUMBERS IN UAE
        </h1>

        <div class="mt-[100px] containres">
            <div class="w-full h-[1px] bg-[#BFBFBF]"></div>
            <div class="flex gap-[50px] pt-[30px] pb-[30px] items-center flex-wrap">
                <h2 class="w-[400px] h-[36px] text-[30px] font-normal leading-[36px] uppercase">
                    Total plate numbers:
                </h2>
                <p class="w-[70px] h-[36px] text-[30px] font-normal leading-[36px] uppercase text-1">
                    {{ totalPlateNumbers }}
                </p>

                <ButtonBlue class="w-[140px] h-[52px] flex items-center justify-center ml-auto">
                    BUY
                </ButtonBlue>
            </div>

            <div class="w-full h-[1px] bg-[#BFBFBF]"></div>

            <div class="flex gap-[50px] pt-[30px] pb-[30px] items-center flex-wrap">
                <h2 class="w-[400px] h-[36px] text-[30px] font-normal leading-[36px] uppercase">
                    Total mobile numbers:
                </h2>
                <p class="w-[70px] h-[36px] text-[30px] font-normal leading-[36px] uppercase text-1">
                    {{ totalMobileNumbers }}
                </p>

                <ButtonBlue class="w-[140px] h-[52px] flex items-center justify-center ml-auto">
                    BUY
                </ButtonBlue>
            </div>
        </div>
        <div class="w-full h-[1px] bg-[#BFBFBF]"></div>

        <img class="w-full pt-[70px] img-bg" src="../../public/assets/bacround.png" alt="">

        <div class="container-input mt-[150px]">
            <h3 class="w-[1320px] h-[60px] text-[50px] font-normal leading-[60px] text-left title-input mb-[50px]">
                Choose your number
            </h3>
            <div class="flex gap-[20px] items-center flex-wrap">
                <div>
                    <label class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]" for="type">Type:</label>
                    <div class="mt-[10px] flex gap-[10px]">
                        <button class="button-black w-[130px] h-[47px] rounded-[100px] border border-[#000000] font-roboto text-[16px] font-normal leading-[19.2px] text-center">Plate</button>
                        <button class="button-black w-[130px] h-[47px] rounded-[100px] border border-[#000000] font-roboto text-[16px] font-normal leading-[19.2px] text-center">Mobile</button>
                    </div>
                </div>
                <div>
                    <label for="emirate" class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Emirate:</label>
                    <select id="emirate" name="emirate" class="mt-[10px] text-[16px] font-normal leading-[19.2px] text-left block w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]">
                        <option value="city">Dubai</option>
                        <option value="city">Abu Dhabi</option>
                        <option value="city">Ajman</option>
                        <option value="city">Umm Al Quwain</option>
                        <option value="city">Ras Al Khaimah</option>
                        <option value="city">None</option>
                    </select>
                </div>
                <div>
                    <label for="code" class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Code:</label>
                    <select id="code" name="code" class="mt-[10px] text-[16px] font-normal leading-[19.2px] text-left block w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]">
                        <option>AA</option>
                        <option>None</option>
                    </select>
                </div>
                <div>
                    <label for="sort" class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#B3B3B3]">Sort by:</label>
                    <select id="sort" name="sort" class="mt-[10px] text-[16px] font-normal leading-[19.2px] text-left block w-[220px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]">
                        <option>Latest</option>
                    </select>
                </div>
                <ButtonBlue class="w-[310px] h-[52px] flex justify-center items-center font-bold mt-[30px]">
                    Show 1234 numbers
                </ButtonBlue>
            </div>
        </div>
        <div>
            <h3 class="text-[16px] font-normal leading-[19.2px] text-left w-[67px] h-[19px] text-[#BFBFBF] mt-[100px]">
                Featured:
            </h3>
            <div class="flex w-full flex-wrap items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[20px]">
                <CardPlate />
                <CardPlate />
                <CardPlate />
                <CardPlate />
                <CardPlate />
                <CardPlate />
                <CardPlate />
            </div>
            <ButtonBlue class="orange-button mt-[50px] w-[390px] py-[14px] min-w-[1px] border-[3px] font-bold border-[#FF9C00] rounded-[100px] text-[20px] font-bold text-[#FF9C00] hover:bg-[#FF9C00] hover:text-white transition whitespace-nowrap">
                View all Promoted listings
            </ButtonBlue>
        </div>
        <div>
            <h3 class="text-[16px] w-full font-normal leading-[19.2px] text-left w-[67px] h-[19px] text-[#BFBFBF] mt-[100px]">
                Similar numbers:
            </h3>
            <div class="flex w-full flex-wrap items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[20px]">
                <SimilarNumber />
                <SimilarNumberLowPrice />
                <SimilarNumber />
                <SimilarNumberLowPrice />
                <SimilarNumber />
                <SimilarNumberLowPrice />
            </div>
            <ButtonBlue class="w-[428px] mt-[50px] uppercase blue-button">
                View 7508 more plate numbers
            </ButtonBlue>
        </div>
    </div>
</template>

<script setup>
import ButtonBlue from '../Button-blue/ButtonBlue.vue';
import CardPlate from '../CardPlate/CardPlate.vue';
import SimilarNumber from '../SimilarNumbers/SimilarNumber.vue';
import SimilarNumberLowPrice from '../SimilarNumbers/SimilarNumberLowPrice.vue';


const props = defineProps({
  totalMobileNumbers: {
    type: Number,
    default: 7353,
  },
  totalPlateNumbers: {
    type: Number,
    default: 7353,
  },
});
</script>

<style>
/* Ваши стили здесь */

@media (max-width: 324px) {
    .text-1 {
        padding-top: 50px;
    }
}

@media (max-width: 500px) {
    .img-bg {
        display: none;
    }

    .container-input {
        margin-top: 150px;
    }
}

@media (max-width: 920px) {
    .title-2 {
        width: 500px;
        font-size: 50px;
        flex-wrap: wrap;
    }
}

@media (max-width: 480px) {
    .title-2 {
        width: 370px;
        font-size: 50px;
        flex-wrap: wrap;
    }

    .containres {
        margin-top: 350px;
    }

    .blue-button {
        width: 300px;
        font-size: 16px;
    }

    .orange-button {
        width: 300px;
        font-size: 16px;
    }

    .title-input {
        width: 400px;
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 30px;
    }
}

#emirate {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('../../public/assets/Polygon 3.svg');
    background-repeat: no-repeat;
    background-position: right 20px center;
    background-size: 10px;
}

.button-black:active {
    border-color: #BFBFBF;
    color: #BFBFBF;
}

.button-black:hover {
    border-color: #BFBFBF;
    color: #BFBFBF;
}
</style>
