<template>
  <v-btn small icon @click="switchDark">
    <v-icon> mdi-theme-light-dark </v-icon>
  </v-btn>
</template>
<script>
export default {
  mounted() {
    let isDark = localStorage.getItem("_dark_mode");
    console.log(isDark);
    if (isDark === null) {
      if (this.systemInDark()) {
        this.setDark(true);
      } else {
        this.setDark(false);
      }
    } else {
      console.log(isDark);
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
    },
    systemInDark() {
      return window.matchMedia
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
        : false;
    },
  },
};
</script>