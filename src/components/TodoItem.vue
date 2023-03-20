<template>
    <div class="todo-item" v-bind:class="{'is-completed':todo.completed}" >
        <input type="checkbox" v-on:change="markCompleted" id="checkbox">
        <h3 id="title">{{ todo.title }}</h3>
        <p id="info"> {{ todo.info }} </p>
        <p id="user">By user: {{ todo.user }} </p>
        <h3 id="date">{{ todo.date }} </h3>
        <input ref="input_title" class="input" v-model="title" type="text" name="title" v-bind:placeholder="todo.title">
        <input ref="input_info" class="input" v-model="info" type="text" name="info-todo" v-bind:placeholder="todo.info">
        <input ref="input_date" class="input" v-model="date" type="date" value="">
                
        <button ref="edit_btn" v-if="!inArchive" id="edit" v-on:click="editTodo">edit </button>
        <button ref="confirm_btn"  v-on:click="submitEdit" class="edit-btn">confirm</button>
        <button ref="cancel_btn"   v-on:click="cancelEdit" class="edit-btn">cancel</button>

        <button v-if="!inArchive" id="archive" ref="archive_btn" v-on:click="archiveTodo" class="archive">archive </button>
        <button ref="delete_btn" v-on:click="$emit('delete-item', todo.id)" class="del">x </button>
        
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
                // Hiddin other buttons
                this.$refs.edit_btn.style.display = "none";
                this.$refs.archive_btn.style.display = "none";
                this.$refs.delete_btn.style.display = "none";

            },
            cancelEdit () {
                // Hiddin other buttons
                this.$refs.confirm_btn.style.display = "none";
                this.$refs.cancel_btn.style.display = "none";
                this.$refs.input_title.style.display = "none";
                this.$refs.input_info.style.display = "none";
                this.$refs.input_date.style.display = "none";
                // Showing other buttons
                this.$refs.edit_btn.style.display = "inline";
                this.$refs.archive_btn.style.display = "inline";
                this.$refs.delete_btn.style.display = "inline";
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
                // Showing other buttons
                this.$refs.edit_btn.style.display = "inline";
                this.$refs.archive_btn.style.display = "inline";
                this.$refs.delete_btn.style.display = "inline";

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

    #checkbox {
        display: inline;
    }

    .todo-item {
        background-color: yellow;
    }

    .todo-item h3 {
        display: inline;
    }

    #info {
        display: inline;
    }

    #date {
        
    }
    .is-completed {
        text-decoration: line-through;
    }
    .del {
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
        
    }

    #edit {
        background: #757373;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }

    #archive {
        background: #6f6565;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
    .input {
        display: none;
    }
    .edit-btn {
        display: none;
    }

</style>