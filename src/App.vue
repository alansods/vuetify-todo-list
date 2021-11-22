<template>
  <v-app>
    <v-main class="pa-0 full-height">
      <router-view></router-view>
      <AddTask></AddTask>
    </v-main>
  </v-app>
</template>

<script>
import AddTask from "@/components/AddTask.vue";

export default {
  name: "App",
  components: {
    AddTask,
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
