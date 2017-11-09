<template>
  <div id="app">

    <img src="./assets/logo.png"><span class="logo">-BLOG</span>
    <navRoute/>
    <router-view/>
  </div>
</template>

<script>
import nav from './components/nav';

export default {
  name: 'app',
  components: {
    navRoute: nav,
  },
};
</script>

<style>
.logo{
  font-size: 100px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
