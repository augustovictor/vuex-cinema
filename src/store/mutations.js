export default {
    setMessages(state, messages) {
        state.messages.push(...messages);
    },
    setMovies(state, movies) {
        state.movies.push(...movies);
    }
}