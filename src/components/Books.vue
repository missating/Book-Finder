<template>
  <v-container>
    <h3 v-if="!books.length && !currentlySearching">No books Found</h3>
    <div v-else>
      <div v-for="(book, index) in books" :key="index">
        <book-card v-if="book" :book="book"></book-card>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import BookCard from '@/components/BookCard.vue'

export default {
  name: "Books",
  components: {
    BookCard
  },
  data() {
    return {
      
    }
  },
  computed: {
    books() {
      return this.$store.getters.getBooks;
    },
    searchTerm() {
      return this.$store.state.searchTerm;
    },
    currentlySearching() {
      return this.$store.state.currentlySearching;
    }
  }
};
</script>

