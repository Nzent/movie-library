    <template>

        <article class="card-container">
            <div class="close-button">
                <img src="/x.svg" alt="Close button">
            </div>
            <img src="/images/card.jpg" class="cover-image" alt="Card image">
            <div class="content-section">
                <h2 class="content-title">Batman Returns</h2>
                <p class="content-paragraph">Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut…</p>
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
        /* display: none; */
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
    }

    .content-paragraph {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        text-align: left;
        font-size: 18.29px;
        line-height: 150%;
        letter-spacing: -1.1%;
    }

    .close-button {
        background-color: #1D1D1DE6;
        padding: 20px;
        position: absolute;
        margin: 10px;
        right: 1%;
        top: 1%;
        cursor: pointer;
    }
    </style>