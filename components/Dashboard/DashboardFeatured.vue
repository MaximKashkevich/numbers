<template>
  <section class="py-[70px]">
    <h2 class="leading-[42px] text-[35px] font-medium mb-[30px] textDash">My featured numbers:</h2>
    <nav
      class="border-[3px] border-orange-500 bg-[#FFFFFF] rounded-[20px] p-[16px] md:p-[50px] hover:shadow-2xl hover:shadow-orange-100 transition"
    >
      <p class="text-[clamp(12px,7vw,35px)] mt-[20px] font-medium text-dash">
        You don’t have any featured number listings yet :(
      </p>
      <ButtonBlue
        @click="() => {}"
        class="w-[100%] h-fit lg:w-[382px] justify-center flex items-center mx-auto mt-[50px]"
      >
        <h4 class="text-[clamp(7px,4vw,22px)]">Create and promote an ad</h4>
      </ButtonBlue>
    </nav>
  </section>
</template>
