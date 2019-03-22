<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container align-center justify-center>
        <v-layout>
          <v-flex xs12>
            <v-text-field
              label="Search For Books by: Title, Author etc"
              id="input-box"
              v-model="searchQuery"
              :rules="searchQueryRules"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md4>
            <v-btn :disabled="!valid" raised @click="validate">
              <span class>Search</span>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-container v-if="isFetching">
      <div class="text-xs-center">
        <v-progress-circular indeterminate :size="150" :width="8" color="black"></v-progress-circular>
      </div>
    </v-container>
    <v-container v-if="showSearchQuery && !isFetching">
      <p class="text">Showing results for "{{ searchQuery }}"</p>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'InputBox',
  components: {},
  data() {
    return {
      valid: true,
      searchQuery: '',
      searchQueryRules: [v => !!v || 'Title or Author of a book is required'],
      showSearchQuery: false
    };
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('getBooks', this.searchQuery);
        this.showSearchQuery = true;
      }
    },
  },
  computed: {
    isFetching() {
      return this.$store.state.isFetching;
    }
  }
};
</script>

<style>
</style>
