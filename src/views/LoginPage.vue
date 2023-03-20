<template>
    <div class="Login-page pa-6">
      <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark class="light-blue lighten-2">
                        <v-toolbar-title >Login form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              prepend-icon="person"
                              name="login"
                              label="Username"
                              type="text"
                              v-model="username"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              prepend-icon="lock"
                              name="password"
                              label="Password"
                              type="password"
                              v-model="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn v-on:click="loginUser" dark class="light-blue lighten-2 font-weight-light">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "LoginPage",
    components: {
    },
    data () {
      return {
        username: "",
        password: "",
      }
    },
    methods: {
      loginUser (e) {
        e.preventDefault();
        const userinfo = {
            username: this.username,
            password: this.password,
        }
        this.$store.dispatch("setAUser", userinfo);
        this.$router.push({ name: 'todolist'});
      }
    },    
  }
  
  </script>
  
  <style>
  
  </style>