<template>
  <div class="new-character">
    <h1>New Character</h1>
    <div class="abilities-container">
      <p>Pick a way to enter your ability scores:</p>
      <button class="btn" @click="activeMode='abilities-manual'">Manual Entry</button>
      <button class="btn" @click="activeMode='abilities-roll'">Roll For It</button>
      <button class="btn" @click="activeMode='abilities-points'">Point Buy</button>
      <button class="btn" @click="activeMode='abilities-standard'">Standard Array</button>

      <div class="component-container">
        <keep-alive>
          <component :is="activeMode"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import abilitiesManual from './abilities/AbilitiesManual.vue';
import abilitiesRoll from './abilities/AbilitiesRoll.vue';
import abilitiesPoints from './abilities/AbilitiesPoints.vue';
import abilitiesStandard from './abilities/AbilitiesStandard.vue';
export default {
  data() {
    return {
      activeMode: ""
    }
  },
  components: {
    abilitiesManual,
    abilitiesPoints,
    abilitiesRoll,
    abilitiesStandard
  }
}
</script>

<style lang="scss" scoped>
  .abilities-container {
    p {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  .component-container {
    padding: $gutter;
  }

  button {
    display: inline-block;
  }
</style>




