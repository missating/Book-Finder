<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-text-field
        label="Search For Books by: Title, Author etc"
        class="input-box"
        v-model="searchQuery"
      ></v-text-field>
      <v-btn @click="submit">
        <span class="mr-2">Search</span>
      </v-btn>
    </v-layout>
    <v-container v-if="currentlySearching">
      <div class="text-xs-center">
        <v-progress-circular indeterminate :size="150" :width="8" color="green"></v-progress-circular>
      </div>
    </v-container>
    <v-container v-if="showSearchQuery && !currentlySearching">
      <p>Showing results for "{{ searchQuery }}"</p>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "InputBox",
  components: {},
  data() {
    return {
      searchQuery: "",
      showSearchQuery: false
    };
  },

  methods: {
    submit() {
      this.$store.dispatch("getBooks", this.searchQuery);
      this.showSearchQuery = true;
    }
  },
  computed: {
    currentlySearching() {
      return this.$store.state.currentlySearching;
    }
  }
};
</script>

<style>
</style>
