<template>
  <v-dialog :value="true" persistent width="450">
    <v-card>
      <v-card-title class="text-h5"> Editar tarefa </v-card-title>
      <v-card-text>
        <span>Edite o título desta tarefa.</span>
        <v-text-field
          v-model="taskTitle"
          @keyup.enter="saveTask"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="btn btn-no" text @click="$emit('close')">
          Cancelar
        </v-btn>
        <v-btn
          class="btn btn-yes"
          text
          @click="saveTask"
          :disabled="taskTitleInvalid"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      taskTitle: null,
    };
  },
  computed: {
    taskTitleInvalid() {
      return !this.taskTitle || this.taskTitle === this.task.title;
    },
  },
  mounted() {
    this.taskTitle = this.task.title;
  },
  methods: {
    saveTask() {
      if (!this.taskTitleInvalid) {
        let payload = {
          id: this.task.id,
          title: this.taskTitle,
        };
        this.$store.dispatch("updateTaskTitle", payload);
        this.$emit("close");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 100px;
  color: white;
}
.btn-no {
  background: $vermelho;
}

.btn-yes {
  background: $verde;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  padding: 15px 10px;
}
</style>
