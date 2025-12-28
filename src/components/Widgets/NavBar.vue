<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}
</script>

<template>
    <nav class="navbar-container" :class="{ open: isOpen }">
        <!-- left -->
        <div class="navbar-left-container">
            <img src="/logo.svg" alt="Logo" class="logo" />
        </div>
        <!-- right -->
        <div class="navbar-right-container">
            <div class="links-container mq-mobile">
                <a href="http://">Home</a>
                <a href="http://">Our Screens</a>
                <a href="http://">Schedule</a>
                <a href="http://">Movie Library</a>
                <a href="http://" class="mq-desktop">Location & Contact</a>
            </div>
            <div class="menu-container =" @click="toggleMenu">
                <img src="/menu.svg" class="menu-icon" alt="Menu" />
            </div>

        </div>


        <!-- mobile menu -->
        <div class="mobile-menu" :class="{ open: isOpen }">
            <a href="#">Home</a>
            <a href="#">Our Screens</a>
            <a href="#">Schedule</a>
            <a href="#">Movie Library</a>
            <a href="#">Location & Contact</a>
        </div>
    </nav>
</template>

<style scoped>
.navbar-container {
    position: relative;
    height: 60px;
    background-color: #0F0F0F;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 115px;
}

.logo {
    width: 191px;
    height: 46px;
}

.menu-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-icon {
    width: 34px;
    height: 34px;
    cursor: pointer;
}

.links-container {
    display: flex;
    align-items: center;
    column-gap: 2rem;
}

.navbar-right-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 2rem;
}

.mq-desktop {
    display: block;
}

/* mobile menu */
.mobile-menu {
    position: absolute;
    top: 100%;
    right: 5%;
    background-color: #0F0F0F;
    border: 0px solid #333333;
    overflow: hidden;
    max-height: 0%;
    display: flex;
    flex-direction: column;
    align-items: start;
    row-gap: 14px;
    padding: 0px 0px;
    transition: all 0.4s ease;
}

.mobile-menu.open {
    position: absolute;
    top: 100%;
    right: 5%;
    background-color: #0F0F0F;
    border: 1px solid #333333;
    overflow: hidden;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    row-gap: 14px;
    padding: 20px 20px;
    transition: all 0.4s ease;
}

a {
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
}

@media (max-width: 1192px) {
    .mq-desktop {
        display: none;
    }
}

@media (max-width: 1192px) {
    .navbar-container {
        height: 60px;
        background-color: #0F0F0F;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 43px;
    }
}

@media (max-width: 820px) {
    .navbar-container {
        height: 60px;
        background-color: #0F0F0F;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 43px;
    }

    .logo {
        width: 150px;
        height: 46px;
    }

    .menu-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu-icon {
        width: 34px;
        height: 34px;
        cursor: pointer;
    }

    .links-container {
        display: flex;
        align-items: center;
        column-gap: 1rem;
    }

    .navbar-right-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 1rem;
    }

    .mq-desktop {
        display: none;
    }

    a {
        font-size: 16px;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        text-transform: uppercase;
    }

}

@media (max-width: 720px) {
    .navbar-container {
        padding: 16px 30px;
    }

    .mq-mobile {
        display: none;
    }
}
</style>