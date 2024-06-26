<template>
  <v-container fluid class="d-flex align-center justify-center" style="height: 100vh;">
    <v-row align="center" justify="center">
      <v-col cols="2" class="text-center">
        <v-img
          :width="700"
          :src="successful"
          alt="Imagem representando compra bem sucedida!"
        ></v-img>
        <h3>Oba... Seu pedido foi realizado com sucesso! 😍🎉</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import succesful from '../../public/imgs/Successful.svg';

export default {
  data() {
    return {
      successful: succesful,
      orderData: null
    };
  },
  created() {
    if (this.$route.query.orderData) {
      this.orderData = JSON.parse(this.$route.query.orderData);
    }
  }
};
</script>
