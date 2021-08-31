<template>
  <div>
    <v-app-bar app>
      <div class="d-flex align-center">
        <v-icon @click.stop="drawer = !drawer">mdi-menu</v-icon>
      </div>

      <v-spacer></v-spacer>
      <v-col class="text-center">
        <v-card-text>Our Blog</v-card-text>
      </v-col>
      <v-spacer></v-spacer>

      <v-switch
        v-model="$vuetify.theme.dark"
        hint="暗黑模式"
        persistent-hint
      ></v-switch>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../assets/avatar.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Ning</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <router-link
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          style="text-decoration: none"
        >
          <v-list-item link :href="item.to">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>

      <v-divider></v-divider>
      <v-container v-if="logged">
        <v-col class="text-center">
          <v-btn @click="logout" style="color: red">退出</v-btn>
        </v-col>
      </v-container>
      <v-container v-else>
        <v-row justify="end">
          <v-col class="text-center">
            <div>
              <v-text-field
                label="用户名"
                :rules="rules"
                hide-details="auto"
                v-model="username"
              ></v-text-field>
              <v-text-field label="密码" v-model="password"></v-text-field>
            </div>
            <v-btn @click="login">登录</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: function () {
    return {
      drawer: null,
      items: [
        { title: "主页", icon: "mdi-view-dashboard", to: "/" },
        { title: "倒计时", icon: "mdi-forum", to: "/countdown" },
        { title: "动态", icon: "mdi-forum", to: "/dynamics" },
      ],
      logged: false,
      password: "",
      username: "",
    };
  },
  created: function () {
    this.logged = this.$cookies.get("logged");
    console.log(this.logged);
  },
  mounted: function () {
    console.log("mounted");
    this.logged = this.$cookies.get("logged");
    console.log("got cookie");
    console.log(this.logged);
  },
  beforeMount: function () {
    console.log("before mount");
    console.log(this.$cookies.isKey("logged"));
    this.logged = this.$cookies.get("logged");
    console.log("got cookie");
  },
  methods: {
    login: function () {
      //console.log(this.logged)
      console.log(this.$cookies.get("logged"));
      this.logged = true;
      this.$cookies.set("logged", true);
      console.log(this.username);
      console.log(this.password);
      console.log(this.$cookies.get("logged"));
    },
    logout: function () {
      //console.log(this.logged)
      this.logged = false;
      this.$cookies.set("logged", false);
      this.username = "";
      this.password = "";
    },
  },
});
</script>