<template>
  <v-app>
    <v-app-bar dense flat app outlined clipped-left>
      <v-app-bar-title>{{ title }}</v-app-bar-title>
      <v-spacer></v-spacer>
      <DarkBtn />
    </v-app-bar>
    <v-navigation-drawer app clipped>
      <div class="d-flex flex-column" style="min-height: 100%">
        <div style="flex: 1">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                {{ app.name }}
              </v-list-item-title>
              <v-list-item-subtitle> {{ app.subtitle }} </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list dense nav>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.to"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
        <div>
          <v-footer>
            <span>&copy; {{ new Date().getFullYear() }} Jannchie </span>
          </v-footer>
        </div>
      </div>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <v-scroll-y-reverse-transition mode="out-in">
          <router-view></router-view>
        </v-scroll-y-reverse-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Home", icon: "mdi-home", to: "/" },
      { title: "About", icon: "mdi-information", to: "/about" },
    ],
    app: { name: "application", subtitle: "Subtitle" },
    title: "Vuetify Template",
    right: null,
  }),
};
</script>
