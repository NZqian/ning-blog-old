<template>
  <div>
    <v-container>
      <v-text-field
        label="标题"
        hide-details="auto"
        v-model="title"
        :rules="rules"
      >
      </v-text-field>
      <v-textarea
        label="内容"
        hide-details="auto"
        v-model="content"
        counter="100"
        auto-grow
        :rules="rules"
      >
      </v-textarea>
      <v-col class="text-center">
        <v-btn @click="submit" width="200px"> 提交 </v-btn>
      </v-col>
      <!--
      <v-textarea
        label="内容"
        hide-details="auto"
        v-model="response"
        counter="100"
        auto-grow
      >
      </v-textarea>
      -->
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
export default Vue.extend({
  data: function () {
    return {
      title: "",
      content: "",
      response: "",
      rules: [(value: string) => !!value || "Required."],
    };
  },
  methods: {
    submit: function () {
      console.log(this.title);
      console.log(this.content);
      if (this.title == "" || this.content == "") {
        return;
      }
      let date = new Date();
      /*
      let time =
        date.getFullYear() +
        "-" +
        date.getMonth() +
        "-" +
        date.getDay() +
        "T" +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();
        */
      let time =
        date.getFullYear() +
        "-" +
        date.getMonth() +
        "-" +
        date.getDay() +
        "\n" +
        date.getHours() +
        ":" +
        date.getMinutes();
      axios
        .post(Vue.prototype.serverAddr + "/api/publish-dynamic", {
          time: time,
          title: this.title,
          content: this.content,
        })
        .then((response) => {
          console.log(response);
          this.response = JSON.stringify(response);
        })
        .then(() => {
          this.$router.push("/dynamics");
        });
    },
  },
});
</script>