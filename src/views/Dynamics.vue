<template>
  <div>
    <v-card flat>
      <v-btn absolute bottom color="pink" right fab @click.stop="JumpToPublish">
        <v-icon>mdi-plus</v-icon>
        <router-link to="/publish"></router-link>
      </v-btn>
      <pic-with-date />
    </v-card>
    <v-card-text class="py-0">
      <v-timeline align-top dense>
        <v-timeline-item
          v-for="item in items"
          :key="item.key"
          :color="item.color"
          small
        >
          <v-row class="pt-1">
            <v-col cols="5">
              <strong>{{ item.time }}</strong>
            </v-col>
            <v-col>
              <strong>{{ item.title }}</strong>
              <div class="text-caption">{{ item.content }}</div>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import PicWithDate from "../components/PicWithDate.vue";

export default Vue.extend({
  name: "Dynamics",
  data() {
    return {
      items: [],
    };
  },
  beforeMount: function() {
      console.log("getting dynamics")
      axios.get(Vue.prototype.serverAddr + "/api/get-dynamics").then(response=>{
          console.log(response)
          this.items = response.data
      })
      console.log("exiting before create")
  },
  components: {
    PicWithDate,
  },
  methods: {
    JumpToPublish: function () {
      console.log("");
      this.$router.push("/publish");
    },
  },
});
</script>