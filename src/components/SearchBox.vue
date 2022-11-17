<script>
import { state } from "../state.js"


export default {
    name: 'SearchBox',

    data() {
        return {
            state,
            
        }
    },
    methods:{
        
    },
    
}
</script>

<template>

        <div class="container-fluid bg-dark d-flex justify-content-evenly align-items-center py-2">

            <div>
                <h1 class="text-uppercase text-danger">boolfix</h1>
            </div>

            <div>
                <ul class="text-light">
                    <li><a  href="#" @click="" >Movie</a></li>
                    <li><a href="#" @click="" >Tv Show</a></li>
                </ul>
            </div>

            <div>
                <input type="search" v-model="state.config.params.query" @keyup.enter="$emit('performSearch')">
                <button @click="$emit('performSearch')">Search</button>
            </div>
        </div>

</template>