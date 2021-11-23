<template>
<div>
  <div class="bg-primary">
      <div class="row p-2">
        <div class="col-9 my-auto">
          <h5 class="text-white my-auto">Dashboard</h5>
        </div>
        <div class="col-3 d-flex">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search"> 
          <button class="btn btn-secondary text-white ml-2" type="submit">Search</button> 
        </div>
      </div>
  </div>
  <user-cards-data class="container-fluid p-4 mx-auto"></user-cards-data>
  <table-data class="container-fluid"></table-data>
  <div class="row">
  <activity-log class="col-8"></activity-log>
  <recent-payments class="col-4"></recent-payments>
  </div>
</div>
</template>

<script>
import UserCardsData from './UserCardsData.vue'
import TableData from './TableData.vue'
import ActivityLog from './ActivityLog.vue'
import RecentPayments from './RecentPayments.vue'
export default {
  components: { 
    UserCardsData,
    TableData,
    ActivityLog,
    RecentPayments
  },

}
</script>

