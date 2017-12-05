<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'app',
  components: {
    appHeader: Header
  }
}
</script>

<style lang="scss">
@import './styles/reset.scss';
@import './styles/base.scss';
@import './styles/fonts.scss';

#app {
  font-family: 'BookInsanity', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $warm-black;
}

.btn {
  font-family: MrEaves;
  padding: 10px 20px;
  border: 1px solid;
  color: $warm-black;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
}

span {
  display: inline-block;
}
</style>
