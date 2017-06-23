import {api} from '../api'

export default {
    fetchMovies(context) {
        api.get('/movies')
        .then(res => {
            context.commit('setMovies', res.data);
        })
        .catch(err => {
            console.log(err.response)
            context.commit('setMessages', [{type: 'error', content: err}]);
        });
    }    
}