<template class="container">
    <div>
        <app-header></app-header>
        <div class="column">
           <messages></messages>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from './components/shared/header.vue'
import MessagesHelper from './components/helpers/messages.vue'

export default {
    components: {
        'app-header': Header,
        'messages': MessagesHelper
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
