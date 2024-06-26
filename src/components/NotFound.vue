<template>
  <v-container fluid class="d-flex align-center justify-center" style="height: 100vh;">
    <v-row align="center" justify="center">
      <v-col cols="2" class="text-center">
        <v-img
          :width="700"
          :src="notFound"
          alt="Imagem representando compra bem sucedida!"
        ></v-img>
        <h3>Ops... Página não encontrada! (404)</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import notFound from '../../public/imgs/404 Error.svg';

export default {
  data() {
    return {
      notFound: notFound,
    };
  },
};
</script>
