<template>
  <v-app>
    <v-main class="pa-0">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
body {
  font-family: "Gilroy-Regular", sans-serif;
  color: #2d3d4d;
}
</style>
