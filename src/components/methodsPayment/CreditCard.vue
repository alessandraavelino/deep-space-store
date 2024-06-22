<template>
  <form @submit.prevent="submit">
    <v-text-field
      :counter="10"
      label="Nome do titular"
    ></v-text-field>

    <v-text-field
      :counter="7"
      label="Número do cartão"
    ></v-text-field>
    <v-row>
      <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Data de validade"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Código de segurança"
            hide-details
            required
          ></v-text-field>
        </v-col>
    </v-row>
  </form>
</template>
<script setup>

  import { ref } from 'vue'

</script>
