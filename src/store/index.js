import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: "My_name_is_in_use99",
      password: "password",
      fullname: "Matt Damon",
    },
    userList: [],
    archive: [
      {
        id: 1,
        title: "Walk",
        date: "16/03/23",
        info: "my fish",
        user: "BarackObama",
        completed: false,
      },
      {
        id: 2,
        title: "Buy",
        date: "17/03/23",
        info: "cat litter",
        user: "Terminator62",
        completed: false,
      },
      {
        id: 3,
        title: "Fix",
        date: "18/03/23",
        info: "login page",
        user: "LhamaLoverS2",
        completed: false,
      },
      {
        id: 4,
        title: "Run",
        date: "19/03/23",
        info: "away from my wife",
        user: "TomCruiseIsMylife",
        completed: false,
      },
    ],
    todos: [
      {
        id: 1,
        title: "Part-1",
        date: "16/03/23",
        info: "Todo App",
        user: "My_name_is_in_use99",
        completed: true,
      },
      {
        id: 2,
        title: "Part-2",
        date: "17/03/23",
        info: "Archive fn",
        user: "My_name_is_in_use99",
        completed: true,
      },
      {
        id: 3,
        title: "Part-3",
        date: "18/03/23",
        info: "login page",
        user: "My_name_is_in_use99",
        completed: true,
      },
      {
        id: 4,
        title: "Part-4",
        date: "19/03/23",
        info: "Search items with Name",
        user: "My_name_is_in_use99",
        completed: true,
      },
      {
        id: 5,
        title: "Part-5",
        date: "20/03/23",
        info: "Search items with Title",
        user: "My_name_is_in_use99",
        completed: true,
      },
      {
        id: 6,
        title: "Part-6",
        date: "21/03/23",
        info: "API Calls",
        user: "My_name_is_in_use99",
        completed: true,
      },
      {
        id: 7,
        title: "Submit",
        date: "21/03/23",
        info: "Get Ready for interview",
        user: "My_name_is_in_use99",
        completed: false,
      },
    ],
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user.username = payload.username;
      state.user.password = payload.password;
      state.userList.push(payload.username);
    },
    // addToUserList (state, payload) {
    //   let key = payload.username;
    //   state.userList[key] = payload;
    // },
    changeArchive (state, payload) {
      state.archive.push(payload);
    },
    changeTodos (state, payload) {
      state.todos.push(payload);
    },
    editATodo (state, payload) {
      let i = 0; 
      while (i < state.todos.length) {
        if (state.todos[i].id == payload.id) {
          state.todos[i] = payload;
        }
        i ++;
      }
    },
    deleteATodo (state, payload) {
      state.todos = state.todos.filter( todo => todo.id != payload);
    },
    deleteFromArchive (state, payload) {
      state.archive = state.archive.filter( todo => todo.id != payload);
    }
  },
  actions: {
    addToArchive (context, payload) {
      context.commit("changeArchive", payload);
    },
    addToTodos (context, payload) {
      context.commit("changeTodos", payload);
    },
    editTodo (context, payload) {
      context.commit("editATodo", payload);
    },
    deleteTodo (context, payload) {
      context.commit("deleteATodo", payload);
    },
    setAUser (context, payload) {
      context.commit("setUser", payload);
    },
    deleteArchive (context, payload) {
      context.commit("deleteFromArchive", payload);
    },
  },
  modules: {
  }
})
