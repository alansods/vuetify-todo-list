import Vue from 'vue'
import Vuex from 'vuex'
//plugin localbase para localstorage
import Localbase from 'localbase'

let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  //data
  state: {
    search: null,
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
      show: false,
      text: ''
    }
  },
  //methods que alteram os states. So pode alterar os states pela mutation.
  //Não podem ser chamadas diretamente, são registradas aqui e tem que ser chamada pelas actions.
  mutations: {
    //o padrao na função da mutation é: function(state, payload). State é o data daqui e o payload é a informação que vai ser pegado do componente fora daqui.
    addTask(state, newTaskTitle) { 
      let newTask = {
        id: Date.now(), //gera um número único e diferente.
        title: newTaskTitle,
        done: false
      }
      state.tasks.unshift(newTask);
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
    updateTaskTitle(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0]
      task.title = payload.title
    },
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout)
    }
  },
  //methods que chamam as mutations
  //method('context', payload). Onde context é quase o vuex inteiro, pode pegar quase tudo q tem aqui.
  //pra chamar action usa dispatch e pra mutation usa commit
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
      commit('showSnackbar', 'Tarefa adicionada.')
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id)
      commit('showSnackbar', 'Tarefa excluída.')
    },
    emptyFieldWarning ({ commit }) {
      commit('showSnackbar', 'O campo está vazio. Digite alguma tarefa!')
    },
    updateTaskTitle({ commit }, payload) {
      commit('updateTaskTitle', payload)
      commit('showSnackbar', 'Título da tarefa atualizado.')
    }
  },
  //é como computed e watch.
  getters: {
  },
  //break vuex store in multiple parts
  modules: {
  }
})
