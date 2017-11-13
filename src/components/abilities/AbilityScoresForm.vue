<template>
  <div class="ability-scores">
    <form action="">
      <div class="input-group" @click="assignScore" v-for="ability in abilities" :key="ability.short">
        <label :for="ability.short" class="ability-label">{{ability.name}}</label>
        <input type="number" :id="ability.short" v-model="ability.score" :disabled="!manualEntry" :class="{'ready-to-drop': pickedUpScore}">
        <span class="modifier">{{getModifier(ability.short)}}</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    manualEntry: {
      type: Boolean,
      default: false
    },
    pickedUpScore: {
      default: 0,
    }
  },
  data() {
    return {
      abilities: [
        {
          short: "str",
          name: "Strength",
          score: ""
        },
        {
          short: "dex",
          name: "Dexterity",
          score: ""
        },
        {
          short: "con",
          name: "Constitution",
          score: ""
        },
        {
          short: "int",
          name: "Intelligence",
          score: ""
        },
        {
          short: "wis",
          name: "Wisdom",
          score: ""
        },
        {
          short: "cha",
          name: "Charisma",
          score: ""
        }
      ],
    }
  },
  computed: {
    activeScore() {
      return this.pickedUpScore
    }
  },
  methods: {
    getModifier(abShort) {
      let thisAbility = this.abilities.find((ability) => { return ability.short == abShort});
      let n = Math.floor((parseInt(thisAbility.score) - 10) / 2);
      return (Number.isInteger(n)) ? (n<=0?"":"+") + n : "";
    },
    assignScore() {
      if (this.activeScore === 0) return;
      event.currentTarget.querySelector('input').value = this.activeScore.score;
      event.currentTarget.querySelector('input').dispatchEvent(new Event('input'));
      this.$emit('scoreDropped', this.activeScore.index);
    }
  },
  mounted() {
    this.$root.$on('resetScores', () => {
      this.abilities.forEach(ability => ability.score = "");
    })
  }
}
</script>


<style lang="scss" scoped>
  .ability-scores {
    max-width: colw(3);
    margin: 0 auto;
    text-align: left;

    input {
      display: inline-block;
      width: 40px;
      border: 1px solid $warm-black;
      border-radius: 4px;
      padding: 6px;
      text-align: center;

      &.ready-to-drop {
        cursor: pointer;
      }
    }

    .modifier {
      width: 50px;
      margin-left: $gutter;
      text-align: center;
    }
  }

  .ability-label {
    display: inline-block;
    width: 150px;
    padding: 10px;
  }
</style>
