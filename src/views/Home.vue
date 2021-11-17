<template>
  <section class="section-container">
    <v-row class="signin">
      <v-col cols="4" class="left">
        <v-img
          max-height="180"
          max-width="329"
          src="@/assets/logo.svg"
        ></v-img>
      </v-col>
      <v-col cols="8" class="right">
        <div class="container-form">
          <h2>Entre com seus dados de acesso.</h2>
          <validation-observer ref="observer">
            <v-form @submit.prevent="submit">
              <validation-provider
                v-slot="{ errors }"
                name="Usuário"
                rules="required|email"
              >
                <label>Nome de usuário ou e-mail:</label>
                <v-text-field
                  v-model="email"
                  :error-messages="errors"
                  required
                  outlined color="blue"
                  light
                  dense
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="E-mail"
                rules="required"
              >
                <label>Senha:</label>
                <v-text-field style="border: 5px"
                  v-model="password"
                  :error-messages="errors"
                  :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPass = !showPass"
                  required
                  outlined color="blue"
                  dense
                  light
                  :type="showPass ? 'text' : 'password'"
                ></v-text-field>
              </validation-provider>
              <v-btn class="signin-btn" type="submit" depressed> Entrar </v-btn>
              <div class="forgot-password">Esqueci minha senha</div>
            </v-form>
          </validation-observer>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { required, email } from "vee-validate/dist/rules";
import {
  extend,
  ValidationProvider,
  setInteractionMode,
  ValidationObserver,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} não pode ficar vazio.",
});

extend("email", {
  ...email,
  message: "Digite um e-mail válido.",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    email: "",
    password: null,
    showPass: false,
  }),
  computed: {
    params() {
      return {
        email: this.email,
        password: this.password,
      };
    },
  },
  methods: {
    async submit() {
      const valid = await this.$refs.observer.validate();
      if (valid) {
        this.login(this.params); // action to login
      }
    },
    clear() {
      // you can use this method to clear login form
      this.email = "";
      this.password = null;
      this.$refs.observer.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.section-container {
  font-family: 'Gilroy-Regular', sans-serif;
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
        font-family: 'Gilroy-Bold', sans-serif;
      }
      .signin-btn {
        width: 100%;
        color: #fff;
        background-color: #1ad18f;
        padding: 22px 12px;
        font-size: 16px;
        text-transform: none;
        font-family: 'Gilroy-Bold', sans-serif;
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
        font-family: 'Gilroy-Medium', sans-serif;
      }
      label {
        font-size: 14px;
        color: #2d3d4d;
        font-family: 'Gilroy-Medium', sans-serif;
      }
    }
  }
}
</style>