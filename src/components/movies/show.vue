<template>
    <div>
        <div class="columns">
            <h1 class="title column">
                {{ movie.title }}
            </h1>
        </div>

        <div class="columns">
            <p class="column">
                {{ movie.description }}
            </p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    computed: {
        ...mapGetters({
            movie: 'getMovie'
        })
    },
    created() {
        this.$store.dispatch('fetchMovieById', this.id);
    }
}
</script>