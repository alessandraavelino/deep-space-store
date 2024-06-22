<template>
  <form @submit.prevent="submit">
    <v-text-field
      :counter="10"
      label="Nome completo"
    ></v-text-field>

    <v-text-field
      :counter="7"
      label="E-mail"
    ></v-text-field>

    <v-text-field
      label="Telefone"
    ></v-text-field>
  </form>
</template>
<script setup>

  import { ref } from 'vue'

</script>
