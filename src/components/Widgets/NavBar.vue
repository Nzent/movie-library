<template>
    <nav class="navbar-container">
        <!-- left -->
        <div class="navbar-left-container">
            <img src="/logo.svg" alt="Logo" class="logo" />
        </div>
        <!-- right -->
        <div class="navbar-right-container">
            <div class="links-container">
                <a href="http://">Home</a>
                <a href="http://">Our Screens</a>
                <a href="http://">Schedule</a>
                <a href="http://">Movie Library</a>
                <a href="http://">Location & Contact</a>
            </div>
            <div class="menu-container">
                <img src="/menu.svg" class="menu-icon" alt="Menu" />
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar-container {
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
a{
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
}
</style>