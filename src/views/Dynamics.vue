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
            <v-col cols="3">
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
import Vue from "vue";
import PicWithDate from "../components/PicWithDate.vue";

export default Vue.extend({
  name: "Dynamics",
  data() {
    return {
      items: [
        { color: "pink", time: "11", title: "New Icon", content: "Mobile App" },
        {
          color: "teal lighten-3",
          time: "11",
          title: "Design Stand Up",
          content: "Hangouts",
        },
        { color: "pink", time: "11", title: "Lunch break", content: "" },
        {
          color: "teal lighten-3",
          time: "11",
          title: "Finish Home Screen",
          content: "Web App",
        },
      ],
    };
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