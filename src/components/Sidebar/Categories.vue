<template>
  <div class="categorias" max-width="300">
    <div>
      <router-link class="router" :to="'tarefas/finalizadas'"><h3 class="mb-10">Categorias</h3></router-link>
      <ul v-for="(item, i) in items" :key="i">
        <li><v-icon>mdi-chevron-right</v-icon>{{ item.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { text: "Todas" },
      { text: "Urgentes" },
      { text: "Importantes" },
      { text: "Outras" },
      { text: "Finalizadas" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.categorias {
  height: 100%;
  position: fixed;
  width: 230px;
  left: 100px;
  top: 0px;
  padding: 0 35px;
  display: flex;
  align-items: center;
  background: #f4fbff;
}

ul,
li {
  font-family: "Gilroy-Bold", sans-serif;
  list-style: none;
  padding: 0;
  font-size: 15px;
  margin: 14px 0;
}
</style>
