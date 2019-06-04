<template>
  <v-app dark>
    <v-content>
      <v-container>
        <player-title-bar></player-title-bar>
        <PlayerPlaylistPanel :playlist="playlist" :selectedTrack="selectedTrack" :selecttrack="selecttrack"></PlayerPlaylistPanel>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import PlayerTitleBar from './PlayerTitleBar.vue' // IMPORT the component
import PlayerPlaylistPanel from './PlayerPlaylistPanel.vue' // IMPORT the component
import { Howl } from 'howler'
export default {
  components: {
    PlayerTitleBar, // REGISTER the component
    PlayerPlaylistPanel
  },
  data() {
    return {
      playlist: [
        {
          title: "Streets of Sant'Ivo",
          artist: 'Ask Again',
          howl: null,
          display: true
        },
        {
          title: 'Remember the Way',
          artist: 'Ask Again',
          howl: null,
          display: true
        }
      ],
      selectedTrack: null
    }
  },
  methods: {
    selecttrack(track) {
      this.selectedTrack = track
    }
  },
  created() {
    this.playlist.forEach((track) => {
      //   let file = track.title.replace(/\s/g, '_')
      let file = 'http://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3'
      track.howl = new Howl({
        // src: [`./playlist/${file}.mp3`]
        src: [file]
      })
    })
  }
}
</script>
