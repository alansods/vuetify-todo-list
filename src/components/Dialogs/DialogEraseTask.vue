<template>
  <v-dialog :value="true" persistent max-width="350">
    <v-card>
      <v-card-title class="text-h5"> Excluir tarefa? </v-card-title>
      <v-card-text>
        <span>Tem certeza que você deseja excluir esta tarefa?</span>
        <br />
        <small>Esta ação <strong>não</strong> poderá ser desfeita.</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="btn btn-no" text @click="$emit('close')"> Não </v-btn>
        <v-btn class="btn btn-yes" text @click="$store.dispatch('deleteTask', task.id)"> Sim </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

.btn {
  width: 100px;
  color: white;
}
.btn-no {
  background: $verde;
}

.btn-yes {
  background: $vermelho;
}

.v-sheet.v-card:not(.v-sheet--outlined){
    padding: 15px 10px;
}
</style>
