<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex xs4 mb-2>
        <v-card>
          <v-img :src="book.volumeInfo.imageLinks.smallThumbnail" aspect-ratio="1"></v-img>

          <v-card-title primary-title>
            <div>
              <h2>{{book.volumeInfo.title}}</h2>
            </div>
          </v-card-title>

          <!-- <v-card-actions class="justify-center">
            <v-btn flat color="green" @click="singleMovie(item.imdbID)">View</v-btn>
          </v-card-actions>-->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "BookCard",
  props: ["book"]
};
</script>
