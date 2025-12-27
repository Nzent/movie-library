<script setup lang="ts">
interface Props {
    modelValue: string
    required?: boolean
    id?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

function onInput(event: Event) {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
}
</script>

<template>
    <div class="form-field">
        <input :id="id" type="checkbox" :value="modelValue" :required="required" @input="onInput"
            class="input" />
            <span class="tos">I agree to the Terms & Conditions</span>
    </div>
</template>

<style scoped>
.form-field {
    display: flex;
    justify-content: start;
    row-gap: 4px;
    align-items: start;
}
input {
    width: 24px;
    height: 24px;
    border: none;
    background-color: #3C3C3C;
}
.tos {
    font-family: 'Open Sans', sans-serif;
    font-size: 18.29px;
    color: #FFFFFF;
    margin-left: 10px;
}
</style>
