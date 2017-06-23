<template>
    <div>
        <messages></messages>
        <h1 class="title">Movies list</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="movie in movies">
                    <td>{{movie.title}}</td>
                    <td>{{movie.description}}</td>
                </tr>
            </tbody>
        </table>
        <button class="button is-primary" @click.prevent="addMovies">Add Movies</button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MessagesHelper from '../helpers/messages.vue'

export default {
    components: {
        'messages':MessagesHelper
    },
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