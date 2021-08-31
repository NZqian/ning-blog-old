<template>
  <div>
    <v-card flat>
      <v-btn absolute bottom color="pink" right fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-img
        dark
        src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
        gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
      >
        <v-container class="fill-height">
          <v-row align="center">
            <strong class="text-h1 font-weight-regular mr-6">{{
              new Date().getDate()
            }}</strong>
            <v-row justify="right">
              <div class="text-h5 font-weight-light">
                {{
                  new Array(
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  )[new Date().getDay() - 1]
                }}
              </div>
              <div class="text-uppercase font-weight-light">
                {{
                  new Array(
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                  )[new Date().getMonth()]
                }}
                {{ new Date().getFullYear() }}
              </div>
            </v-row>
          </v-row>
        </v-container>
      </v-img>
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

<script>
import Vue from "vue";
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
});
</script>