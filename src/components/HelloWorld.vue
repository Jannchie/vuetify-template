<template>
  <v-card dense outlined>
    <v-card-title>{{ title }}</v-card-title>
    <v-divider></v-divider>
    <v-card-text>{{ msg }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: "Hello world",
      msg:
        "This is a Vue.js + Vuetify project template that makes it easier to build beautiful applications.",
    };
  },
};
</script>
