<template class="container">
    <div>
        <app-header></app-header>
        <div class="column">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from './components/shared/header.vue'

export default {
    components: {
        'app-header': Header
    }
}
</script>

<style>
@import '../node_modules/bulma/css/bulma.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
