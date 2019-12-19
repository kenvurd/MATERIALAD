<template>
 <!-- App.vue -->

  <v-app>
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
    >
      <v-list shaped>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(link, i) in links"
            :key="i"
            :to="link.url"
          >
            <v-list-item-icon>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="deep-purple accent-4"
      dark
    >
      <!-- -->
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Material Ad Git</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          text
          v-for="(link, i) in links"
          :key="i"
          :to="link.url"
        >
          <v-icon left> {{link.icon}} </v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>

    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    links: [
      {title: "Registration", icon: "mdi-account", url: "/registration"},
      {title: "Login", icon: "mdi-login", url: "/login"},
      {title: "My ads", icon: "mdi-view-list", url: "/list"}
    ] 
  }),
};
</script>
