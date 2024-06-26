<template>
  <v-container>
    <h1>Finalize seu pedido</h1>
    <v-row>
      <v-col cols="12" md="4">
        <!-- Passando offerCode como prop para CardProduct -->
        <card-product :offerCode="offerCode" />
      </v-col>
      <v-col cols="12" md="8">
        <card-payment :offerCode="offerCode"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardPayment from './CardPayment.vue';
import CardProduct from './CardProduct.vue';
import { useRoute } from 'vue-router';

export default {
  components: { CardProduct, CardPayment },
  name: 'Checkout',
  props: {
    offerCode: {
      type: String,
      required: true
    }
  },
  setup() {
    const route = useRoute();
    const offerCode = route.params.offerCode;

    return {
      offerCode
    };
  }
};
</script>

<style>
</style>
