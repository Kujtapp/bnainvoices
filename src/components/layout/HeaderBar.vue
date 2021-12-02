<template>
<div>
  <div class="bg-primary">
      <div class="row p-2 mx-2">
        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-6 my-auto">
          <h6 class="text-white my-auto">Dashboard</h6>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 d-flex">
          <div class="py-1">
            <div class="position-relative border-0"> 
              <span class="position-absolute end-0 me-2">
                <i class="fa fa-search text-secondary"></i>
              </span>
              <input class="form-control py-1 border-0 rounded-pill" placeholder="Search..."> 
            </div>
        </div>
        </div>
        <div class="col-1 d-flex my-auto justify-content-end">
          <i class="far fa-user-circle text-secondary fa-2x"></i>
          <h6 class="text-white ms-1 my-auto">Administrator</h6>
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

<style scoped>
.fa-search {
  margin-top: 9px;
}
</style>