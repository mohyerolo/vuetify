<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
      :src="require('@/assets/sidebar.jpg')"
    >
      <template #img="props">
        <v-img
          :gradient="gradient"
          v-bind="props"
        />
      </template>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          active-class="primary"
          class="py-1"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
    drawer: false,
    gradient: "rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)",
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
      { title: "GridSystem", icon: "mdi-view-dashboard", to: "/grid-system" },
      {
        title: "GridListPage",
        icon: "mdi-view-dashboard",
        to: "/grid-list-page",
      },
      {
        title: "BreakPoints",
        icon: "mdi-view-dashboard",
        to: "/break-points",
      },
      {
        title: "Typography",
        icon: "mdi-view-dashboard",
        to: "/typography",
      },
      {
        title: "Tables",
        icon: "mdi-table-settings",
        to: "/tables",
      },
      {
        title: "Forms",
        icon: "mdi-form-select",
        to: "/forms",
      },
      {
        title: "Buttons",
        icon: "mdi-gesture-tap-button",
        to: "/buttons",
      },
      {
        title: "Icons",
        icon: "mdi-emoticon-excited-outline",
        to: "/icons",
      },
    ],
    right: null,
  }),
};
</script>
