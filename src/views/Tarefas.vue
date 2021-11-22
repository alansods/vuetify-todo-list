<template>
  <div
    id="tarefas"
  >
    <v-container fluid class="fill-height pa-0">
      <v-row class="fill-height">
        <v-col cols="1" class="pa-0">
            <Sidebar></Sidebar>
        </v-col>
        <v-col cols="2" class="pa-0">
            <Categories></Categories>
        </v-col>
        <v-col cols="9" class="pa-0">
          <MyTasks></MyTasks>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Sidebar.vue";
import Categories from "../components/Categories.vue";
import Sidebar from "../components/Sidebar.vue";
import MyTasks from "../components/tarefas/MyTasks.vue";

export default {
  name: "Tarefas",
  components: {
    Navbar,
    Categories,
    Sidebar,
    MyTasks,
  },
};
</script>

<style>

#tarefas {
  height: 100vh;
  background: #E9F4FB;
}

</style>
