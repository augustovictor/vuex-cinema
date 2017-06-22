<template>
    <div>
        <h1>Movies list</h1>
        <ul>
            <li v-for="movie in movies">
                {{movie}}
            </li>
        </ul>
        <button @click.prevent="addMovies">Add Movies</button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

const moviesList = [
    {title: 'Movie 1', desc: 'Desc movie 1'}
];

export default {
    methods: {
        addMovies() {
            this.$store.dispatch('fetchMovies', moviesList);
        }
    },
    computed: {
        ...mapGetters({
            movies: 'getMovies'
        })
    }
}
</script>