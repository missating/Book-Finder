<template>
  <v-container>
    <h3 v-if="!books.length && searchTerm && !isFetching">No books Found</h3>
    <v-container v-else grid-list-xl>
      <v-layout wrap>
        <v-flex xs6 v-for="(book, index) in books" :key="index">
          <book-card v-if="book" :book="book"></book-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import BookCard from '@/components/BookCard.vue';

export default {
  name: 'Books',
  components: {
    BookCard,
  },
  data() {
    return {};
  },
  computed: {
    books() {
      return this.$store.getters.getBooks;
    },
    searchTerm() {
      return this.$store.state.searchTerm;
    },
    isFetching() {
      return this.$store.state.fetching;
    },
  },
};
</script>
