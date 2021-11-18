<template>
  <div>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-muted bg-dark vh-100" style="width: 240px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    </a>
    <a :href="logo"></a>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-muted">
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-muted">
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-muted">
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-muted">
          Customers
        </a>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  props: ['logo']
}
</script>