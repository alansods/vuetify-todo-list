<template>
  <div @click="$store.commit('doneTask', task.id)">
    <v-list-item class="task-list" :class="{ 'task-list-done': task.done }">
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.done }"
          >
            {{ task.title }}
          </v-list-item-title>
        </v-list-item-content>
        <ConfigTask :task="task"></ConfigTask>
      </template>
    </v-list-item>
  </div>
</template>

<script>
import ConfigTask from "@/components/tarefas/ConfigTask.vue";

export default {
  props: ["task"],
  components: {
    ConfigTask,
  },
};
</script>

<style lang="scss" scoped>
.task-list {
  font-family: "Gilroy-Bold", sans-serif;
  color: #2d3d4d;
  background: white;
  margin: 8px 0;
  border-radius: 5px;
  cursor: pointer;
}

.task-list-done {
  background: #f4fafd;
  color: #8d9ca9 !important;
}
</style>
