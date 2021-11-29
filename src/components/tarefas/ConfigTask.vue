<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn light icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="dialogs.edit = true">
          <v-list-item-icon class="mr-2">
            <v-icon>mdi-pencil-box-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Editar</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="dialogs.delete = true">
          <v-list-item-icon class="mr-2">
            <v-icon>mdi-delete</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Excluir</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <DialogEraseTask
    v-if="dialogs.delete"
    :task="task"
    @close="dialogs.delete = false"
    ></DialogEraseTask>
    <DialogEditTask
    v-if="dialogs.edit"
    :task="task"
    @close="dialogs.edit = false"></DialogEditTask>
  </div>
</template>

<script>
import DialogEditTask from '../Dialogs/DialogEditTask.vue';
import DialogEraseTask from "../Dialogs/DialogEraseTask.vue";
export default {
  components: { DialogEraseTask, DialogEditTask },
  props: ["task"],
  data() {
    return {
      dialogs: {
        edit: false,
        delete: false
      }
    }
  }
};
</script>

<style></style>
