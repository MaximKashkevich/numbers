<template>
  <header class="wrapper__header">
    <div class="row__header">
      <a class="logo" @click="goToLink('/')">
        <img src="../public/assets/New-Logo.webp" alt="Logo" />
      </a>
      <div class="menu__pc">
        <button @click="goToLink('/CatalogNumbers?numberType=plate')">
          Plate Numbers
        </button>
        <button @click="goToLink('/CatalogNumbers?numberType=Mobile')">
          Mobile Numbers
        </button>
        <button @click="goToLink('/GeneralBlockTariff')">
          Subscriptions for dealers
        </button>
        <button @click="goToLink('/Discounts')">Discounts</button>
        <button @click="goToLink('/License')">Number concierge</button>
      </div>
      <div class="menu__mobile" @click="toggleMenu">
        <button><img src="/assets/img/icons/menu.svg" alt="menu" /></button>
      </div>
      <div class="row__actions">
        <ButtonBlue
          :requiresAdapt="true"
          class="py-3 px-5 mr-6"
          @click="goToLink('/GeneralBlockTariff')"
          >Add Listing</ButtonBlue
        >
        <div class="row__actions_inner">
          <button class="button__action" @click="goToLink('/Liked')">
            <img src="/assets/img/icons/saw.svg" alt="view" />
          </button>
          <button class="button__action" @click="goToLink('/Viewed')">
            <img src="/assets/img/icons/fav.svg" alt="favorites" />
          </button>
          <button class="button__action" @click="goToLink('/GeneralEmpty')">
            <img src="/assets/img/icons/profile.svg" alt="general" />
          </button>
        </div>
      </div>
    </div>
    <div v-if="isOpen" class="row__mobile">
      <button @click="goToLink('/CatalogNumbers?numberType=plate')">
        Plate Numbers
      </button>
      <button @click="goToLink('/CatalogNumbers?numberType=Mobile')">
        Mobile Numbers
      </button>
      <button @click="goToLink('/GeneralBlockTariff')">
        Subscriptions for dealers
      </button>
      <button @click="goToLink('/Discounts')">Discounts</button>
      <button @click="goToLink('/License')">Number concierge</button>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToLink = (page) => {
  router.push({
    path: page,
  });
};

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  console.log(123);
};
</script>
<style scoped>
.wrapper__header {
  padding: 20px 20px;
  position: relative;
}

.row__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 144px;
  height: 40px;
}

.menu__pc {
  display: flex;
  gap: 20px;
  font-size: 18px;
  color: #000;
}

.menu__pc button:hover {
  color: #005dca;
}

.menu__mobile {
  display: none;
}

.menu__mobile img {
  width: 32px;
  height: 32px;
}
.menu button:hover {
  color: #005dca;
}

.row__actions {
  display: flex;
  align-items: center;
}

.row__actions_inner {
  display: flex;
  gap: 20px;
}

.button__action {
  cursor: pointer;
}

.button__action:hover img {
  filter: brightness(0) saturate(100%) invert(23%) sepia(86%) saturate(2128%)
    hue-rotate(201deg) brightness(93%) contrast(102%);
}

.row__mobile {
  width: fit-content;
  position: absolute;
  right: 20px;
  display: none;
  z-index: 2;
  background: rgb(250, 250, 250);
  background: linear-gradient(
    180deg,
    rgba(250, 250, 250, 1) 83%,
    rgba(0, 0, 0, 0) 100%
  );
  padding-bottom: 100px;
}

.row__mobile button {
  font-size: 20px;
  width: 100vw;
  text-align: end;
  display: block;
}

@media (max-width: 1280px) {
  .row__header {
    flex-wrap: wrap; /* Разрешаем перенос строк */
  }
  .row__actions {
    margin-top: 10px;
    width: 100%;
    justify-content: space-between;
  }
  .button__action img {
    width: 32px;
    height: 32px;
  }
}

@media (max-width: 1024px) {
  .menu__pc {
    display: none;
  }
  .menu__mobile {
    display: block;
  }
  .row__mobile {
    display: block;
  }
}
</style>
