<template>
  <section class="section-container">
    <v-row class="signin">
      <v-col cols="4" class="left pa-0">
        <v-img max-height="180" max-width="329" src="@/assets/logo.svg"></v-img>
      </v-col>
      <v-col cols="8" class="right pa-0">
        <div class="container-form">
          <h2>Entre com seus dados de acesso.</h2>
          <v-form>
            <label>Nome de usuário ou e-mail:</label>
            <v-text-field outlined color="blue" light dense></v-text-field>

            <label>Senha:</label>
            <v-text-field
              style="border: 5px"
              outlined
              color="blue"
              dense
              light
            ></v-text-field>
            <router-link class="router" :to="'tarefas'">
              <v-btn class="signin-btn" type="submit" depressed> Entrar </v-btn>
            </router-link>
            <div class="forgot-password">Esqueci minha senha</div>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section-container {
  font-family: "Gilroy-Regular", sans-serif;
  background: #fff;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  .container-form {
    width: 300px;
  }
  .signin {
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    .left {
      padding: 10px;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      display: flex;
      color: #fff;
      background-color: #2693ff;
    }
    .right {
      padding: 10px;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      display: flex;
      background: #fff;
      color: #2d3d4d;
      h2 {
        text-align: left;
        margin: 30px 0;
        font-size: 18px;
        font-family: "Gilroy-Bold", sans-serif;
      }
      .signin-btn {
        width: 100%;
        color: #fff;
        background-color: #1ad18f;
        padding: 22px 12px;
        font-size: 16px;
        text-transform: none;
        font-family: "Gilroy-Bold", sans-serif;
        font-kerning: auto;
      }
      input {
        padding: 22px 12px;
        border: #bfdaeb;
      }
      .forgot-password {
        font-size: 13px;
        color: #2693ff;
        text-decoration: underline;
        margin-top: 25px;
        font-family: "Gilroy-Medium", sans-serif;
        cursor: pointer;
      }
      label {
        font-size: 14px;
        color: #2d3d4d;
        font-family: "Gilroy-Medium", sans-serif;
      }
    }
  }
}

.router {
  text-decoration: none !important;
}
</style>
