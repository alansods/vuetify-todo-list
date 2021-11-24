<template>
  <v-list class="pt-0" flat color="rgba(255, 255, 255, 0)">
    <Task
      v-for="task in $store.state.tasks"
      :key="task.id"
      :task="task"
    >
    </Task>
  </v-list>
</template>

<script>
import Task from "@/components/tarefas/Task.vue";

export default {
  components: {
    Task,
  },
};
</script>

<style lang="scss" scoped>
</style>
