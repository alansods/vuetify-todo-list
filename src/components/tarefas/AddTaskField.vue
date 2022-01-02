<template>
  <v-text-field
    v-model="newTaskTitle"
    @click:append="addTaskPart2"
    @keyup.enter="addTaskPart2"
    class="py-3"
    outlined
    hide-details
    clearable
    label="Adicionar tarefa"
    append-icon="mdi-plus"
  >
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "",
    };
  },
  methods: {
    addTaskPart2() {
      if (this.newTaskTitle.length) {
        this.$store.dispatch("addTask", this.newTaskTitle);
        this.newTaskTitle = "";
      }
      else {
        this.$store.dispatch("emptyFieldWarning");
        //alert("Digite alguma tarefa.");
      }
    },
  },
};
</script>

<style></style>
