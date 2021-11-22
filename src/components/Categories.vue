<template>
  <div class="categorias" max-width="300">
    <div>
      <h3 class="mb-5">Categorias</h3>
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f4fbff;
}

ul,
li {
  font-family: "Gilroy-Bold", sans-serif;
  list-style: none;
  padding: 0;
  font-size: 15px;
  margin: 12px 0;
}
</style>
