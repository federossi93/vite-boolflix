import { reactive } from "vue";


export const state = reactive({
   config: {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      
      params: {
         api_key: 'aa06742d67521bd0cab47843c3bc5f06',
         query: ''
      }
   },
   resultSerch: null,
   image:'http://image.tmdb.org/t/p/w500/'

})