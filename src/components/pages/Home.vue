<template>
  <v-card>
    <v-container fluid grid-list-md>
      <v-layout row wrap v-for="(post, _i) in posts" :key="_i">
        <v-flex xs12 align-end flexbox>
          <h2 class="text-uppercase mt-3 mb-2">{{post.title}}</h2>
        </v-flex>
        <v-flex
          v-for="(detail, _key) in post.nodes"
          :key="_key"
          v-bind="{ [`xs${2}`]: true }"
          class="my-2"
        >
          <router-link
            tag="div"
            :to="{ name: 'single-audio', params: { slug: `${detail.uri}.html`}, query: {id: detail.id}}"
            class="h-100 cursor-point"
          >
            <v-hover>
              <v-card
                class="mx-auto"
                height="100%"
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
              >
                <div class>
                  <v-img
                    :lazy-src="detail.featuredImage.sourceUrl"
                    :src="detail.featuredImage.sourceUrl"
                    :aspect-ratio="11/16"
                  ></v-img>
                  <v-card-actions color="success" class="absolute home__ranking">
                    <v-spacer></v-spacer>
                    <v-rating
                      :value="Math.ceil(Math.random() * 5)"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>
                  </v-card-actions>
                </div>
                <v-divider light></v-divider>
                <v-card-actions v-html="detail.title"></v-card-actions>
              </v-card>
            </v-hover>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import * as TYPE from '@/store/actionTypes'

export default {
  data: () => ({
    card: {
      title: 'Pre-fab homes',
      src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      flex: 12
    }
  }),
  computed: {
    ...mapGetters({
      posts: `posts/${TYPE.GET_POSTS_FOR_HOME}`
    })
  },
  methods: {
    ...mapActions({
      fetchPosts: `posts/${TYPE.FETCH_POSTS_FOR_HOME_PAGE}`
    })
  },
  created() {
    this.fetchPosts()
    console.log(this.$store.state)
    console.log(this.posts)
  }
}
</script>
