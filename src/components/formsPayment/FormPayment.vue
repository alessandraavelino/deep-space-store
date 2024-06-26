<template>
  <v-container fluid>
    <p>Informe o método de pagamento: </p>
    <v-radio-group v-model="localFormData.paymentMethod" @change="validateForm">
      <v-radio label="Cartão de Crédito" value="card"></v-radio>
      <v-radio label="Boleto bancário" value="bank"></v-radio>
      <v-radio label="PIX" value="pix"></v-radio>
    </v-radio-group>
  </v-container>
  <v-container v-if="localFormData.paymentMethod === 'card'">
    <CreditCard />
  </v-container>
  <v-container v-if="localFormData.paymentMethod === 'bank'">
    <BankSlip />
  </v-container>
  <v-container v-if="localFormData.paymentMethod === 'pix'">
    <Pix />
  </v-container>
  <v-text-field
    class="px-4"
    label="Informe seu CPF"
    v-model="localFormData.cpf"
    :rules="[rules.required, rules.cpf]"
    @input="validateForm"
  ></v-text-field>
</template>

<script>
import BankSlip from '../methodsPayment/BankSlip.vue';
import CreditCard from '../methodsPayment/CreditCard.vue';
import Pix from '../methodsPayment/Pix.vue';

export default {
  name: 'FormPayment',
  components: { CreditCard, BankSlip, Pix },
  props: {
    formData: Object
  },
  data() {
    return {
      localFormData: { ...this.formData },
      rules: {
        required: value => !!value || 'Campo obrigatório.',
        cpf: value => this.validaCPF(value) || 'CPF inválido.'
      }
    };
  },
  methods: {
    validateForm() {
      const isValid = this.localFormData.paymentMethod && this.localFormData.cpf && this.validaCPF(this.localFormData.cpf);
      this.$emit('formValidated', isValid);
      this.$emit('updateFormData', { ...this.localFormData });
      return isValid;
    },
    formatCPF(event) {
      let cpf = event.target.value.replace(/\D/g, '');
      if (cpf.length > 11) {
        cpf = cpf.slice(0, 11);
      }
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      this.localFormData.cpf = cpf;
    },
    validaCPF(cpf) {
      cpf = cpf.replace(/[^\d]+/g, '');

      if (cpf.length !== 11) return false;

      if (/^(\d)\1+$/.test(cpf)) return false;

      let sum = 0;
      let remainder;

      for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
      }

      remainder = (sum * 10) % 11;

      if (remainder === 10 || remainder === 11) {
        remainder = 0;
      }

      if (remainder !== parseInt(cpf.substring(9, 10))) return false;

      sum = 0;

      for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
      }

      remainder = (sum * 10) % 11;

      if (remainder === 10 || remainder === 11) {
        remainder = 0;
      }

      if (remainder !== parseInt(cpf.substring(10, 11))) return false;

      return true;
    }
  },
  watch: {
    formData: {
      handler(newVal) {
        this.localFormData = { ...newVal };
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
