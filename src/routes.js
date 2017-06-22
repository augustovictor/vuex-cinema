import MoviesIndex from './components/movies/index.vue'
import MoviesNew from './components/movies/new.vue'

export default [
    { path: '/', component: MoviesIndex },
    { path: '/movies/new', component: MoviesNew }
];