<template>
  <div class="sidebar">
    <div class="sidebar-items">
      <div class="logo">
        <v-img
          max-height="53"
          max-width="55"
          src="@/assets/logo-icon.svg"
        ></v-img>
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
  left: 43px;
}

.sidebar {
  height: 100vh;
  background: #2693ff;
}

.sidebar-items {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

ul {
  list-style: none;
  padding: 0;
  font-size: 12px;
  font-weight: bold;
  width: 100%;
}

li {
  padding: 10px 0;
  border: solid 1px #fff;
}

ul,
i {
  color: #fff;
  display: block;
  text-align: center;
  width: 100%;
}

i {
  font-size: 2rem;
}
</style>
>
