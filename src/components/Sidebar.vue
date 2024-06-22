<!-- src/components/Sidebar.vue -->
<template>
  <v-card style="z-index: 100;">
    <v-layout>
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Deep Space Store</v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>
          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>
        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list :items="items"></v-list>
      </v-navigation-drawer>

      <v-main style="height: 10%;">
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => ({
    drawer: false,
    items: [
      { title: 'Produtos em alta', value: 'foo' },
      { title: 'Mais vendidos', value: 'bar' },
      { title: 'Seja afiliado', value: 'fizz' },
      { title: 'Buzz', value: 'buzz' },
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
/* Seu estilo aqui */
</style>
