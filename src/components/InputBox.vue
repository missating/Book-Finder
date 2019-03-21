<template>
  <v-container>
    <v-layout align-center justify-center fixed>
      <v-text-field
        label="Search For Books by: Title, Author etc"
        class="input-box"
        v-model="searchQuery"
        v-on:keyup.enter="submit"
      ></v-text-field>
      <v-btn @click="submit" flat :disabled="!searchQuery">
        <span class="mr-2">Search</span>
      </v-btn>
    </v-layout>
    <v-container v-if="isFetching">
      <div class="text-xs-center">
        <v-progress-circular
          indeterminate
          :size="150"
          :width="8"
          color="black">
        </v-progress-circular>
      </div>
    </v-container>
    <v-container v-if="showSearchQuery && !isFetching">
      <p>Showing results for "{{ searchQuery }}"</p>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'InputBox',
  components: {},
  data() {
    return {
      searchQuery: '',
      showSearchQuery: false,
    };
  },

  methods: {
    submit() {
      this.$store.dispatch('getBooks', this.searchQuery);
      this.showSearchQuery = true;
    },
  },
  computed: {
    isFetching() {
      return this.$store.state.isFetching;
    },
  },
};
</script>

<style>
</style>
