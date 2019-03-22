<template>
  <v-container>
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs6 v-for="(book, index) in books" :key="index">
          <book-card v-if="book" :book="book"></book-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import BookCard from "@/components/BookCard.vue";

export default {
  name: "Books",
  components: {
    BookCard
  },
  data() {
    return {};
  },
  computed: {
    books() {
      return this.$store.getters.getBooks;
    },
  }
};
</script>
