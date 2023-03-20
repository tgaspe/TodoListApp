<template>
  <div>
    <v-list-item class="blue lighten-5">
      <template >
          <v-list-item-action>
            <v-checkbox :input-value="todo.completed" v-on:click="markCompleted"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title v-bind:class="{'text-decoration-line-through':todo.completed}">{{ todo.title }} </v-list-item-title>
            <v-list-item-subtitle>{{ todo.info }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ todo.date }}</v-list-item-subtitle>
            <v-list-item-subtitle class="user_name"><b>{{ todo.user }}</b></v-list-item-subtitle>
            <input ref="input_title" class="input" v-model="title" type="text" name="title" v-bind:placeholder="todo.title">
            <input ref="input_info" class="input" v-model="info" type="text" name="info-todo" v-bind:placeholder="todo.info">
            <input ref="input_date" class="input" v-model="date" type="date" value="">
            <button ref="confirm_btn"  v-on:click="submitEdit" class="edit-btn">confirm</button>
            <button ref="cancel_btn"   v-on:click="cancelEdit" class="edit-btn">cancel</button>
          </v-list-item-content>

          <v-menu offset-y>
            <template v-slot:activator="{on}">
              <v-btn
              class="rounded-xl blue lighten-5 elevation-0"
                v-on="on"
                text
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
                <v-list-item
                  v-on:click="editTodo"
                  v-if="!inArchive"
                  >
                  <v-list-item-title>Edit</v-list-item-title>
                </v-list-item>
                <v-list-item
                  v-on:click="archiveTodo"
                  v-if="!inArchive"
                >
                  <v-list-item-title>Archive</v-list-item-title>
                </v-list-item>
                <v-list-item
                  v-on:click="$emit('delete-item', todo.id)"
                >
                  <v-list-item-title>Delete</v-list-item-title>
                </v-list-item>
            </v-list>
          </v-menu>

      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: {
        inArchive: {
            type: Boolean,
            required: true,
        },
        todo: {
            type: Object,
            required: true,
        },
    },
    data () {
        return {
            title: "",
            info: "",
            date: "",
            user: "",
            
        }
    },
    methods: {
        markCompleted () {
            console.log("Todo completed")
            this.$emit('update:completed', !this.todo.completed);
        },
        editTodo () {
            // Showing edit buttons
            this.$refs.confirm_btn.style.display = "inline";
            this.$refs.cancel_btn.style.display = "inline";
            this.$refs.input_title.style.display = "flex";
            this.$refs.input_info.style.display = "flex";
            this.$refs.input_date.style.display = "flex";
        },
        cancelEdit () {
            // Hiddin other buttons
            this.$refs.confirm_btn.style.display = "none";
            this.$refs.cancel_btn.style.display = "none";
            this.$refs.input_title.style.display = "none";
            this.$refs.input_info.style.display = "none";
            this.$refs.input_date.style.display = "none";
        },
        submitEdit () {
            // Submit changes up to parents components 
            const editedTodo = {
                id: this.todo.id,
                title: this.title,
                date: this.date,
                info: this.info,
                user: this.$store.state.user.username,
                completed: false,
            }
            this.$emit('edition', editedTodo);

            // Hiddin other buttons
            this.$refs.confirm_btn.style.display = "none";
            this.$refs.cancel_btn.style.display = "none";
            this.$refs.input_title.style.display = "none";
            this.$refs.input_info.style.display = "none";
            this.$refs.input_date.style.display = "none";
        },
        archiveTodo () {
            // Send archived todo to completed page 
            console.log("emmiting archive event")
            console.log(this.todo);
            this.$emit("archiveTodo", this.todo);

        }
    }
}

</script>

<style scoped>
    .input {
        display: none;
    }
    .edit-btn {
        display: none;
    }
</style>