<template>
  <div class="abilities-manual">
    <p>Enter you ability scores!</p>
    <ability-scores-form :manual-entry="true"></ability-scores-form>
  </div>
</template>

<script>
import AbilityScoresForm from './AbilityScoresForm.vue';
export default {
  components: {
    AbilityScoresForm
  }
}
</script>

<style lang="scss" scoped>
  .abilities-manual {
    p {
      margin-bottom: $gutter;
    }
  }
</style>
