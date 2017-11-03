<template>
  <div class="hello">
    <router-link to="#" class="btn">New Character</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<style lang="scss" scoped>
  button {
    margin: 0 auto;
  }
</style>


<style lang="scss">
  .btn {
    font-family: MrEaves;
    padding: 10px 20px;
    border: 1px solid $warm-black;
    color: $warm-black;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
