<template>
<div>
  <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid"> 
        <a class="navbar-brand" href="#">Dashboard</a>
        <div class="d-flex">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search"> 
          <button class="btn btn-outline-warning" type="submit">Search</button> 
        </div>
      </div>
  </nav>
  <user-cards-data class="container-fluid p-4 mx-auto">

  </user-cards-data>
</div>
</template>

<script>
import UserCardsData from './UserCardsData.vue'
export default {
  components: { UserCardsData },

}
</script>

