<script setup lang="ts">
import { ref } from 'vue'
import FormField from './Widgets/FormField.vue';
import FormFieldTextArea from './Widgets/FormFieldTextArea.vue';
import PrimaryButton from './Widgets/PrimaryButton.vue';

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const telephone = ref('')
const message = ref('')
const tos = ref('')
</script>

<template>
    <form action="">
        <!-- names -->
        <div class="names-section">
            <!-- fname -->
            <FormField label="First Name" style="margin-right: 40px;" v-model="firstName" required />
            <!-- lname -->
            <FormField label="Last Name" style="" v-model="lastName" required />
        </div>
        <div class="other-section">
            <FormField label="Email" v-model="email" required />
            <FormField label="Telephone" v-model="telephone" required />
            <FormFieldTextArea label="Message" v-model="message" />
            <div style="font-family: 'Open Sans', sans-serif; text-align: left; font-size: 18.29px; color: #B7B7B7;">
                * required fields
            </div>
            <!-- tos fields -->
            <div class="tos-field">
                <input type="checkbox" v-model="tos" class="tos-input" style="margin-right: 20px;" />

                <span class="tos">I agree to the <a href="http://"
                        style="font-weight: 700; text-decoration:underline;">Terms & Conditions</a></span>
            </div>
            <div class="buttons-section">
                <PrimaryButton text="Submit" type="submit"/>
            </div>
        </div>
    </form>
</template>


<style scoped>
.names-section {
    display: flex;
    column-gap: 20px;
}

.other-section {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.tos-input {
    width: 24px;
    height: 24px;
    border: none;
    background-color: transparent;
}

.tos-field {
    font-size: 20px;
    display: flex;
    justify-content: start;
    align-items: center;
}
.buttons-section{
    justify-content: right;
    display: flex;
}
</style>
