<template>
    <section class="main-section">
        <h2 class="title">Movie Library</h2>
        <p class="paragraph">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
        </p>
    </section>
</template>

<style scoped>
.main-section {

    margin: 0px;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    background-color: #0F0F0F;
    padding: 66px 115px;
    max-height: 307px;
}

.title {
    font-family: 'DIN Alternate', sans-serif;
    font-size: 54px;
    line-height: 150%;
    text-transform: uppercase;
    letter-spacing: -1.1%;
    color: #FFFFFF;
    margin: 0;
}

.paragraph {
    color: #B7B7B7;
    max-width: 527px;
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
}


@media (max-width: 820px) {
    .main-section {
        margin: 0px;
        display: flex;
        justify-content: start;
        align-items: start;
        flex-direction: column;
        background-color: #0F0F0F;
        padding: 63px 43px;
        max-height: 307px;
    }
}
</style>