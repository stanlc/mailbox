<template>
  <div class="container">
      <Header></Header>
      <nav-menu></nav-menu>
      <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Header'
import NavMenu from './components/NavMenu'
export default {
  name: 'app',
  components:{
    Header,
    NavMenu
  }
}
</script>

<style lang="scss">
html,body{
  margin:0;
  padding:0
}
 
</style>
