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
          <v-img v-if="logged" src="../assets/avatar.jpg"></v-img>
          <v-icon v-else>{{ icon }}</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ name }}</v-list-item-title>
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
          <v-list-item link :href="item.to" v-if="item.show">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                >{{ item.title }}</v-list-item-title
              >
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
import axios from "axios";
import Vue from "vue";
export default Vue.extend({
  data: function () {
    return {
      drawer: null,
      items: [
        { title: "主页", icon: "mdi-view-dashboard", to: "/", show: true },
        //{ title: "倒计时", icon: "mdi-forum", to: "/countdown" },
        { title: "动态", icon: "mdi-forum", to: "/dynamics", show: false },
        {
          title: "生日快乐",
          icon: "mdi-cake-layered",
          to: "/birthday",
          show: false,
        },
      ],
      logged: false,
      password: "",
      username: "",
      icon: "mdi-account-question",
      avatar: require("../assets/avatar.jpg"),
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
      console.log(this.username);
      console.log(this.password);
      console.log(this.$cookies.get("logged"));
      axios
        .post(Vue.prototype.serverAddr + "/api/login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          if (response.data == "success") {
            this.logged = true;
            this.$cookies.set("logged", true);
            for (var i = 1; i < 3; i++) {
              this.items[i].show = true;
            }
          }
        });
    },
    logout: function () {
      //console.log(this.logged)
      this.logged = false;
      this.$cookies.set("logged", false);
      this.username = "";
      this.password = "";
    },
  },
  computed: {
    name: function (): string {
      if (this.logged) return this.username;
      return "请登录";
    },
  },
});
</script>