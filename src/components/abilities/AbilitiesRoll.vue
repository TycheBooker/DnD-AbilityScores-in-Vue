<template>
  <div class="abilities-roll">
    <button class="btn" @click="roll" :disabled="resultsTotal.length>5">Roll!</button>
    <button class="btn" @click="restart" v-if="resultsTotal.length>0">Restart!</button>
    <div class="dice-results">
      <span class="dice-result" v-for="result in results" :key="result">{{result}}</span>
    </div>
    <abilities-array :abilitiesArray="resultsTotal" :pickedUpScore="pickedUpScore" :dropedScoreIndex="dropedScoreIndex" @scorePickedUp="pickedUpScore=$event" @resetScores="resetScores"></abilities-array>
    <ability-scores-form :pickedUpScore="pickedUpScore" :abilityScoresProp="abilityScores" @scoreDropped="dropScore($event)"></ability-scores-form>
  </div>
</template>

<script>
import AbilityScoresForm from './AbilityScoresForm.vue';
import AbilitiesArray from './AbilitiesArray.vue';
export default {
  components: {
    AbilityScoresForm,
    AbilitiesArray
  },
  data() {
    return {
      results: [],
      resultsTotal: [],
      pickedUpScore: 0,
      dropedScoreIndex: [],
      abilityScores: {
        str: "",
        dex: "",
        con: "",
        int: "",
        wis: "",
        cha: ""
      }
    }
  },
  methods: {
    roll() {
      this.results = [];
      for (let i=0; i < 4; i++) {
        this.results.push(Math.floor(Math.random() * 6) + 1)
      }
      setTimeout(() => {
        this.results.splice(this.results.findIndex((result) => result === Math.min.apply(Math, this.results)), 1);
        this.resultsTotal.push(this.results.reduce((a, b) => a + b, 0));
      }, 500);
    },
    restart() {
      this.results = [];
      this.resultsTotal = [];
    },
    dropScore(index) {
      this.pickedUpScore = 0;
      this.dropedScoreIndex.push(index);
    },
    resetScores() {
      this.dropedScoreIndex = [];
      this.abilityScores = {
        str: "",
        dex: "",
        con: "",
        int: "",
        wis: "",
        cha: ""
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .dice-results {
    margin: $gutter auto;
    border: 1px solid $warm-black;
    border-radius: 4px;
    max-width: colw(2);
    height: 49px;
  }

  .dice-result {
    padding: $gutter/2;
  }
</style>

