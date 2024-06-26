import FormPayment from './FormPayment.vue';

describe('FormPayment - CPF Validation', () => {
  it('Validates a valid CPF', () => {
    const validCPF = '529.982.247-25';
    cy.wrap(validCPF).should('match', /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/);
    cy.wrap(validCPF).should('satisfy', cpf => FormPayment.methods.validaCPF(cpf));
  });

  it('Rejects an invalid CPF', () => {
    const invalidCPF = '123.456.789-00';
    cy.wrap(invalidCPF).should('match', /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/);
    cy.wrap(invalidCPF).should('not.satisfy', cpf => FormPayment.methods.validaCPF(cpf));
  });
});
