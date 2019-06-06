<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-side-icon>
        <v-icon>queue_music</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title v-html="post.title"></v-toolbar-title>
    </v-toolbar>
    <v-layout row wrap>
      <v-flex xs12 sm12 md9>
        <v-card-title primary-title>
          <aplayer class="audio-page__audio" :audio="post.audio" :loop.sync="loop" :lrcType="0"></aplayer>
        </v-card-title>
        <blockquote class="blockquote" v-html="post.content"></blockquote>
      </v-flex>
      <v-flex xs12 sm12 md3>
        <side-bar-audio :posts="post.categories.nodes[0].posts.nodes"></side-bar-audio>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
import SideBarAudio from './Sidebar'

export default {
  components: {
    SideBarAudio
  },
  props: ['post'],
  data: () => ({
    loop: 'none'
  })
}
</script>
