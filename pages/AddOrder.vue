<template>
  <div>
    <nav class="px-[20px] md:px-[60px] mt-[30px]">
      <NuxtLink to="/BuyNumbers" class="text-blue-500 cursor-pointer">
        Home /
      </NuxtLink>
      <span class="text-[#BFBFBF]"> My Dashboard</span>
    </nav>

    <div
      class="flex flex-col lg:flex-row px-[20px] md:px-[60px] justify-center gap-[30px] md:gap-[50px] mt-[30px] flex-wrap big-container">
      <div class="w-full md:w-[300px] lg:w-[500px]">
        <SideBar class="sidebar" />
      </div>

      <div class="flex-1">
        <h1 class="w-full md:w-[872px] text-[50px] font-medium leading-[50px] text-left uppercase">
          Add purchase orders
        </h1>
        <div>
          <div>
            <div class="flex flex-col md:flex-row gap-[20px] mt-[50px] mb-[70px]">
              <button @click="setActive('plate')" :class="getButtonClass('plate')"
                class="w-full max-w-[426px] h-[52px] px-[50px] py-[14px] gap-[20px] rounded-[100px]  font-roboto text-[20px] font-bold leading-[24px] uppercase flex justify-center items-center transition-all duration-300 border-[2px] border-[#000000]">
                plate number
              </button>
              <button @click="setActive('phone')" :class="getButtonClass('phone')"
                class="w-full max-w-[426px] h-[52px] px-[50px] py-[14px] gap-[20px] rounded-[100px] font-roboto text-[20px] font-bold leading-[24px] uppercase flex justify-center items-center transition-all duration-300 border-[2px] border-[#000000]">
                phone number
              </button>
            </div>
            <form action="">
              <fieldset>
                <div class="flex flex-col md:flex-row gap-[20px]">
                  <div class="">
                    <label for="emirate" class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#000000]">
                      Emirate:
                    </label>
                    <select id="emirate" name="emirate" :class="selectClasses" :disabled="!isCheckboxChecked"
                      class="border-[#000000]">
                      <option value="city">Dubai</option>
                      <option value="city">Abu Dhabi</option>
                      <option value="city">Ajman</option>
                      <option value="city">Umm Al Quwain</option>
                      <option value="city">Ras Al Khaimah</option>
                      <option value="city">None</option>
                    </select>
                    <div class="mt-[15px] flex gap-[10px]">
                      <input type="checkbox" id="custom-checkbox-1" v-model="isCheckboxChecked"
                        class="w-[20px] h-[20px] rounded-[3px] border-[1px] border-[#BFBFBF] checkbox">
                      <label for="custom-checkbox-1" class="relative flex items-center gap-[10px]">
                        Enable selection
                      </label>
                    </div>
                  </div>
                  <div class="w-full">
                    <label for="code"
                      class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#000000]">Code:</label>
                    <select id="code" name="code" :class="selectClasses2" :disabled="!isCheckboxChecked2"
                      class="border-[#000000]">
                      <option>AA</option>
                      <option>None</option>
                    </select>
                    <div class="mt-[15px] flex gap-[10px]">
                      <input type="checkbox" id="custom-checkbox-2" v-model="isCheckboxChecked2"
                        class="w-[20px] h-[20px] rounded-[3px] border-[1px] border-[#BFBFBF] checkbox">
                      <label for="custom-checkbox-2" class="relative flex items-center gap-[10px]">
                        Enable selection
                      </label>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row gap-[20px] mt-[30px] mb-[30px]">
                  <div class="">
                    <label for="sort"
                      class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#000000]">Design:</label>
                    <select id="sort" name="sort"
                      class="mt-[5px] text-[16px] font-normal leading-[19.2px] text-left block w-full md:w-[430px] bg-[#FAFAFA] border border-[#BFBFBF] rounded-[25px] py-[15px] px-[20px]">
                      <option>Latest</option>
                    </select>
                  </div>
                  <div class="w-full">
                    <label for="price"
                      class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#000000]">Price:</label>
                    <input type="text" :class="selectClasses3"
                      class="w-full sm:w-[430px] h-[50px] mt-[5px] rounded-full border block border-[#BFBFBF] pl-4 text-lg text-[#BFBFBF] bg-[#FAFAFA]">
                    <div class="mt-[15px] flex gap-[10px]">
                      <input type="checkbox" id="custom-checkbox-3" v-model="isCheckboxChecked3"
                        class="w-[20px] h-[20px] rounded-[3px] border-[1px] border-[#BFBFBF] checkbox border-[#000000]">
                      <label for="custom-checkbox-3" class="relative flex items-center gap-[10px]">
                        Enable selection
                      </label>
                    </div>
                  </div>
                </div>
                <label for="" class="w-full md:w-[872px] text-[16px] font-normal leading-[19.2px]">Number of
                  digits:</label>
                <div class="flex flex-wrap gap-[10px] mt-[10px]">
                  <MiniButton>1</MiniButton>
                  <MiniButton>2</MiniButton>
                  <MiniButton>3</MiniButton>
                  <MiniButton>4</MiniButton>
                  <MiniButton>5</MiniButton>
                  <button class="w-full sm:w-[410px] h-[50px] rounded-[100px] border-[1px] border-[#BFBFBF]">Any number
                    of digits</button>
                </div>
                <div class="mt-[30px]">
                  <label for=""
                    class="w-ful flex flex-box md:w-[872px] text-[14px] font-normal leading-[19.2px]">Description:</label>
                  <textarea maxlength="500"
                    class="w-full md:w-[872px] h-[200px] rounded-[10px] border-[1px] mt-[5px] text-[#BFBFBF] placeholder:text-[#BFBFBF] pl-[20px] pt-[15px] placeholder:left-[10px] border-[#BFBFBF] bg-[#FAFAFA]"
                    placeholder="Write something important that the buyer needs to know"></textarea>

                  <p class="w-full md:w-[227px] text-[12px] font-normal leading-[14.4px] text-[#BFBFBF] mt-[5px]">
                    500 Symbols remaining for the description</p>
                </div>
                <div class="mt-[30px]">
                  <label for="" class="w-full flex flex-box md:w-[872px]">Mobile number:</label>
                  <input type="number"
                    class="w-full md:w-[872px] h-[50px] rounded-[50px] pl-[30px] border-[1px] border-[#BFBFBF] bg-[#FAFAFA] text-[16px] font-normal leading-[19.2px] text-left">
                </div>
                <ButtonBlue class="flex justify-center items-center w-full md:w-[263px] h-[52px] mt-[70px]">
                  Place an order
                </ButtonBlue>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../components/general/SideBar.vue';
