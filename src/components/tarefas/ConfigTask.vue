<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on, attrs }">
      <v-btn light icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item>
        <v-list-item-icon class="mr-2">
          <v-icon>mdi-pencil-box-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Editar</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="$store.dispatch('deleteTask', task.id)">
        <v-list-item-icon class="mr-2">
          <v-icon>mdi-delete</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Excluir</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: ["task"],
};
</script>

<style></style>
