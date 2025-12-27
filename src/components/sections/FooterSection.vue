<template>
    <footer class="footer-container">
        <!-- top section -->
        <div class="top-section">
            <!-- left -->
            <div>
                <p class="address-section">
                    <span>IT Group</span> <br>
                    C. Salvador de Madariaga, 1 <br>
                    28027 Madrid <br>
                    Spain
                </p>
            </div>
            <!-- right -->
            <div class="social-media-section">
                <div style="margin-right: 40px;">Follow us on</div>
                <div class="social-medias">
                    <img src="/twitter.svg" width="29px" height="29px" alt="">
                    <img src="/youtube.svg" width="29px" height="29px" alt="">
                </div>
            </div>
        </div>
        <!-- bottom section -->
        <hr style="border: 1px solid #363636; width: 100%; margin: 0;">
        <div class="bottom-section">
            <div>Copyright © 2022 IT Hote ls. All rights reserved.</div>
            <div>Photos by Felix Mooneeram & Serge Kutuzov on Unsplash</div>
        </div>
    </footer>
</template>


<style scoped>
.footer-container {
    /* padding: 51px 115px; */
    display: flex;
    flex-direction: column;
    background-color: #1D1D1D;
    color: #fff;
    text-align: center;
}

.top-section {
    padding: 51px 115px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
}

.address-section {
    font-family: 'Open Sans', sans-serif;
    line-height: 150%;
    letter-spacing: -1.1%;
    font-size: 18.29px;
    text-align: left;
}

.address-section span {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -1.1%;
    font-size: 18.29px;
    text-align: left;
}

.social-media-section {
    display: flex;
    align-items: start;
    justify-content: space-between;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 18.29px;
    line-height: 150%;
    letter-spacing: -1.1%;
}

.social-medias {
    cursor: pointer;
    display: flex;
    font-size: 29px;
    column-gap: 20px;
}

.bottom-section {
    padding: 51px 115px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #B7B7B7;
    display: flex;
    justify-content: space-between;
}
</style>