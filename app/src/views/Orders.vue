<template>
  <div>
    <div class="orders">
      <h1>This is orders page</h1>
    </div>
    <div v-if="failed">
      <p>Error while fetching data</p>
    </div>
    <div v-else>
      <div v-if="loading">Chargement...</div>
      <div v-else v-for="order of orders" v-bind:key="order.id">
        <p>
          <strong>{{ order.name }}</strong>
        </p>
      </div>
    </div>    
  </div>
</template>

<script>
import { HTTP } from "../utils/http-common";

export default {
  data() {
    return {
      orders: [],
      loading: true,
      failed: false
    };
  },

  created() {
    HTTP.get('/orders')
      .then(response => {
        this.orders = response.data;
      })
      .catch(e => { 
        console.log(e)
        this.failed = true 
      })
      .finally(() => this.loading = false)
  }
}
</script>