<script setup lang="ts">
import { computed } from 'vue';

interface CardProps {
    id: number
    title: string
    description: string
    image?: string | null
}

const props = defineProps<CardProps>()
const emit = defineEmits<{
    remove: [id: number]
}>()

const cleanDescription = computed(() =>
    props.description.replace(/<[^>]*>/g, '')
)

const handleRemove = () => {
    emit('remove', props.id)
}
</script>

<template>
    <article class="card-container">
        <div class="close-button" @click="handleRemove">
            <img src="/x.svg" alt="Close button">
        </div>
        <img :src="image || ''" class="cover-image" :alt="title">
        <div class="content-section">
            <h2 class="content-title">{{ title }}</h2>
            <p class="content-paragraph">{{ cleanDescription }}</p>
        </div>
    </article>
</template>

<style scoped>
.cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 427px;
    height: 770px;
}

.content-section {
    padding: 20px;
    color: #FFFFFF;
    background-color: #3C3C3C;
}

.content-title {
    font-family: "DIN Alternate", sans-serif;
    font-weight: 400;
    text-align: left;
    font-size: 32px;
    line-height: 150%;
    letter-spacing: -1.1%;
    
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.content-paragraph {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    text-align: left;
    font-size: 18.29px;
    line-height: 150%;
    letter-spacing: -1.1%;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.close-button {
    background-color: #1D1D1DE6;
    padding: 20px;
    position: absolute;
    margin: 10px;
    right: 1%;
    top: 1%;
    cursor: pointer;
    transition: background-color 0.2s;
}

.close-button:hover {
    background-color: #f44336;
}

@media (max-width: 1566px) {
    .card-container {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 770px;
    }
}

@media (max-width: 820px) {
    .card-container {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 349px;
        height: 770px;
    }
}
</style>