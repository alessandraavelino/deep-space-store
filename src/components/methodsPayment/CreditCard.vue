<template>
  <form @submit.prevent="submit">
    <v-text-field
      label="Nome do titular"
    ></v-text-field>

    <v-text-field
      label="Número do cartão"
      type="number"
    ></v-text-field>
    <v-row>
      <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="date"
            :rules="emailRules"
            label="Data de validade"
            type="date"

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

</script>
