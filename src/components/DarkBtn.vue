<template>
  <v-btn small icon @click="switchDark">
    <v-icon> {{ icon }}</v-icon>
  </v-btn>
</template>
<script>
export default {
  data() {
    return { icon: "mdi-weather-night" };
  },
  mounted() {
    let isDark = localStorage.getItem("_dark_mode");
    if (isDark === null) {
      if (this.systemInDark()) {
        this.setDark(true);
      } else {
        this.setDark(false);
      }
    } else {
      this.setDark(isDark === "true" ? true : false);
    }
  },
  methods: {
    switchDark() {
      this.setDark(!this.$vuetify.theme.dark);
    },
    setDark(bool) {
      this.$vuetify.theme.dark = bool;
      localStorage.setItem("_dark_mode", bool);
      this.icon = bool ? "mdi-weather-sunny" : "mdi-weather-night";
    },
    systemInDark() {
      return window.matchMedia
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
        : false;
    },
  },
};
</script>