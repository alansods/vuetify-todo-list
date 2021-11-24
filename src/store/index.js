import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //data
  state: {
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
        title: "Colocar tudo em inglês.",
        done: false,
      },
    ],
    snackbar: {
      show: false
    }
  },
  //methods, but no api
  mutations: {
    //o padrao na função da mutation é: function(state, payload). State é o data daqui e o payload é o data que vai ser pegado do componente fora daqui.
    addTask(state, newTaskTitle) { 
      let newTask = {
        id: Date.now(), //gera um número único e diferente.
        title: newTaskTitle,
        done: false
      }
      state.tasks.push(newTask);
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0]; //na mesma linha nao precisa de chaves e return
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => {
        return task.id !== id;
      });
    },
    showSnackbar(state) {
      state.snackbar.show = true;
    }
  },
  //methods, can api
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
      commit('showSnackbar')
    }
  },
  //get data and change it before it goes to components
  getters: {
  },
  //break vuex store in multiple parts
  modules: {
  }
})
