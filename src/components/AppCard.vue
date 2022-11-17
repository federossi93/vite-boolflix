<script>
import {state} from '../state.js'


export default{
    name:'AppCard',
    data(){
        return{
            state,
        }
    }
}

</script>

<template>

<div class="container" v-if="state.resultSerch">
      <div class="row row-cols-4">
        <div class="col my-4" v-for="movie in state.resultSerch.results">
          <div class="card">
            <div>{{ movie.title }}</div>
            <div>{{ movie.original_title }}</div>
            <div v-if="movie.original_language === 'en'">Lenguage: <span class="text-primary">En</span></div>
            <div v-if="movie.original_language === 'ja'">Lenguage: <span class="text-secondary">Ja</span></div>
            <div v-if="movie.original_language === 'hu'">Lenguage: <span class="text-danger">Hu</span></div>
            <div>{{ movie.vote_average }}</div>
          </div>
        </div>
      </div>
    </div>

</template>