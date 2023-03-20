<template>
        <v-app-bar
          color="primary"
        >
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>TODOAPP</v-toolbar-title>
        </v-app-bar>
  </template>
  
  <script>
    export default {
        name: "NavBar",
        data: () => ({
            drawer: false,
            group: null,
            items: [
            {
                title: 'Foo',
                value: 'foo',
            },
            {
                title: 'Bar',
                value: 'bar',
            },
            {
                title: 'Fizz',
                value: 'fizz',
            },
            {
                title: 'Buzz',
                value: 'buzz',
            },
            ],
        }),
        watch: {
            group () {
            this.drawer = false
            },
        },
        }
  </script>