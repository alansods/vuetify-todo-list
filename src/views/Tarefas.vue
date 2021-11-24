<template>
  <div id="tarefas">
    <TopBar></TopBar>
    <v-container fluid class="pa-0">
      <v-row>
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
      <AddTask></AddTask>
    </v-container>
  </div>
</template>

<script>
import Navbar from "@/components/Sidebar.vue";
import Categories from "@/components/Categories.vue";
import Sidebar from "@/components/Sidebar.vue";
import MyTasks from "@/components/tarefas/MyTasks.vue";
import TopBar from "@/components/tarefas/TopBar.vue";
import AddTask from "@/components/AddTask.vue";


export default {
  name: "Tarefas",
  components: {
    Navbar,
    Categories,
    Sidebar,
    MyTasks,
    TopBar,
    AddTask
  },
};
</script>

<style>
body {
  background: #e9f4fb;
}

#tarefas {
  height: 100%;
  background: #e9f4fb;
}
</style>
