<template>
  <div class="abilities-roll">
    <button class="btn" @click="roll" :disabled="resultsTotal.length>5">Roll!</button>
    <button class="btn" @click="restart" v-if="resultsTotal.length>0">Restart!</button>
    <transition-group name="result-transition" class="dice-results" tag="div">
      <span class="dice-result" v-for="(result, index) in results" :key="result.id" :class="{'no-flip': noFlip}">{{result.value}}</span>
    </transition-group>
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
      noFlip: false,
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
      setTimeout(() => {
        for (let i=0; i < 4; i++) {
          let result = {
            value: Math.floor(Math.random() * 6) + 1,
            id: this.results.length + 1
          }
          this.results.push(result);
        }
      }, 100);
      setTimeout(() => {
        let resultsMin = this.results.reduce((prev, curr) => {
          return prev.value < curr.value ? prev : curr;
        });
        this.results.splice(this.results.findIndex((result) => result.value === resultsMin.value), 1);
        this.resultsTotal.push(this.results.reduce((a, b) => a + b.value, 0));
      }, 1000);
    },
    restart() {
      this.noFlip = true;
      this.results = [];
      this.resultsTotal = [];
      this.noFlip = false;
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
    position: relative;
  }

  .dice-result {
    padding: $gutter/2;
    transition: all 1s;
  }

  .result-transition-enter,
  .result-transition-leave-to {
    opacity: 0;
    transform: scale(0.3);
  }

  .result-transition-leave-active {
    position: absolute;
  }

  .no-flip {
    position: relative !important;
  }
</style>

