<template>
  <v-layout row wrap>
    <v-flex xs12>
      <content-audio :post="post"></content-audio>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import * as TYPE from '@/store/actionTypes'
import ContentAudio from './Content'

export default {
  components: {
    ContentAudio
  },
  computed: {
    ...mapGetters({
      post: `singleAudio/${TYPE.GET_POST}`
    })
  },
  methods: {
    ...mapActions({
      fetchContent: `singleAudio/${TYPE.FETCH_CONTENT_FOR_SINGLE_AUDIO}`
    })
  },
  async created() {
    const { id } = this.$route.query
    await this.fetchContent({ id })
    console.log(this.$store)
  }
}
</script>
