<template>
  <div class="ping">
    <Ping/>
  </div>
</template>
<script>
// import Ping from '@/components/example/Ping.vue'
import Ping from '@/components/audioManager/Manager.vue'

export default {
  components: {
    Ping
  },
  created () {
    this.$store.state.loading = false
  }
}
</script>
