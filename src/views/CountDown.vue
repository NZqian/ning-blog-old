<template>
  <div>
    <pic-with-date />
    <v-row justify="start" align="center">
      <v-col class="text-center">
        <strong class="text-h2">
          {{ countdown }}
        </strong>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PicWithDate from "../components/PicWithDate.vue";
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
  components: {
    PicWithDate,
  },
});
</script>

<style>
#whole-page {
  background: #fff;
  height: 100%;
}
</style>