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

<style lang="scss">
  .abilities-array {
    padding: $gutter;

    span {
      margin-left: $gutter;
      margin-right: $gutter;
      color: $rust;
      font-size: 28px;
      cursor: pointer;
      transition: transform 0.3s;

      &:hover {
        transform: translateY(-5px);
      }
    }
  }


  .ability-label {
    display: inline-block;
    width: 150px;
    padding: 10px;
  }
</style>

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




