<template>
    <v-toolbar dense>
            <v-text-field
                hide-details
                prepend-icon="mdi-magnify"
                single-line
                v-model="searchValue"
            ></v-text-field>
    
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
      </v-toolbar>
  </template>
  
  <script>
  
  export default {
    name: "FilterTool",
    data () {
      return {
        username: "",
        title: "",
        userlist: [],
        searchValue: "",
      }
    },
    methods: {
      
    }, 
    mounted () {
      this.userlist = this.$store.state.userList;
    }  
  }
  
  </script>
  
  
  <style scoped>
    .toolbar {
        width: 100%
    }
</style>
 