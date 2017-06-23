<template>
    <div>
        <messages></messages>
        <div class="columns">
            <h1 class="title column">
                Movies list [{{filteredMovies.length}}]
            </h1>
        </div>

        <div class="columns">
            <div class="column ">
                <button class="button is-primary" @click.prevent="refreshMovies">Refresh <i class="fa fa-refresh"></i></button>
                <button class="button is-primary" @click.prevent.once="addMovies">Fetch Movies</button>
            </div>
        </div>
        
        <div v-if="movies.length" id="fetched-movies-container">
            <search @resultFromSearch="setFilteredResults($event)" :data="movies" attrToFilter="title"></search>
            
            <table v-if="filteredMovies.length" class="table">
                <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="movie in filteredMovies">
                        <td>{{movie.title}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MessagesHelper from '../helpers/messages.vue'
import SearchComponent from '../../mixins/search'
import SearchComponentApp from '../shared/search.vue'

export default {
    data() {
        return {
            search: '',
            filteredMovies: []
        }
    },
    components: {
        'messages':MessagesHelper,
        'search': SearchComponentApp
    },
    methods: {
        addMovies() {
            this.$store.dispatch('fetchMovies');
        },
        refreshMovies() {
            this.$store.commit('clearMovies');
            this.$store.dispatch('fetchMovies');
        },
        setFilteredResults(filteredResults) {
            this.filteredMovies = filteredResults;
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