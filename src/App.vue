<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    font-family: Roboto;
    box-sizing: border-box;
    outline: none;
  }
  html, body {
    height: 100%;
    width: 100%;
  }
  input {
    border: none;
  }
  #app {
    height: 100%;
    width: 100%;
    background: #FCFCFF;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    background: #FFFFFF;
    box-shadow: 0px 5px 25px rgba(42, 139, 242, 0.07), 0px 7px 25px rgba(42, 139, 242, 0.03), 0px 10px 15px rgba(0, 0, 0, 0.03);
    border-radius: 15px;
    padding: 15px;
  }

  @media (max-width: 550px) {
    .card {
        border-radius: 0;
    }
  }
</style>
