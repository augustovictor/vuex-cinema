import MoviesIndex from './components/movies/index.vue'
import MoviesNew from './components/movies/new.vue'
import MoviesShow from './components/movies/show.vue'

export default [
    { path: '/', component: MoviesIndex },
    { path: '/movies/new', component: MoviesNew },
    { path: '/movies/:id', component: MoviesShow }
];