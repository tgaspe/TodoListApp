<template>
  <v-app id="inspire">
    <v-app-bar app class="light-blue lighten-2">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title >
        <span class="font-weight-light">TODO</span>
        <span class="white--text ">LIST</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
        theme="dark"
        v-model="drawer"
        app
      >
        <v-list nav>
          <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox">
            <svg-icon type="mdi" :path="path1"></svg-icon>
            <router-link to="/todolist" class="pa-2">TODO-LIST</router-link>
          </v-list-item>
          <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors" value="supervisors">
            <svg-icon type="mdi" :path="path2"></svg-icon>
            <router-link to="/about" class="pa-2">ARCHIVE</router-link>
          </v-list-item>
          <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin">
            <svg-icon type="mdi" :path="path3"></svg-icon>
            <router-link to="/albo" class="pa-2">ALBO</router-link>
          </v-list-item>
          <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin">
            <svg-icon type="mdi" :path="path4"></svg-icon>
            <router-link to="/" class="pa-2">LOGOUT</router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-main app>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiFormatListCheckbox } from '@mdi/js';
import { mdiArchiveOutline } from '@mdi/js';
import { mdiBookOpenVariant } from '@mdi/js';
import { mdiLogoutVariant } from '@mdi/js';

  export default {
    name: "App",
    components: {
      SvgIcon
    },
    data: () => ({ 
      drawer: false,
      path1: mdiFormatListCheckbox, 
      path2: mdiArchiveOutline,
      path3: mdiBookOpenVariant,
      path4: mdiLogoutVariant,
    }),

  };
</script>

