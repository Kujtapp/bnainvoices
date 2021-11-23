<template>
  <div class="row">
    <side-bar class="col-md-2 g-0"></side-bar>
    <header-bar class="col-md-10 g-0"></header-bar>
  </div>
</template>

<script>
import SideBar from './components/layout/SideBar.vue';
import HeaderBar from './components/layout/HeaderBar.vue';

export default {
  components: {
    SideBar,
    HeaderBar,
  },
  name: 'App',
}
</script>

<style lang="scss">

body{
  background-color: #F4F8FF;
  overflow-x: hidden;
  font-family: 'Roboto', sans-serif;
}
</style>
