<template>
    <div>
        <form v-on:submit="addTodo">
            <h4>New Todo:</h4>
            <input v-model="title" type="text" name="title" placeholder="Add a new Title!">
            <input v-model="info" type="text" name="info-todo" placeholder="Add a new Description!">
            <input v-model="date" type="date" name="date" value="">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;

    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

export default {
    name: "AddTodo",
    components: {
        
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
        addTodo (e) {
            e.preventDefault();
            const newTodo = {
                id: makeid(9),
                title: this.title,
                date: this.date,
                info: this.info,
                user: this.$store.state.user.username,
                completed: false,
            };
            this.$emit("add-todo", newTodo);
            this.title = "";
            this.info = "";
            this.date = "";
        },
    },
    
    
}

</script>

<style scoped>
    form {
        display: grid;
    }
    input[type="text"] {
        
        padding: 5px;
    }
    input[type="submit"] {
        
    }
</style>