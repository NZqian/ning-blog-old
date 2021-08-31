<template>
  <div>
    <v-container>
      <v-text-field label="标题" hide-details="auto" v-model="title">
      </v-text-field>
      <v-textarea
        label="内容"
        hide-details="auto"
        v-model="content"
        counter="100"
        auto-grow
      >
      </v-textarea>
      <v-col class="text-center">
        <v-btn @click="submit"> 提交 </v-btn>
      </v-col>
      <v-textarea
        label="内容"
        hide-details="auto"
        v-model="response"
        counter="100"
        auto-grow
      >
      </v-textarea>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios'
export default Vue.extend({
    data: function() {
        return {
        title: "",
        content: "",
        response: "",
        }
    },
    methods: {
        submit: function() {
            console.log(this.title)
            console.log(this.content)
            axios.get("http://127.0.0.1:8888/api/test").then(response=>{
                console.log(response)
                this.response = JSON.stringify(response)
            })
        }
    }
})
</script>