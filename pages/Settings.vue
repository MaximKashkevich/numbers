<template>
    <div>
        <nav class="px-[20px] md:px-[60px] mt-[30px]">
            <NuxtLink to="/BuyNumbers" class="text-blue-500 cursor-pointer">
                Home /
            </NuxtLink>
            <NuxtLink to="/GeneralEmpty" class="text-blue-500 cursor-pointer">
                My Dashboard /
            </NuxtLink>
            <span class="text-[#BFBFBF]"> Settings</span>
        </nav>

        <div
            class="flex flex-col lg:flex-row px-[20px] md:px-[60px] justify-center gap-[30px] md:gap-[50px] mt-[30px] flex-wrap big-container">
            <div class="w-full md:w-[300px] lg:w-[500px]">
                <SideBar class="sidebar" />
            </div>

            <div class="flex-1">
                <h1 class="w-full md:w-[872px] text-[50px] font-medium leading-[50px] text-left uppercase">
                    Settings
                </h1>
                <div>
                    <div>

                        <form @submit.prevent="validateForm" class="mt-[70px]">
                            <fieldset>
                                <div class="flex flex-col md:flex-row gap-[20px]">
                                    <div>
                                        <label for="fullName"
                                            class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#000000]">
                                            Full name:
                                        </label>
                                        <input id="fullName" type="text" v-model="form.name" @input="errors.name = ''"
                                            :class="{ 'border-red-500': errors.name }"
                                            class="w-[330px] max-w-[426px] lg:w-[430px] sm:w-[430px] h-[50px] mt-[5px] rounded-full border block border-[#BFBFBF] pl-4 text-lg text-[#000000] bg-[#FAFAFA]" />
                                        <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
                                    </div>

                                    <div class="w-full">
                                        <label for="mobile"
                                            class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#000000]">
                                            Mobile number:
                                        </label>
                                        <input id="mobile" type="number" v-model="form.mobile"
                                            @input="errors.mobile = ''" :class="{ 'border-red-500': errors.mobile }"
                                            class="w-[330px] max-w-[426px] lg:w-[430px] sm:w-[430px] h-[50px] mt-[5px] rounded-full border block border-[#BFBFBF] pl-4 text-lg text-[#000000] bg-[#FAFAFA]" />
                                        <span v-if="errors.mobile" class="text-red-500">{{ errors.mobile }}</span>
                                    </div>
                                </div>

                                <div class="flex flex-col md:flex-row gap-[20px] mt-[30px] mb-[30px]">
                                    <div>
                                        <label for="design"
                                            class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#000000]">Design:</label>
                                        <div class="relative">
                                            <input id="design" type="date"
                                                class="w-[330px] max-w-[426px] lg:w-[430px] sm:w-[430px] h-[50px] mt-[5px] rounded-full border block border-[#BFBFBF] pl-[75px] pr-[20px] text-lg text-[#000000] bg-[#FAFAFA] appearance-none" />
                                      
                                        </div>



                                    </div>
                                    <div class="w-full">
                                        <label for="emirate"
                                            class="font-roboto text-[16px] font-normal leading-[19.2px] text-[#000000]">
                                            Emirate:
                                        </label>
                                        <select id="emirate" v-model="form.emirate"
                                            class="border-[#BFBFBF] w-[330px] max-w-[426px] lg:w-[430px] mt-[5px] text-[16px] font-normal leading-[19.2px] text-left block md:w-[430px] bg-[#FAFAFA] border rounded-[25px] py-[15px] px-[20px]">
                                            <option value="Dubai">Dubai</option>
                                            <option value="Abu Dhabi">Abu Dhabi</option>
                                            <option value="Ajman">Ajman</option>
                                            <option value="Umm Al Quwain">Umm Al Quwain</option>
                                            <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                                            <option value="None">None</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="flex flex-col sm:flex-row gap-4 mt-[70px]">
                                    <div class="flex flex-col w-full sm:w-[430px] relative">
                                        <label for="email"
                                            class="text-[16px] font-normal leading-[19.2px] text-[#000000] mb-2">Your
                                            Email:</label>
                                        <input id="email" type="email" v-model="form.email" @input="errors.email = ''"
                                            :class="{ 'border-red-500': errors.email }"
                                            class="h-[50px] w-full rounded-full border border-[#BFBFBF] pl-4 text-lg text-[#000000] bg-[#FAFAFA]" />
                                        <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
                                    </div>

                                    <div class="flex flex-col w-full sm:w-[430px] relative">
                                        <label for="login"
                                            class="text-[16px] font-normal leading-[19.2px] text-[#000000] mb-2">Choose
                                            Login:</label>
                                        <input id="login" type="text" v-model="form.login" @input="errors.login = ''"
                                            :class="{ 'border-red-500': errors.login }"
                                            class="h-[50px] w-full rounded-full border border-[#BFBFBF] pl-4 text-lg text-[#000000] bg-[#FAFAFA]" />
                                        <span v-if="errors.login" class="text-red-500">{{ errors.login }}</span>
                                    </div>
                                </div>

                            </fieldset>
                        </form>
                        <div class="mt-[30px]">
                            <h2 class="w-full md:w-[872px] text-[35px] font-medium leading-[50px] text-left ">
                                Change your password
                            </h2>
                            <p
                                class="w-[310px] h-[40px] font-normal text-[16px text-[#000000] mt-[30px] text-[#BFBFBF]">
                                If you notice a suspicious account login, change your password.
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 mt-[30px]">
                                <div class="flex flex-col w-full sm:w-[430px] relative">
                                    <label for="current-password"
                                        class="text-[16px] font-normal leading-[19.2px] text-[#000000] mb-2">
                                        Current password:
                                    </label>
                                    <input id="current-password" type="password" v-model="currentPassword"
                                        @input="errors.currentPassword = ''"
                                        :class="{ 'border-red-500': errors.currentPassword }"
                                        class="h-[50px] w-full rounded-full border border-[#BFBFBF] pl-4 text-lg text-[#000000] bg-[#FAFAFA]" />
                                    <span v-if="errors.currentPassword" class="text-red-500">{{ errors.currentPassword
                                        }}</span>
                                </div>

                                <div class="line hidden sm:block"></div> <!-- Линия между полями -->

                                <div class="flex flex-col w-full sm:w-[430px] relative">
                                    <label for="new-password"
                                        class="text-[16px] font-normal leading-[19.2px] text-[#000000] mb-2">
                                        New password:
                                    </label>
                                    <input id="new-password" type="password" v-model="newPassword"
                                        @input="errors.newPassword = ''"
                                        :class="{ 'border-red-500': errors.newPassword }"
                                        class="h-[50px] w-full rounded-full border border-[#BFBFBF] pl-4 text-lg text-[#000000] bg-[#FAFAFA]" />
                                    <span v-if="errors.newPassword" class="text-red-500">{{ errors.newPassword }}</span>
                                </div>

                            </div>
                            <div class="mt-[70px]">
                                <h2 class="w-full md:w-[872px] text-[35px] font-medium leading-[50px] text-left ">
                                    What would you like to see first?
                                </h2>
                                <p
                                    class="w-[380px] h-[40px] font-normal text-[16px text-[#000000] mt-[30px] text-[#BFBFBF]">
                                    This setting will affect the order of listing types both in the main page and your
                                    dashboard.
                                </p>
                            </div>

                            <div class="flex mt-[30px] ">


                                <div class="flex items-center ">
                                    <!-- Радио-кнопка 1 -->
                                    <div class="radio-container">
                                        <input type="radio" class="radio" id="id1" value="plate"
                                            v-model="selectedOption">
                                        <span class="fake" :class="{ 'active': selectedOption === 'plate' }"></span>
                                    </div>
                                    <label for="id1" class="label">Your Plate numbers</label>

                                    <!-- Радио-кнопка 2 -->
                                    <div class="radio-container ml-[70px]">
                                        <input type="radio" class="radio" id="id2" value="mobile"
                                            v-model="selectedOption">
                                        <span class="fake" :class="{ 'active': selectedOption === 'mobile' }"></span>
                                    </div>
                                    <label for="id2" class="label">Your Mobile numbers</label>
                                </div>
                            </div>
                        </div>
                        <ButtonBlue class="w-[330px] lg:w-[500px] mt-[70px]" @click="validateForm">
                            Save changes
                        </ButtonBlue>


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
import CardLicenses from '../components/CardLicenses/CardLicenses.vue';

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
            selectedOption: null,

            form: {
                name: '',
                mobile: '',
                design: '',
                email: '',
                login: '',
                emirate: '',
            },
            errors: {
                name: '',
                mobile: '',
                email: '',
                login: '',
            },
            currentPassword: '',
            newPassword: '',
            errors: {
                currentPassword: '',
                newPassword: ''
            },

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
        validateForm() {
            this.errors = { name: '', mobile: '', email: '', login: '' }; // Clear previous errors

            if (!this.form.name) {
                this.errors.name = 'Full name is required';
            } else if (this.form.name.length < 3) {
                this.errors.name = 'Full name must be at least 3 characters long';
            }

            if (!this.form.mobile) {
                this.errors.mobile = 'Mobile number is required';
            } else if (this.form.mobile.length < 10) {
                this.errors.mobile = 'Mobile number must be at least 10 digits';
            }

            if (!this.form.email) {
                this.errors.email = 'Email is required';
            } else if (!this.validateEmail(this.form.email)) {
                this.errors.email = 'Invalid email format';
            }

            if (!this.form.login) {
                this.errors.login = 'Login is required';
            }

            // Check if there are no errors before submitting
            if (!Object.values(this.errors).some(error => error)) {
                this.submitForm();
            }
        },
        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },
        submitForm() {
            // Logic for form submission
            alert('Form submitted successfully');
            // Here you can add your logic to save changes
        },
        validatePasswords() {
            this.errors.currentPassword = '';
            this.errors.newPassword = ''; // Clear previous errors

            if (!this.form.currentPassword) {
                this.errors.currentPassword = 'Current password is required';
            }

            if (!this.form.newPassword) {
                this.errors.newPassword = 'New password is required';
            } else if (this.form.newPassword.length < 8) {
                this.errors.newPassword = 'New password must be at least 8 characters long';
            }

            // Check if there are no errors before processing
            if (!Object.values(this.errors).some(error => error)) {
                this.submitPasswords();
            }
        },
        submitPasswords() {
            // Logic for password submission
            alert('Passwords submitted successfully');
        },
        validatePasswords() {
            this.errors.currentPassword = '';
            this.errors.newPassword = ''; // Сброс ошибок

            if (!this.currentPassword) {
                this.errors.currentPassword = 'Current password is required';
            }

            if (!this.newPassword) {
                this.errors.newPassword = 'New password is required';
            } else if (this.newPassword.length < 8) {
                this.errors.newPassword = 'New password must be at least 8 characters long';
            }

            // Проверка, нет ли ошибок перед выполнением действия
            if (!Object.values(this.errors).some(error => error)) {
                this.submitPasswords();
            }
        },
        submitPasswords() {
            // Логика отправки паролей
            alert('Passwords submitted successfully');
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

.radio-container {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

.radio {
    appearance: none;
    /* Убираем стандартное оформление радио-кнопки */
    width: 100%;
    height: 100%;
    border: 1px solid #BFBFBF;
    border-radius: 50%;
    position: relative;
    z-index: 1;
    cursor: pointer;
}

.fake {
    display: block;
    width: 24px;
    height: 24px;
    background: transparent;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: background-color 0.3s;
}

/* Активный стиль для выбранной радио-кнопки */
.fake.active {
    background: #005DCA;
}

.label {
    font-size: 16px;
    font-weight: normal;
    line-height: 19.2px;
    color: #000000;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    margin-left: 8px;
}

@media(max-width: 400px) {
    .radio-container {
        width: 30px;
        height: 30px;
    }

    .label {
        font-size: 12px;
    }
}

input[type="date"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
</style>