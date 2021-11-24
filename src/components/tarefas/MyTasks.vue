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
      <v-text-field
        v-model="newTaskTitle"
        @click:append="addTask"
        @keyup.enter="addTask"
        class="py-3"
        outlined
        hide-details
        clearable
        label="Adicionar tarefa"
        append-icon="mdi-plus"
      >
      </v-text-field>
      <v-list class="pt-0" flat color="rgba(255, 255, 255, 0)">
        <div v-for="task in tasks" :key="task.id" @click="doneTask(task.id)">
          <v-list-item
            class="task-list"
            :class="{ 'task-list-done': task.done }"
          >
            <template v-slot:default>
              <v-list-item-action>
                <v-checkbox
                  :input-value="task.done"
                  color="primary"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  :class="{ 'text-decoration-line-through': task.done }"
                  >{{ task.title }}</v-list-item-title
                >
              </v-list-item-content>
              <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn light icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item>
                    <v-list-item-title>Editar</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="deleteTask(task.id)">
                    <v-list-item-title>Excluir</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-list-item>
        </div>
      </v-list>
  </div>
</template>

<script>
export default {
  name: "MyTasks",
  data() {
    return {
      nome: "Eduardo Pereira",
      numeroTarefas: "5",
      newTaskTitle: "",
      tasks: [
        {
          id: 1,
          title: "Planejar desenvolvimentode app ToDoList",
          done: false,
        },
        {
          id: 2,
          title: "Criar Projeto Vue.js",
          done: false,
        },
        {
          id: 3,
          title: "Montar telas HTML/CSS",
          done: false,
        },
        {
          id: 4,
          title: "Separar componentes",
          done: false,
        },
        {
          id: 5,
          title: "Programar componentes",
          done: false,
        },
      ],
    };
  },
  methods: {
    addTask() {
      let newTask = {
        id: Date.now(), //gera um número único e diferente de todos.
        title: this.newTaskTitle,
        done: false
      }
      this.tasks.push(newTask);
      this.newTaskTitle = "";
    },
    doneTask(id) {
      let task = this.tasks.filter((task) => task.id === id)[0]; //na mesma linha nao precisa de chaves e return
      task.done = !task.done;
      console.log(`Id: ${task.id}. Done: ${task.done}.`);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id;
      });
    },
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
