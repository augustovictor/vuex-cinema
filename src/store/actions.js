export default {
    fetchMovies(context, movies) {
        context.commit('setMovies', movies);
    }    
}