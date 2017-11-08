<template>
  <div class="abilities-roll">
    <button class="btn" @click="roll" :disabled="resultsTotal.length>5">Roll!</button>
    <div class="die-results">
      <span class="dice-result" v-for="result in results" :key="result">{{result}}</span>
    </div>
    <div class="abilities-array">
      <span v-for="score in resultsTotal" :key="score" @click="pickUp(score)">{{score}}</span>
    </div>
    <ability-scores-form :pickedUpScore="pickedUpScore" @scoreDropped="pickedUpScore=0"></ability-scores-form>
  </div>
</template>

<script>
import AbilityScoresForm from './AbilityScoresForm.vue';
export default {
  components: {
    AbilityScoresForm
  },
  data() {
    return {
      results: [],
      resultsTotal: [],
      pickedUpScore: 0
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
      }, 1500);
    },
    pickUp(score) {
      this.pickedUpScore = score;
    },
  }
}
</script>

<style lang="scss" scoped>
  .die-results {
    margin-top: $gutter;
  }

  .dice-result {
    padding: $gutter;
  }
</style>

