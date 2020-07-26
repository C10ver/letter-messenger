<template>
  <header class="main__header">
    <a href="/"><img src="../assets/logo.svg" alt="Letter" class="main__logo"></a>
    <button class="main__exit" @click="onExit()">Выйти</button>
  </header>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
@Component
export default class Header extends Vue {
  @Prop() private onExit!: () => void;
}
</script>
