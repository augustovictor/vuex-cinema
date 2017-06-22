<template>
    <div>
        <h1>Movies list</h1>
        <ul>
            <li v-for="movie in movies">
                <h3>Title: {{movie.title}}</h3>
                <h3>Description</h3>
                <p>{{movie.description}}</p>

            </li>
        </ul>
        <button @click.prevent="addMovies">Add Movies</button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    methods: {
        addMovies() {
            this.$store.dispatch('fetchMovies');
        }
    },
    computed: {
        ...mapGetters({
            movies: 'getMovies'
        })
    }
}
</script>

<style scoped>
li {
    display: block;
}
</style>