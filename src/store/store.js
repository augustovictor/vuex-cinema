import Vue from 'vue'
import Vuex from 'vuex'
import Getters from './getters'
import Mutations from './mutations'
import Actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        messages: [],
        movies: []
    },
    getters: Getters,
    mutations: Mutations,
    actions: Actions
})