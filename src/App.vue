<script>
import axios from 'axios';
import AppHeader from "./components/AppHeader.vue";
//import { store } from "./store.js";


export default {
  name: "App",

  components: {
    AppHeader,
  },

  data() {
    return {
      //store
      API_URL: "https://api.themoviedb.org/3/search/movie?api_key=aa06742d67521bd0cab47843c3bc5f06&language=en-US&query=Matrix&page=1&include_adult=false",
      series: null,
    };
  },

  methods: {
    callApi(url){
      axios.get(url)
      .then(response =>{
        console.log(response);
        this.series = response.data.results
      })
    }
    
  },

  mounted() {
    this.callApi(this.API_URL)
  }
}


</script>

<template>

  <AppHeader />

  <main>

    <div class="container">
      <div class="row row-cols-4">
        <div class="col" v-for="serie in series">
          <div class="serie card my-3">
            <div>Tilte: {{serie.title}}</div>
            <div>Original Title: {{serie.original_title}}</div>
            <div>Lenguage: {{serie.original_language}}</div>
            <div>Vote: {{serie.vote_average}}</div>
          </div>
        </div>
      </div>
    </div>

  </main>

</template>

<style scoped>

</style>
