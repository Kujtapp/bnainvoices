<template>
<div>
  <div class="bg-primary">
      <div class="row p-2 mx-2">
        <div class="col-9 my-auto">
          <h5 class="text-white my-auto">Dashboard</h5>
        </div>
        <div class="col-3 d-flex">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search"> 
          <button class="btn btn-secondary text-white ml-2" type="submit">Search</button> 
        </div>
      </div>
  </div>
  <user-cards-data class="container-fluid mt-4 mx-auto"></user-cards-data>
  <table-data class="container-fluid"></table-data>
  <div class="row">
    <invoices-in-out class="col-6"></invoices-in-out>
    <recent-payments class="col-6"></recent-payments>
  </div>
  <activity-log class="col-12"></activity-log>
  <footer-view></footer-view>
</div>
</template>

<script>
import UserCardsData from './UserCardsData.vue'
import TableData from './TableData.vue'
import ActivityLog from './InvoicesInOut.vue'
import RecentPayments from './RecentPayments.vue'
import InvoicesInOut from './ActivityLog.vue'
import FooterView from './FooterView.vue'

export default {
  components: { 
    UserCardsData,
    TableData,
    ActivityLog,
    RecentPayments,
    InvoicesInOut,
    FooterView
  },

}
</script>

