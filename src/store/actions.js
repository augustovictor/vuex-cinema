import { api, customHeaders } from '../api'

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
        api.post('/movies', movie, customHeaders.POST)
        .then(res => {
            context.commit('setMessages', [{type: 'success', content: 'Movie created'}]);
            context.router.go('/movies');
        })
        .catch(err => {
            console.log({err});
            context.commit('setMessages', [{type: 'error', content: err.message}])
        });
    },
    delMovie(context, movieId) {
        api.delete(`/movies/${movieId}`, customHeaders.DEL)
        .then(res => {
            context.commit('removeMovie', movieId);
            context.commit('setMessages', [{type: 'success', content: 'Movie removed successfully.'}]);
        }).catch(err => {
            context.commit('setMessages', [{type: 'error', content: err.message}])
            console.log({err});
        });
    }
}