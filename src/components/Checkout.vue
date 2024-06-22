<template>
  <v-container>
    <h1>Finalize seu pedido</h1>
    <v-row>
      <v-col cols="12" md="4">
        <card-product />
      </v-col>
      <v-col cols="12" md="8">
        <card-payment />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardPayment from './CardPayment.vue';
import CardProduct from './CardProduct.vue'
export default {
  components: { CardProduct, CardPayment },
  name: 'Checkout',

}
</script>

<style>

</style>
