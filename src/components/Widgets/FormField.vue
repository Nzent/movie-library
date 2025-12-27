<script setup lang="ts">
interface Props {
    label: string
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
        <label v-if="label" :for="id" class="label">
            {{ label }}
            <span v-if="required" class="required">*</span>
        </label>

        <input :id="id" type="'text'" :value="modelValue" :required="required" @input="onInput"
            class="input" />
    </div>
</template>

<style scoped>
.form-field {
    display: flex;
    flex-direction: column;
    justify-content: start;
    row-gap: 4px;
    align-items: start;
}

label {
    color: #B7B7B7;
    font-family: 'Open Sans', sans-serif;
    font-size: 18.29px;
    line-height: 1;
}

input {
    width: 100%;
    max-height: 46px;
    padding: 10px;
    font-size: 16px;
    border: none;
    background-color: #3C3C3C;
    border-radius: 4px;
}
</style>
