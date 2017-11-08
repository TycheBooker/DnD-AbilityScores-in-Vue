<template>
  <div class="abilities-standard">
    <div class="abilities-array">
      <span v-for="score in abilitiesStandardArray" :key="score" @click="pickUp(score)">{{score}}</span>
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
      abilitiesStandardArray: [15, 14, 13, 12, 10, 8],
      pickedUpScore: 0,
    }
  },
  methods: {
    pickUp(score) {
      this.pickedUpScore = score;
    },
  }
}
</script>

