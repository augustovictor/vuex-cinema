export default {
    setMessages(state, messages) {
        messages.forEach((message) => {
            if(!state.messages.filter(msg => msg.type == message.type && msg.content == message.content).length) {
                state.messages.push(message);
            }
        });
    },
    setMovies(state, movies) {
        state.movies.push(...movies);
    },
    setMovie(state, movie) {
        state.movie = movie;
    },
    clearMovies(state) {
        state.movies = [];
    },
    removeMovie(state, movieId) {
        state.movies = state.movies.filter(movie => {
            return movie._id != movieId;
        })
        console.log(state.movies);
    }
}