<template>
  <div>
    <div class="row ms-4 me-1">
      <div class="bg-light p-4 mt-2">
        <h4 class="mb-3">Activity Log</h4>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead class="bg-primary text-white">
              <tr>
                <th>Invoice ID</th>
                <th>Client Name</th>
                <th>Payment Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Deshmukh</td>
                <td>Prohaska</td>
                <td>5.25$</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Deshmukh</td>
                <td>Gaylord</td>
                <td>9.25$</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sanghani</td>
                <td>Gusikowski</td>
                <td>15.25$</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Roshan</td>
                <td>Rogahn</td>
                <td>325.25$</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Joshi</td>
                <td>1.1.2021</td>
                <td>521.25$</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Nigam</td>
                <td>Eichmann</td>
                <td>5456.25$</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Nigam</td>
                <td>Eichmann</td>
                <td>5456.25$</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Nigam</td>
                <td>Eichmann</td>
                <td>5456.25$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div> 
  </div>
</template>

<style scoped>
.table td, .table th {
  padding: 20px;
}
.table th {
  font-size: 14px;
}
.table > :not(:first-child) {
 border-top: none;
}
.table-responsive {
  max-height: 430px;
}

</style>