import MiniButton from '../components/MiniButton/MiniButton.vue';
import ButtonBlue from '../components/Button-blue/ButtonBlue.vue';


export default {
  components: {
    SideBar,
    MiniButton,
    ButtonBlue,
  },
  data() {
    return {
      activeButton: null,
      isCheckboxChecked: false,
      isCheckboxChecked2: false,
      isCheckboxChecked3: false,
      
    };
  },
  methods: {
    setActive(buttonType) {
      this.activeButton = buttonType;
    },
    getButtonClass(buttonType) {
      return {
        'border-[#000000] text-[#000000]': this.activeButton === buttonType,
        'border-[#BFBFBF] text-[#BFBFBF]': this.activeButton !== buttonType,
      };
    },
  },
  computed: {
    selectClasses() {
      return {
        'mt-[5px] text-[16px] font-normal leading-[19.2px] text-left block w-full md:w-[430px] bg-[#FAFAFA] border rounded-[25px] py-[15px] px-[20px]': true,
        'border-[#BFBFBF] text-[#BFBFBF]': !this.isCheckboxChecked,
        'cursor-not-allowed': !this.isCheckboxChecked,
      };
    },
    selectClasses2() {
      return {
        'mt-[5px] text-[16px] font-normal leading-[19.2px] text-left block w-full md:w-[430px] bg-[#FAFAFA] border rounded-[25px] py-[15px] px-[20px]': true,
        'border-[#BFBFBF] text-[#BFBFBF]': !this.isCheckboxChecked2,
        'cursor-not-allowed': !this.isCheckboxChecked2,
      };
    },
    selectClasses3() {
      return {
        'border-[#BFBFBF] text-[#BFBFBF]': !this.isCheckboxChecked3,
        'cursor-not-allowed': !this.isCheckboxChecked3,
        'mt-[5px] text-[16px] font-normal leading-[19.2px] text-left block w-full md:w-[430px] bg-[#FAFAFA] border rounded-full py-[15px] px-[20px]': true,
      };
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
</style>
