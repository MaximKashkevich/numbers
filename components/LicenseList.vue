<template>
  <div
    class="flex w-full flex-wrap items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[20px] mt-[50px] "
  >
    <LicenseCard
      title="FREE"
      duration="1 month"
      text1="Plate or phone"
      text2="1 ad for sale"
      text3="No update"
      cost="FREE 1 MONTH"
    />
    <LicenseCard
      title="200 AED"
      duration="5 month"
      text1="Plate or phone"
      text2="Any number of ads"
      text3="Updates every 7 days"
      cost="PAY 5 MONTH"
    />
    <LicenseCard
      title="175 AED"
      duration="1 year"
      text1="Plate and phone"
      text2="Any number of ads"
      text3="Updates every 7 days"
      cost="PAY 1 YEAR"
    />
  </div>
</template>
<script>
import LicenseCard from "./LicenseCards/LicenseCard.vue";
export default {
  components: {
    LicenseCard,
  },
};
</script>
<style></style>
