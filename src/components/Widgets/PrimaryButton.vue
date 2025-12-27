
<script setup lang="ts">
interface Props {
    text: string
    type?: 'button' | 'submit' | 'reset'
}
const props = defineProps<Props>()

</script>

<template>
    <button class="primary-button" :type="type">
        {{ text }}
    </button>
</template>

<style scoped>
.primary-button {
    width: 242px;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #CC9601;
    border-radius: 5px;
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
}
</style>
