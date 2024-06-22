<template>
  <v-stepper v-model="step" :items="items" show-actions class="pa-4">
    <!-- Etapa 1: Informe seus dados -->
    <v-stepper-step :complete="step > 1">
      <template v-if="step === 1">
        <FormPersonalData />
      </template>
    </v-stepper-step>

    <!-- Etapa 2: Endereço de entrega -->
    <v-stepper-step :complete="step > 2">
      <template v-slot:default v-if="step === 2">
        <FormAddressDelivery />
      </template>
    </v-stepper-step>

    <!-- Etapa 3: Forma de pagamento -->
    <v-stepper-step>
      <template v-slot:default v-if="step === 3">
        <FormPayment />
      </template>
    </v-stepper-step>

    <!-- Slot para personalizar os botões -->
    <template v-slot:prev>
      <v-btn @click="step--" :disabled="step === 1">{{ prevStepText }}</v-btn>
    </template>
    <template v-slot:next>
      <v-btn @click="step++" :disabled="step === items.length">{{ nextStepText }}</v-btn>
    </template>
  </v-stepper>
</template>

<script>
import FormPersonalData from './formsPayment/FormPersonalData.vue';
import FormAddressDelivery from './formsPayment/FormAddressDelivery.vue';
import FormPayment from './formsPayment/FormPayment.vue'

export default {
  name: 'CardPayment',
  components: {
    FormPersonalData,
    FormAddressDelivery,
    FormPayment
  },
  data() {
    return {
      step: 1,
      items: [
        'Informe seus dados',
        'Endereço de entrega',
        'Forma de pagamento',
      ],
    };
  },
  computed: {
    prevStepText() {
      return this.step === 1 ? 'Cancelar' : 'Anterior';
    },
    nextStepText() {
      return this.step === this.items.length ? 'Finalizar' : 'Próximo';
    }
  },
};
</script>

<style scoped>
/* Estilos opcionais */
</style>
