<template>
  <div class="abilites-point-buy">
    <div class="points-header">
      <label class="points-label"> Available points: </label><input type="number" v-model.number="availablePoints">
      <p class="points-label">Remaining points: <span>{{remainingPoints}}</span></p>
    </div>
    <ability-scores-form :increments="true" :abilityScoresProp="abilityScores" @scoreIncreased="reducePoints($event)" @scoreDecreased="returnPoints($event)"></ability-scores-form>
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
      availablePoints: 27,
      remainingPoints: 27,
      abilityScores: {
        str: "8",
        dex: "8",
        con: "8",
        int: "8",
        wis: "8",
        cha: "8"
      }
    }
  },
  methods: {
    reducePoints(newScore) {
      if (newScore > 13) this.remainingPoints -=2
      else this.remainingPoints --
    },
    returnPoints(newScore) {
      if (newScore < 13) this.remainingPoints ++
      else this.remainingPoints +=2
    }
  }
}
</script>

<style lang="scss" scoped>
  .points-header {
    display: flex;
    justify-content: center;
    margin-bottom: $gutter;

    input {
      display: inline-block;
      width: 40px;
      border: 1px solid $warm-black;
      border-radius: 4px;
      padding: 6px;
      text-align: center;
    }
  }

  .points-label {
    display: inline-block;
    padding: 10px;
  }
</style>


