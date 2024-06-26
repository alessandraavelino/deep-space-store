// main.js

// Plugins
import { registerPlugins } from '@/plugins';

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';
import router from './router'; //

// Função para inicializar o worker
async function prepareApp() {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    const { worker } = await import('../mocks/browser.js');
    await worker.start();
  }
}

async function initialize() {
  await prepareApp();

  // Criação da instância do app Vue
  const app = createApp(App);

  // Registro dos plugins
  registerPlugins(app);

  // Uso do roteador Vue Router
  app.use(router);

  // Montagem do app Vue
  app.mount('#app');
}

initialize();
