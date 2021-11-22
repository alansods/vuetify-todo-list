<template>
  <div class="sidebar">
    <div class="sidebar-items">
      <div class="logo">
        <router-link class="router" :to="'/'">
        <v-img
          max-height="53"
          max-width="55"
          src="@/assets/logo-icon.svg"
        ></v-img>
        </router-link>
      </div>
      <ul>
        <li><i class="far fa-chart-bar"></i>Dashboard</li>
        <li><i class="far fa-chart-bar"></i>Tarefas</li>
        <li><i class="far fa-chart-bar"></i>Configurações</li>
      </ul>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.logo {
  position: absolute;
  top: 14px;
  left: 26px;
}

.sidebar {
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  background: #2693ff;
  width: 100px;
  .sidebar-items {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    ul {
      list-style: none;
      padding: 0;
      font-size: 12px;
      width: 100%;
      li {
        padding: 10px 0;
        border-bottom: solid 1px #46A3FF;
        color: #fff;
        font-family: "Gilroy-Semibold", sans-serif;
      }
      li:first-of-type {
        border-top: solid 1px #46A3FF;
      }
    }
  }
}

ul,
i {
  display: block;
  text-align: center;
  width: 100%;
}

i {
  color: #fff;
  font-size: 2rem;
}
</style>
>
