<script setup lang="ts">
import CollectYourMoviesSection from './components/sections/CollectYourMoviesSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import LandingSection from './components/sections/LandingSection.vue';
import MovieLibrarySection from './components/sections/MovieLibrarySection.vue';
import NavBar from './components/Widgets/NavBar.vue';
</script>

<template>
  <NavBar />
  <LandingSection />
  <MovieLibrarySection />
  <CollectYourMoviesSection />
  <ContactSection />
</template>
