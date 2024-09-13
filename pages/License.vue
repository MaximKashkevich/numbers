<template>
    <div class="px-4 sm:px-6 lg:px-[60px]">
        <!-- Навигация -->
        <nav class="mb-[30px] mt-[30px] navigation">
            <ul class="flex gap-[5px]">
                <li>
                    <a href="" class="text-[#005DCA] cursor-pointer transition "> Home /</a>
                </li>
                <li>
                    <a href="" class="text-[#BFBFBF] hover:text-[#005DCA] cursor-pointer transition "> License price</a>
                </li>
            </ul>
        </nav>

        <!-- Заголовок и текст -->
        <div>
            <h1 class="w-full sm:w-[600px] lg:w-[900px] text-[30px] sm:text-[40px] lg:text-[50px] font-medium leading-tight text-left uppercase">
                To publish an ad you first need to license to the service.
            </h1>
            <p class="w-full sm:w-[400px] lg:w-[500px] text-[14px] sm:text-[16px] font-normal leading-[19px] text-left pt-[20px] sm:pt-[30px]">
                Once you pay the rate you want, you can add listings right away.
            </p>
        </div>

        <!-- Карточки -->
        <div class="flex w-full flex-wrap justify-between gap-[20px] mt-[40px] lg:mt-[70px]">
    <CardLicenses />
    <CardLicenses />
    <CardLicenses />
</div>

    </div>
</template>

<script>
import CardLicenses from '../components/CardLicenses/CardLicenses.vue';
</script>
