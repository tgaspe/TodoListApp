<template>
    <div class="test-page">
        <FilterTool></FilterTool>
        <v-list
            flat
            three-line
        >
            <div >
                <v-list-item class="blue lighten-5">
                <template v-slot:default="{ active }">
                    <v-list-item-action>
                    <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                    <v-list-item-title>Notifications</v-list-item-title>
                    <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                    <v-list-item-subtitle><b>HotBoobs69</b></v-list-item-subtitle>
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
                            v-on:click="searchUser(user)"
                          >
                            <v-list-item-title>Edit</v-list-item-title>
                          </v-list-item>
                          <v-list-item
                            v-on:click="searchUser(user)"
                          >
                            <v-list-item-title>Archive</v-list-item-title>
                          </v-list-item>
                          <v-list-item
                            v-on:click="searchUser(user)"
                          >
                            <v-list-item-title>Delete</v-list-item-title>
                          </v-list-item>
                      </v-list>
                    </v-menu>

                </template>
                </v-list-item>
                <v-divider></v-divider>
            </div>
        </v-list>
    </div>
  </template>
  
<script>
import FilterTool from "../components/FilterTool.vue";

  export default {
    name: "TestPage",
    components: {
      FilterTool
    },
    data () {
      return {
      }
    },
  }
  
  </script>
  
  <style>
  
  </style>