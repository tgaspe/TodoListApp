<template>
  <div class="archive pa-6">
    <!-- <HeaderPage/> -->
    <h2 class="text-center text-h4 font-weight-light">Archive</h2>
    <div class="username">
      <h2 :key="UserKey" class="text-h5 font-weight-light">Welcome {{ username }}</h2>
    </div>
    <v-toolbar dense>
            <v-text-field
                hide-details
                prepend-icon="mdi-magnify"
                single-line
                v-model="searchValue"
                v-on:keyup.enter="searchResult"
            ></v-text-field>
            <v-menu
              bottom
              left
            >
              <template v-slot:activator="{on}">
                <v-btn
                class="rounded-xl white lighten-5 elevation-0"
                  v-on="on"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(user, i) in users"
                  :key="i"
                  v-on:click="searchUser(user)"
                >
                  <v-list-item-title>{{ user }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            
    </v-toolbar>
    <!-- <h1>{{ searchValue }}</h1> -->
    <TodoList 
      v-bind:key="TodosKey" 
      v-bind:todos="search" 
      @archive="archiveTodo" 
      v-bind:archive="true" 
      v-on:delete-todo="deleteItem"
      />
    <!-- <FooterPage/> -->
  </div>
</template>

<script>
// import HeaderPage from "../components/layout/Header.vue";
// import FooterPage from "../components/layout/Footer.vue";
//import TodoItems from "../components/Todos.vue";
import TodoList from "../components/vuetify/TodoList.vue";
//import FilterTool from "../components/FilterTool.vue";

export default {
  name: "TasksCompleted",
  components: {
    TodoList,
  },
  data () {
    return {
      todos: [],
      search: [],
      username: "undefined",
      searchValue: "",
      UserKey: 1000,
      TodosKey: 3,
      users: [
        "-- unselect --"
      ],
    }
  },
  methods: {
    forceRerender() {
      this.TodosKey += 1;
    },
    archiveTodo(e) {
      console.log("archive received on taskscompleted!");
      this.todos.push(e);
    },
    deleteItem (id) {
      this.todos = this.todos.filter( todo => todo.id != id);
      this.search = this.todos;
      this.$store.dispatch("deleteArchive", id);
      this.forceRerender();
    },
    searchResult () {
      let resultSearch = [];
      for(let i = 0; i < this.todos.length; i ++ ){
        if (this.todos[i].user.toLowerCase().includes(this.searchValue.trim().toLowerCase()) || this.todos[i].title.toLowerCase().includes(this.searchValue.trim().toLowerCase())  ) {
          resultSearch.push(this.todos[i]);
        }
      }
      //this.search = this.todos.filter( (todo) => todo.title.toLowerCase().includes(this.searchValue.trim().toLowerCase()) );
      this.search = resultSearch;
      console.log("search completed!"); 
    },
    searchUser (input) {
      console.log(input);
      if (input == "-- unselect --") {
        this.search = this.todos;
        return;
      }

      let resultSearch = [];
      for(let i = 0; i < this.todos.length; i ++ ){
        if (this.todos[i].user.toLowerCase() == input.trim().toLowerCase() ) {
          resultSearch.push(this.todos[i]);
        }
      }
      //this.search = this.todos.filter( (todo) => todo.title.toLowerCase().includes(this.searchValue.trim().toLowerCase()) );
      this.search = resultSearch;
      console.log("search user selected completed!"); 
    },
    collectAllUsers () {
      for(let i = 0; i < this.todos.length; i ++ ){
        this.users.push(this.todos[i].user);
      }
    }
  },
  mounted () {
    this.todos = this.$store.state.archive;
    this.collectAllUsers();
    this.search = this.todos;
    this.username = this.$store.state.user.username
  },  
}

</script>

<style>
  .username {
    text-align: left;
    padding-bottom: 10px;
  }
</style>