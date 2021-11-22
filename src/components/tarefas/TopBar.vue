<template>
  <div class="topbar">
    <v-container fluid class="topbar">
      <v-row>
        <v-col>
          <div class="profile-photo">
            img
          </div>
          <div class="usuario">
            {{ usuario.nome }}
          </div>
          <div class="cargo">
            {{ usuario.cargo }}
          </div>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        nome: "Eduardo Pereira da Costa",
        cargo: "Front-End Developer",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.topbar {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  height: 83px;
  text-align: right;
}
</style>
