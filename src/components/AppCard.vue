<script>
import { state } from '../state.js'


export default {
  name: 'AppCard',
  data() {
    return {
      state,
    }
  }
}

</script>

<template>

  <div class="container" v-if="state.resultSerch">
    <div class="row row-cols-4">
      <div class="col my-4" v-for="movie in state.resultSerch.results">
        <div class="card main_card position-relative">
          <img :src="state.image + movie.poster_path" alt="">
          <div class="component_card text-light">
            <h3 class="mb-3">{{ movie.title }}</h3>
            <h6 class="mb-2">{{ movie.original_title }}</h6>
            <h5 v-if="movie.original_language === 'en'">Lenguage: <span class="text-primary">En</span></h5>
            <h5 v-if="movie.original_language === 'ja'">Lenguage: <span class="text-secondary">Ja</span></h5>
            <h5 v-if="movie.original_language === 'hu'">Lenguage: <span class="text-danger">Hu</span></h5>
            <h5 class="mt-5"> Vote: <span class="text-warning">{{ Math.round(movie.vote_average / 2) }}</span></h5>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
.main_card:hover img {
  filter: brightness(0.3);
}

.main_card:hover .component_card {
  display: block;
}

.component_card {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>