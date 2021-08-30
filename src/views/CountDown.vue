<template>
  <div>
    <v-container class="fill-height">
      <v-row align="center">
        <v-col class="text-center">
          <strong class="text-h1">
            {{ countdown }}
          </strong>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    countdown: "...",
  }),
  mounted: function () {
    setInterval(() => {
      let newTime = new Date();
      let endTime = new Date("2021/9/2");
      let leftTime = endTime.getTime() - newTime.getTime(),
        leftd = Math.floor(leftTime / (1000 * 60 * 60 * 24)),
        lefth = Math.floor((leftTime / (1000 * 60 * 60)) % 24),
        leftm = Math.floor((leftTime / (1000 * 60)) % 60),
        lefts = Math.floor((leftTime / 1000) % 60);
      this.countdown = leftd + ":" + lefth + ":" + leftm + ":" + lefts;
    }, 1000);
  },
});
</script>
