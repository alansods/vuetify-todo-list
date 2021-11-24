<template>
  <v-app>
    <v-main class="pa-0">
      <router-view></router-view>
    </v-main>
    <Snackbar></Snackbar>
  </v-app>
</template>

<script>
import Snackbar from "@/components/Snackbar.vue";

export default {
  name: "App",
  components: {
    Snackbar,
  },
};
</script>

<style lang="scss">
p,
h2,
h3,
li {
  font-family: "Gilroy-Regular", sans-serif;
  color: #2d3d4d;
}

h2,
h3 {
  font-family: "Gilroy-Semibold", sans-serif;
}
</style>
