<template>
  <v-app>
    <!--
    <v-app-bar app>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="assets/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-switch
        v-model="$vuetify.theme.dark"
        hint="切换模式"
        persistent-hint
      ></v-switch>
    </v-app-bar>
    -->
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