<template>
  <header class="wrapper__header container__main min-w-[90%] px-8 md:px-10 lg:px-12 xl:px-16">
    <div class="row__header">
      <a class="logo" @click="goToLink('/')">
        <img src="../public/assets/New-Logo.webp" alt="Logo" />
      </a>

      <div class="menu__pc">
        <button @click="goToLink('/CatalogNumbers?numberType=plate')">
          Plate Numbers
        </button>

        <button @click="goToLink('/BuyNumbers2')">
          Mobile Numbers
        </button>

        <button @click="goToLink('/License')">
          Subscriptions for dealers
        </button>

        <button @click="goToLink('/Discounts')">Discounts</button>

        <button @click="goToLink('/License')">Number concierge</button>
      </div>

      <button :class="[isOpen ? 'menu__mobile close' : 'menu__mobile']" @click="toggleMenu">
        <div class="menu__shape"></div>

        <div class="menu__shape"></div>

        <div class="menu__shape"></div>
      </button>

      <div class="row__actions">
        <ButtonBlue :requiresAdapt="true" class="py-3 px-5 mr-6" @click="goToLink('/GeneralBlockTariff')">Add Listing
        </ButtonBlue>
        <div class="row__actions_inner">
          <button class="button__action" @click="goToLink('/Viewed')">
            <img src="/assets/img/icons/saw.svg" alt="view" />
          </button>

          <button class="button__action" @click="goToLink('/Liked')">
            <img src="/assets/img/icons/fav.svg" alt="favorites" />
          </button>

          <button class="button__action" @click="handleClick">
            <img src="/assets/img/icons/profile.svg" alt="general" />
          </button>
        </div>
      </div>
    </div>
    <div :class="[isOpen ? 'row__mobile' : 'row__mobile_close']">
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


const goToLink = (page: string) => {
  router.push({
    path: page,
  });
};

const handleClick = () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    router.push('/GeneralEmpty');
  } else {
    router.push('/login');
  }
};



const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  console.log(123);
};
</script>
<style scoped>
.wrapper__header {
  padding-top: 20px;
  padding-bottom: 20px;
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
  flex-direction: column;
  justify-content: space-between;
  width: 32px;
  height: 32px;
}

.menu button:hover {
  color: #005dca;
}

.menu__shape {
  width: 30px;
  height: 3px;
  background-color: #000;
  border-radius: 6px;
}

.menu__mobile .menu__shape {
  transition: transform 0.4s, opacity 0.4s;
}

.menu__mobile.close :nth-child(1) {
  transform: rotate(45deg) translateY(15px) translateX(10px);
}

.menu__mobile.close :nth-child(2) {
  opacity: 0;
}

.menu__mobile.close :nth-child(3) {
  transform: rotate(-45deg) translateY(-10px) translateX(5px);
}

.row__actions {
  display: flex;
  padding-right: 3px;
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
  filter: brightness(0) saturate(100%) invert(23%) sepia(86%) saturate(2128%) hue-rotate(201deg) brightness(93%) contrast(102%);
}

.row__mobile {
  position: absolute;
  right: 0;
  left: 0;
  padding-right: 20px;
  z-index: 2;
  transition: opacity 0.5s;
  opacity: 1;
  flex-direction: column;
  align-items: end;
  background: rgb(250, 250, 250);
  background: linear-gradient(180deg,
      rgba(250, 250, 250, 1) 83%,
      rgba(0, 0, 0, 0) 100%);
  padding-bottom: 70px;
}

.row__mobile_close {
  position: absolute;
  opacity: 0;
  transition: opacity 0s;
  padding-bottom: 70px;
}

.row__mobile button {
  font-size: 20px;
  width: fit-content;
  text-align: end;
  display: block;
}

@media (max-width: 1280px) {
  .row__header {
    flex-wrap: wrap;
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
    display: flex;
  }

  .row__mobile {
    display: flex;
  }

  .menu__mobile {
    display: flex;
  }
}
</style>
