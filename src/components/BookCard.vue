<template>
  <v-container>
    <v-card>
      <v-img :src="book.volumeInfo.imageLinks.thumbnail" aspect-ratio="1"></v-img>

      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{book.volumeInfo.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Authors:</v-list-tile-title>
            <v-list-tile-sub-title
              v-for="(author, index) in book.volumeInfo.authors"
              :key="index"
            >{{author}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Published Date:</v-list-tile-title>
            <v-list-tile-sub-title>{{book.volumeInfo.publishedDate}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-btn flat color="black" @click="readMore">Book Info</v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'BookCard',
  props: ['book'],
  data() {
    return {};
  },
  methods: {
    readMore() {
      window.open(this.book.volumeInfo.infoLink);
    },
  },
};
</script>
