<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="CEP"
            label="CEP"
            :rules="[rules.required, rules.cep]"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="state"
            label="Estado"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="city"
            label="Cidade"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="street"
            label="Rua"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="number"
            label="Número"
            type="number"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="complement"
            label="Complemento"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      CEP: '',
      state: '',
      city: '',
      street: '',
      number: '',
      complement: '',
      rules: {
        required: value => !!value || 'Campo obrigatório.',
        cep: value => {
          // Remove todos os caracteres não numéricos
          const numericValue = value.replace(/\D/g, '');

          // Aceita CEP no formato 12345-678 ou 12345678
          return /^(\d{5}-\d{3}|\d{8})$/.test(numericValue) || 'CEP inválido.';
        }
      }
    };
  }
};
</script>
