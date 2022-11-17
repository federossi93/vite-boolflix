<script>
import { state } from "./state.js"
import axios from "axios";
import SearchBox from "./components/SearchBox.vue";
import AppCard from "./components/AppCard.vue";


export default {
  name: "App",
  data() {
    return {
      state,
    };
  },
  methods: {
    callApi() {
      axios(state.config)
        .then(response => {
          console.log(response.data);
          this.state.resultSerch = response.data;
        });
    }
  },
  components: {
    SearchBox,
    AppCard
}
}

</script>


<template>
  
<header>
  <SearchBox @performSearch="callApi"/>
</header>

  <main>
    <AppCard />
  </main>

</template>

<style scoped>

</style>
