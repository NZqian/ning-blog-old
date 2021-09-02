<template>
  <v-img
    dark
    src="../assets/forest.jpg"
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
</template>
