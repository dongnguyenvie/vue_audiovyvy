<template>
  <div>
    <h1 v-html="post.title"></h1>
    <v-spacer></v-spacer>
    <blockquote class="blockquote" v-html="post.content"></blockquote>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import * as TYPE from '@/store/actionTypes'

export default {
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
  created() {
    const { id } = this.$route.query
    this.fetchContent({ id })
  }
}
</script>
