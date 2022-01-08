<template>
  <div class="centralizar">
    <h3>Finalizadas</h3>

    <div>
      <ul>
        <li v-for="task in this.$store.state.tasks" :key="task.id">
          <template v-if="task.done">
            {{ task.title }}
          </template>
        </li>
      </ul>
    </div>
    <!-- criar filtro para tasks finalizadas apenas -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.centralizar {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}
</style>
