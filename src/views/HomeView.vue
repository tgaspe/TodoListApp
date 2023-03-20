<template>
  <div class="home pa-6">
    <h2 class="text-center text-h4 font-weight-light">Todo-List</h2>
    <div class="username">
      <h2 :key="UserKey" class="text-h5 font-weight-light">Welcome {{ username }}</h2>
    </div>
    <div class="addTodo">
      <AddTodo v-on:add-todo="addItem"/>
    </div>
    <TodoList
      :key="TodosKey" 
      v-bind:todos="todos" 
      v-bind:archive="false" 
      v-on:delete-todo="deleteItem"  
      v-on:edition="editTodo"
    />
  </div>
</template>

<script>
import AddTodo from "../components/AddTodo.vue";
import TodoList from "../components/TodoList.vue";

export default {
  name: 'HomeView',
  components: {
    AddTodo,
    TodoList,
  },
  data () {
    return {
      TodosKey: 0,
      UserKey: 1000,
      todos: [],
      username: "User Undefined",
    }
  },
  methods: {
    forceRerender() {
      this.TodosKey += 1;
    },
    forceRerender1() {
      this.UserKey += 1;
    },
    deleteItem (id) {
      this.todos = this.todos.filter( todo => todo.id != id);
      this.$store.dispatch("deleteTodo", id);
    },
    addItem (newTodo) {
      this.todos = [...this.todos, newTodo];
      this.$store.dispatch("addToTodos", newTodo);
    },
    editTodo (editedTodo) {
      let i = 0; 
      while (i < this.todos.length) {
        if (this.todos[i].id == editedTodo.id) {
          console.log("Edition completed!");
          this.todos[i] = editedTodo;
        }
        i ++;
      }
      this.forceRerender();
      this.$store.dispatch("editTodo", editedTodo);
    },
  },
  mounted () {
    this.username = this.$store.state.user.username;
    this.todos = this.$store.state.todos;
  },
}
</script>

<style>
  .username {
    text-align: left;
    padding-bottom: 10px;
  }
  .addTodo {
    width: 350px;
  }
</style>
