<script>
import { state } from "../state.js"


export default {
    name: 'SearchBox',

    data() {
        return {
            state
        }
    }
}

</script>

<template>

        <div class="container-fluid bg-dark d-flex align-items-center py-2">

            <div>
                <h1 class="text-uppercase text-danger">boolfix</h1>
            </div>

            <div>
                <input type="search" v-model="state.config.params.query" @keyup.enter="$emit('performSearch')">
                <button @click="$emit('performSearch')">Search</button>
            </div>
        </div>

</template>