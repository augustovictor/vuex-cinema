import {api} from '../api'

export default {
    fetchMovies(context) {
        api.get('/movies')
        .then(res => {
            context.commit('setMovies', res.data);
        })
        .catch(err => {
            console.log({err});
            context.commit('setMessages', [{type: 'error', content: err.message}]);
        });
    },
    fetchMovieById(context, movieId) {
        api.get(`/movies/${movieId}`)
        .then(res => {
            context.commit('setMovie', res.data[0]);
        })
        .catch(err => {
            console.log(err);
        });
    },
    newMovie(context, movie) {
        api.post('/movies', movie)
        .then(res => {
            context.commit('setMessages', [{type: 'success', content: 'Movie created'}]);
        })
        .catch(err => {
            console.log({err});
            context.commit('setMessages', [{type: 'error', content: err.message}])
        });
    }
}