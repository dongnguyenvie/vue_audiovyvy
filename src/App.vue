<template>
  <div id="app">
    <router-view/>
    <div class="text-xs-center loading-io" v-if="$store.state.loading">
      <v-progress-circular :size="50" color="#FF9800" indeterminate></v-progress-circular>
    </div>
  </div>
</template>

<style lang="scss">
// font
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons');
// style all
@import '@/assets/scss/style.scss';
</style>
