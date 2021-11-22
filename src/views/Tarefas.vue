<template>
  <div
    id="tarefas"
    style="background: #e9f4fb"
    class="tarefas d-flex justify-center align-center h-100 fill-height"
  >
    <v-container fluid class="fill-height pa-0">
      <v-row class="fill-height">
        <v-col cols="1" class="pa-0">
          <div>
            <Sidebar></Sidebar>
          </div>
        </v-col>
        <v-col cols="2" class="pa-0">
          <div>
            <Categories></Categories>
          </div>
        </v-col>
        <v-col cols="9" class="pa-0">
          <div class="container-todo">
            <div class="container-todo-flex">
              <h2>Minhas Tarefas</h2>
              <p>Olá Eduardo Pereira, você tem 4 tarefas pendentes.</p>
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
                          <v-list-item v-for="(item, i) in items" :key="i">
                            <v-list-item-title>{{
                              item.title
                            }}</v-list-item-title>
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Sidebar.vue";
import Categories from "../components/Categories.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Tarefas",
  components: {
    Navbar, Categories, Sidebar,
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Wake up",
          done: false,
        },
        {
          id: 2,
          title: "Get bananas",
          done: false,
        },
        {
          id: 3,
          title: "Eat bananas",
          done: false,
        },
      ],
      items: [{ title: "Editar" }, { title: "Excluir" }],
    };
  },
  methods: {
    doneTask(id) {
      let task = this.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
  },
};
</script>

<style>
.container-todo {
  max-width: 633px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.container-todo-flex {
  flex: 1;
}
</style>
