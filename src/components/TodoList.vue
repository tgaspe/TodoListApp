<template>
    <v-list
        flat
        three-line
    >
        <div v-for="todo in todos" v-bind:key="todo.id" >
            <TodoItem 
                v-bind:todo="todo"  
                v-on:update:completed="todo.completed = $event" 
                v-on:delete-item="$emit('delete-todo', todo.id)" 
                v-on:edition="submitEditions" 
                v-on:archiveTodo="archiveTodos" 
                v-bind:inArchive="archive"
            />
        </div>
    </v-list>
</template>
  
<script>
import TodoItem from "./Todo.vue";

export default {
    name: "TodoList",
    components: {
        TodoItem
    },
    props: {
        archive: {
            type: Boolean,
            required: true,
        },
        todos: {
            type: Array,
            required: true,
        }
    },
    methods: {
        submitEditions (e) {
            this.$emit("edition", e);
        },
        archiveTodos (e) {
            console.log("received in todos")
            console.log(e);
            this.$store.dispatch("addToArchive", e);
            this.$emit('delete-todo', e.id);
        },
    }
}
</script>
<style>
</style>