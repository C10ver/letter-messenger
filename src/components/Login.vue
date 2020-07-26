<template>
  <div class="login card">
    <h1 class="login__title">Вход</h1>
    <form @submit="login">
      <label class="login__label" for="name">Ваше имя:</label>
      <input class="login__input" type="text" name="name" id="name" v-model="name">

      <label class="login__label" for="name">Аватар (ссылка):</label>
      <input class="login__input" type="text" name="name" id="name" v-model="avatar">

      <input class="login__submit" type="submit" value="Войти">
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '../store/index';

@Component
export default class Login extends Vue {
  @Prop() private msg!: string;

  name: string = '';
  avatar: string = ''; 

  public login(e: any) {
    e.preventDefault();
    if (!this.name || !this.avatar){
        alert('Заполните все поля!');
        return;
    }

    store.commit({
      type: 'SET_USER',
      user: {
        name: this.name,
        avatar: this.avatar,
      },
    });
    this.$router.push('/');
  }
}
</script>

<style scoped lang="scss">
  .login {
    padding: 30px 35px;

    &__title {
      font-size: 15px;
      margin: 5px 0 10px 15px;
    }

    &__label {
      font-size: 11px;
      color: #BCBCBC;
      margin: 10px 15px;
    }

    &__input {
      background: #FFFFFF;
      box-shadow: 0px 5px 25px rgba(42, 139, 242, 0.07), 0px 7px 25px rgba(42, 139, 242, 0.03), 0px 10px 15px rgba(0, 0, 0, 0.03);
      border-radius: 15px;
      margin-bottom: 20px;
      padding: 10px 15px;
      font-size: 13px;
      display: block;
      width: 100%;
    }

    &__submit {
      background: linear-gradient(75.43deg, #5C72E8 25.82%, #5068E2 86.22%);
      box-shadow: 0px 5px 25px rgba(42, 139, 242, 0.07), 0px 7px 25px rgba(42, 139, 242, 0.03), 0px 10px 15px rgba(0, 0, 0, 0.03), inset 0px 5px 25px rgba(42, 139, 242, 0.07), inset 5px -4px 10px #4A60D5;
      border-radius: 15px;
      color: #fff;
      padding: 10px 80px;
      cursor: pointer;
      font-weight: bold;
    }
  }
</style>
