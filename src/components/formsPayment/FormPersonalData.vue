<template>
  <form @submit.prevent="submit">
    <v-text-field
      label="Nome completo"
      :rules="[rules.required]"
    ></v-text-field>


    <v-text-field
      label="E-mail"
      :rules="[rules.required, rules.email]"
    ></v-text-field>

    <v-text-field
    v-model="telefone"
    label="Telefone"
    type="number"
    placeholder="(__) _____-____"
    :rules="[rules.required, rules.telefone]"
    maxlength='11'
  ></v-text-field>
  </form>
</template>

<script>

export default {
  data() {
    return {
      telefone: '',
      rules: {
        required: value => !!value || 'Campo obrigatório.',
        email: value => /.+@.+\..+/.test(value) || 'E-mail deve ser válido.',
        telefone: value => {
          // Remove qualquer caractere que não seja número
          const numericValue = value.replace(/\D/g, '');
          return numericValue.length === 11 || 'Telefone deve ter 11 dígitos (incluindo DDD).';
        },

      }
    };
  },
  methods: {

  }
};
</script>
