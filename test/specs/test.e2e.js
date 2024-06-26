const assert = require('assert');

describe('Order Flow', () => {
  it('Deve completar o fluxo de pedido com sucesso', async () => {
    await browser.url('http://localhost:3000/checkout/1'); // Substitua pela URL do seu ambiente de desenvolvimento

    // Step 1: Complete form personal data
    await $('#fullName').setValue('Alessandra Avelino');
    await $('#email').setValue('alessandra@mail.com');
    await $('#phone').setValue('83996097405');

    const stepOneButton = $("button=Próximo");
    stepOneButton.click();

    // Wait
    await browser.waitUntil(async () => {
      const activeStep = await $('.v-stepper-item__title').getText();
      return activeStep === "Informe seus dados";
    }, { timeout: 8000, timeoutMsg: 'Não avançou para Endereço de entrega' });

    // Step 2: Complete from address delivery
    await $('#CEP').setValue('58255000');
    await $('#number').setValue('34');
    await $('#complement').setValue('Casa');
    await $('#street').setValue('Rua Teste');

    const stepTwoButton = $("button=Próximo");
    stepTwoButton.click();

    // Wait
    await browser.waitUntil(async () => {
      const activeStep = await $('.v-stepper-item__title').getText();
      console.log("active step address", activeStep)
      return activeStep === 'Informe seus dados';
    }, { timeout: 5000, timeoutMsg: 'Não avançou para Forma de pagamento' });

    // Step 3: Complete form payment data to fininsh order
    await $('[value="pix"]').click();
    await $('#cpf').setValue('91180244087');

    const stepThreeButton = $("button=Finalizar compra");
    stepThreeButton.click();

    // Waiting redirect to order completed (successful page)
    await browser.waitUntil(async () => {
      const currentUrl = await browser.getUrl();
      return currentUrl.includes('/order-completed');
    }, { timeout: 10000, timeoutMsg: 'Não redirecionou para a página de obrigado' });

    // Verify load
    const thankYouMessage = await $('h3').getText();
    console.log("thankyou", thankYouMessage)
    assert.strictEqual(thankYouMessage, 'Oba... Seu pedido foi realizado com sucesso! 😍🎉');

    // Screenshot of final stage
    await browser.saveScreenshot('./screenshots/order_completed.png');
  });
});
