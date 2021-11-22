<template>
  <div class="topbar">
    <v-container fluid class="topbar">
      <v-row>
        <v-col class="topbar-container">
          <div class="profile-photo">
            <img src="@/assets/profile-photo.jpg" alt="profile-photo">
          </div>
          <div>
            <div class="usuario">
            {{ usuario.nome }}
          </div>
          <div class="cargo">
            {{ usuario.cargo }}
          </div>
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
  position: relative;
}

.topbar-container {
  display: flex;
  justify-content: end;
  align-items: center;
}

.usuario {
  font-family: "Gilroy-Bold", sans-serif;
  font-size: 15px;
  line-height: 16px;
}

.cargo {
  font-family: "Gilroy-Bold", sans-serif;
  font-size: 12px;
  color: #2693ff;
  line-height: 16px;
}

.profile-photo {
  margin-right: 10px;
  img {
    width: 47px;
    height: 47px;
    border-radius: 50%;
  }
}
</style>
