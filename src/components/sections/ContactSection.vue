<script setup lang="ts">
import ContactForm from '../ContactForm.vue';

</script>

<template>
    <section class="main-section">
        <!-- top section -->
        <div class="top-section">
            <h2 class="title">How to reach us</h2>
            <p class="sub-title">Lorem ipsum dolor sit amet, consetetur.</p>
        </div>
        <!-- bottom section -->
        <div class="bottom-section">
            <!-- left -->
            <div>
                <ContactForm />
            </div>
            <!-- right -->
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3812075643614!2d79.9404323!3d6.844821199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25069caa2f53b%3A0xe7eae3a8b1f1214d!2seBEYONDS%20eBusiness%20%26%20Digital%20Solutions!5e0!3m2!1sen!2slk!4v1766867944039!5m2!1sen!2slk"
                    class="location-iframe" allowfullscreen loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
</template>


<style scoped>
.location-iframe {
    width: 773px;
    height: 100%;
}

.main-section {
    padding: 51px 115px;
    display: flex;
    flex-direction: column;
}

.top-section {
    text-align: left;
}

.title {
    font-family: "DIN Alternate", sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 150%;
    letter-spacing: -1.1%;
    color: #FFFFFF;
}

.sub-title {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #B7B7B7;
    margin-top: 8px;
}

.bottom-section {
    margin-top: 50px;
    display: flex;
    column-gap: 8%;
}
</style>