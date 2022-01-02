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
          <router-view />
          <!-- <MyTasks></MyTasks> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Categories from "@/components/Sidebar/Categories.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
// import MyTasks from "@/components/tarefas/MyTasks.vue";
import TopBar from "@/components/tarefas/TopBar.vue";


export default {
  name: "Tarefas",
  components: {
    Categories,
    Sidebar,
    // MyTasks,
    TopBar,
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
