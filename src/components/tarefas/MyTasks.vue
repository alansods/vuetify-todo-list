<template>
  <div class="container-tasks">
            <div class="container-tasks-flex">
              <h2>Minhas Tarefas</h2>
              <p>Olá <span class="information">{{nome}}</span>, você tem <span class="information text-decoration-underline">{{numeroTarefas}} tarefas</span> pendentes.</p>
              <v-list class="pt-0" flat>
                <div
                  v-for="task in tasks"
                  :key="task.id"
                  @click="doneTask(task.id)"
                  :class="{ 'blue lighten-5': task.done }"
                >
                  <v-list-item>
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
                  <v-divider></v-divider>
                </div>
              </v-list>
            </div>
          </div>
</template>

<script>

export default {
  name: "MyTasks",
  data() {
    return {
      nome: "Eduardo Pereira",
      numeroTarefas: "5",
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
    doneTask(id) {
      let task = this.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
};
</script>

<style lang="scss" scoped>

.container-tasks {
  max-width: 633px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.container-tasks-flex {
  flex: 1;
}

.information {
  color: #2693FF;
  font-weight: bold;
}


</style>
