<template>
  <v-container>
    <!--
    <v-carousel
      cycle
      height="auto"
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
    -->
    <v-card>
      <v-img height="200px">
        <v-card-title class="white--text mt-8">
          <v-spacer></v-spacer>
          <v-avatar size="56">
            <img alt="user" src="../assets/avatar_female.jpg" />
          </v-avatar>
          <v-avatar>
            <v-icon>mdi-heart</v-icon>
          </v-avatar>
          <v-avatar size="56">
            <img alt="user" src="../assets/avatar_male.jpg" />
          </v-avatar>
          <v-spacer></v-spacer>
        </v-card-title>
      </v-img>

      <v-card-text>
        <v-col class="text-center">
          <strong class="text-h6">我们在一起已经 {{ days }} 天了</strong>
        </v-col>
      </v-card-text>
    </v-card>
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
        { src: require("../assets/carousel2.jpg"), text: "lalala" },
        { src: require("../assets/carousel3.jpg"), text: "lalala" },
      ],
      days: "..."
    };
  },
  mounted: function() {
      let firstTime = new Date("2018/6/10")
      let nowTime = new Date()
      let timePassed = nowTime.getTime() - firstTime.getTime()
      this.days = Math.floor(timePassed/(1000 * 60 * 60 * 24)) + ""
  }
});
</script>
