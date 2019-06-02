<template>
  <v-app id="inspire" dark>
    <defaultNavigation :drawer="drawer"/>
    <v-toolbar color="red" dense fixed clipped-left app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-icon class="mx-3">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">AudioVyVy</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <v-layout>
          <v-flex>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import { mapActions } from 'vuex'
import * as TYPE from '.'
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  components: {
    defaultNavigation: () => import('@/container/DefaultNavigation')
  }
}
</script>
