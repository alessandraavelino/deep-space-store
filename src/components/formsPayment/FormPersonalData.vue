<template>
  <form @submit.prevent="submitForm">
    <v-text-field
    id="fullName"
      v-model="localFormData.fullName"
      label="Nome completo"
      :rules="[rules.required]"
      @input="validateForm"
    ></v-text-field>

    <v-text-field
    id="email"
      v-model="localFormData.email"
      label="E-mail"
      :rules="[rules.required, rules.email]"
      @input="validateForm"
    ></v-text-field>

    <v-text-field
    id="phone"
      v-model="localFormData.phone"
      label="Telefone"
      type="number"
      placeholder="(__) _____-____"
      :rules="[rules.required, rules.phone]"
      maxlength="14"
      @input="validateForm"
    ></v-text-field>
  </form>
</template>

<script>
export default {
  props: {
    formData: Object
  },
  data() {
    return {
      localFormData: { ...this.formData },
      rules: {
        required: value => !!value || 'Campo obrigatório.',
        email: value => /.+@.+\..+/.test(value) || 'E-mail deve ser válido.',
        phone: value => {
          const numericValue = value.replace(/\D/g, '');
          return numericValue.length === 11 || 'Telefone deve ter 11 dígitos (incluindo DDD).';
        },
      },
    };
  },
  methods: {
    validateForm() {
      const isValid = this.localFormData.fullName && this.localFormData.email && this.localFormData.phone;
      this.$emit('formValidated', isValid);
      this.$emit('updateFormData', this.localFormData);
      return isValid;
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
