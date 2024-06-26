<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            id="CEP"
            v-model="localFormData.CEP"
            label="CEP"
            :rules="[rules.required, rules.cep]"
            @input="validateForm"
            @blur="fetchAddress"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            id="state"
            v-model="localFormData.state"
            label="Estado"
            :rules="[rules.required]"
            @input="validateForm"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            id="city"
            v-model="localFormData.city"
            label="Cidade"
            :rules="[rules.required]"
            @input="validateForm"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            id="street"
            v-model="localFormData.street"
            label="Rua"
            :rules="[rules.required]"
            @input="validateForm"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            id="number"
            v-model="localFormData.number"
            label="Número"
            type="number"
            :rules="[rules.required]"
            @input="validateForm"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            id="complement"
            v-model="localFormData.complement"
            label="Complemento"
            @input="validateForm"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  props: {
    formData: Object
  },
  data() {
    return {
      valid: false,
      localFormData: { ...this.formData },
      rules: {
        required: value => !!value || 'Campo obrigatório.',
        cep: value => {
          const numericValue = value.replace(/\D/g, '');
          return /^(\d{5}-\d{3}|\d{8})$/.test(numericValue) || 'CEP inválido.';
        }
      }
    };
  },
  methods: {
    validateForm() {
      const isValid = this.localFormData.CEP && this.localFormData.state && this.localFormData.street && this.localFormData.number;
      this.$emit('formValidated', isValid);
      this.$emit('updateFormData', this.localFormData);
      return isValid;
    },
    async fetchAddress() {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${this.localFormData.CEP}/json`);
        const data = await response.json();

        if (data.erro) {
          return;
        }

        this.localFormData.state = data.uf;
        this.localFormData.city = data.localidade;
        this.localFormData.street = data.logradouro;

        this.validateForm();
      } catch (error) {
        console.error('Erro ao consultar API do ViaCEP:', error);
      }
    }
  },
  watch: {
    formData: {
      handler(newVal) {
        this.localFormData = { ...newVal };
      },
      deep: true
    }
  }
};
</script>
