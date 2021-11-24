<template>
  <div class="container-tasks mt-10">
    <h2>Minhas Tarefas</h2>
    <p>
      Olá <span class="information">{{ nome }}</span
      >, você tem
      <span class="information text-decoration-underline"
        >{{ numeroTarefas }} tarefas</span
      >
      pendentes.
    </p>
    <AddTaskField></AddTaskField>
    <TasksList></TasksList>
  </div>
</template>

<script>
import AddTaskField from "@/components/tarefas/AddTaskField.vue";
import TasksList from "@/components/tarefas/TasksList.vue";

export default {
  components: { AddTaskField, TasksList },
  name: "MyTasks",
  data() {
    return {
      nome: "Alan Santos",
      numeroTarefas: "5",
    };
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.container-tasks {
  max-width: 633px;
  margin: 0 auto;
}

.information {
  color: #2693ff;
  font-weight: bold;
}
</style>
