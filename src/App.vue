<template>
  <v-app>
    <navigation></navigation>

    <v-main>
      <router-view />
    </v-main>
    <router-link to="/about" class="no-underline">
      <v-footer>
        <v-col class="text-center no-underline" cols="12">
          {{ new Date().getFullYear() }} - <strong>Ning</strong>
        </v-col>
      </v-footer>
    </router-link>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "@/components/Navigation.vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navigation,
  },
});
</script>
<style>
.no-underline {
  text-decoration: none;
}
</style>