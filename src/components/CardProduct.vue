<template>
  <v-card
    :disabled="loading"
    :loading="loading"
    class="mx-auto my-2"
    max-width="400"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      :src="offer.image"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>{{ offer.name }}</v-card-title>
    </v-card-item>

    <v-card-text>
      <v-row class="mx-0">
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          size="small"
          half-increments
          readonly
        ></v-rating>

        <div class="text-grey ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        R$ • {{ offer.price }}
      </div>

      <div class="my-4">{{ offer.description }}</div>
      <div class="my-2">
        <strong>Qtd. de páginas: </strong>{{ offer.numberPages }}
      </div>
      <div class="my-2">
        <strong>Editora: </strong>{{ offer.publisher }}
      </div>
      <div class="my-2">
        <strong>ISBN: </strong>{{ offer.isbn }}
      </div>
      <div class="my-2">
        <strong>Dimensões: </strong>{{ offer.dimensions }}
      </div>
      <div class="my-2">
        <strong>Linguagem: </strong>{{ offer.language }}
      </div>
      <div class="my-2">
        <strong>Autor (a): </strong>{{ offer.author }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    offerCode: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: true,
      offer: {}
    };
  },
  mounted() {
    this.fetchOffer();
  },
  methods: {
    async fetchOffer() {
      console.log("this.", this.offerCode)
      try {
        const response = await axios.get(`https://api.deepspacestore.com/offers/${this.offerCode}`);
        this.offer = response.data;
      } catch (error) {
        console.error('Erro ao buscar a oferta:', error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
