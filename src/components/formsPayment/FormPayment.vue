<template>
  <v-container fluid>
    <p>Informe o método de pagamento: </p>
    <v-radio-group v-model="radios">
      <v-radio label="Cartão de Crédito" value="card"></v-radio>
      <v-radio label="Boleto bancário" value="bank"></v-radio>
      <v-radio label="PIX" value="pix"></v-radio>
    </v-radio-group>
  </v-container>
  <v-container v-if="radios == 'card'">
    <CreditCard />
  </v-container>
  <v-container v-if="radios == 'bank'">
    <BankSlip />
  </v-container>
  <v-container v-if="radios == 'pix'">
    <Pix />
  </v-container>
</template>
<script>
import BankSlip from '../methodsPayment/BankSlip.vue';
import CreditCard from '../methodsPayment/CreditCard.vue';
import Pix from '../methodsPayment/Pix.vue'

  export default {
  name: 'FormPayment',
  components: {CreditCard, BankSlip, Pix
  },

    data () {
      return {
        radios: 'one',
      }
    },
  }
</script>
