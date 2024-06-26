<template>
  <div id="app">
    <Sidebar /> <!-- Componente Sidebar -->
    <router-view /> <!-- Componente de visualização de rota -->
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
</script>
