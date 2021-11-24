<template>
    <v-snackbar v-model="$store.state.snackbar.show">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="$store.state.snackbar.show = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    text: `Tarefa adicionada.`,
  }),
};
</script>

<style></style>
