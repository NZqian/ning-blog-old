<template>
  <v-container>
    <v-carousel
      cycle
      height="200"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
      v-for="(item,i) in slides"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
    </v-carousel>
    <hello-world />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: [
          { src: require("../assets/carousel1.jpg"), text: "lalala" },
          { src: require("../assets/carousel2.jpg"), text: "lalala" }
      ],
    };
  },
});
</script>
