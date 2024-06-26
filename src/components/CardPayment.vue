<template>
  <v-stepper v-model="step" :items="items" show-actions class="pa-4">
    <v-stepper-step :complete="formValidity.step1" id="address">
      <template v-if="step === 1">
        <FormPersonalData
          :formData="formData.personalData"
          @formValidated="handleFormValidated"
          @updateFormData="updateFormData"
        />
      </template>
    </v-stepper-step>

    <v-stepper-step :complete="formValidity.step2">
      <template v-if="step === 2" >
        <FormAddressDelivery
          :formData="formData.addressDelivery"
          @formValidated="handleFormValidated"
          @updateFormData="updateFormData"
        />
      </template>
    </v-stepper-step>

    <v-stepper-step :complete="formValidity.step3">
      <template v-if="step === 3">
        <FormPayment
          :formData="formData.payment"
          @formValidated="handleFormValidated"
          @updateFormData="updateFormData"
        />
      </template>
    </v-stepper-step>

    <template v-slot:prev>
      <v-btn @click="previousStep" :disabled="step === 1">{{ prevStepText }}</v-btn>
    </template>
    <template v-slot:next>
      <v-btn @click="nextStep" :disabled="!isCurrentStepValid">{{ nextStepText }}</v-btn>
    </template>
  </v-stepper>
</template>

<script>
import axios from 'axios';
import FormPersonalData from './formsPayment/FormPersonalData.vue';
import FormAddressDelivery from './formsPayment/FormAddressDelivery.vue';
import FormPayment from './formsPayment/FormPayment.vue';

export default {
  name: 'CardPayment',
  components: {
    FormPersonalData,
    FormAddressDelivery,
    FormPayment
  },
  props: {
    offerCode: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      step: 1,
      order: null,
      items: [
        'Informe seus dados',
        'Endereço de entrega',
        'Forma de pagamento',
      ],
      formValidity: {
        step1: false,
        step2: false,
        step3: false
      },
      formData: {
        personalData: {
          nomeCompleto: '',
          email: '',
          telefone: ''
        },
        addressDelivery: {},
        payment: {}
      }
    };
  },
  computed: {
    prevStepText() {
      return this.step === 1 ? 'Cancelar' : 'Anterior';
    },
    nextStepText() {
      return this.step === this.items.length ? 'Finalizar compra' : 'Próximo';
    },
    isCurrentStepValid() {
      return this.formValidity[`step${this.step}`];
    }
  },
  methods: {
    nextStep() {
      if (this.isCurrentStepValid) {
        if (this.step === this.items.length) {
          this.submitOrder();
        } else {
          this.step++;
        }
      }
    },
    previousStep() {
      if (this.step > 1) {
        this.step--;
      }
    },
    handleFormValidated(isValid) {
      this.formValidity[`step${this.step}`] = isValid;
    },
    updateFormData(data) {
      if (this.step === 1) {
        this.formData.personalData = data;
      } else if (this.step === 2) {
        this.formData.addressDelivery = data;
      } else if (this.step === 3) {
        this.formData.payment = data;
      }
    },
    async submitOrder() {
      console.log("linha 122")
      try {
        const response = await axios.post(`https://api.deepspacestore.com/offers/${this.offerCode}/create_order`, this.formData);
        console.log('Order submitted successfully:', response.config.data);

        console.log("this.order:", this.order);

        this.$router.push({
          path: '/order-completed',
          query: {
            orderData: JSON.stringify(response.config.data)
          }
        });
      } catch (error) {
        console.error('Error submitting order:', error);
      }
    }
  }
};
</script>
