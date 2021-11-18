<template>
  <div>
    <side-bar :logo="logo"></side-bar>
  </div>
</template>

<script>
import SideBar from './components/layout/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar
  },
  data() {
    return {
      logo: '../assets/bna-invoices.png'
    }
  }
}
</script>

<style lang="scss">

</style>
