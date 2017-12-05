<template>
  <div class="ability-scores">
    <form action="">
      <div class="input-group" @click="assignScore" v-for="ability in abilities" :key="ability.short">
        <label :for="ability.short" class="ability-label">{{ability.name}}</label>
        <button v-if="increments" class="input-btn small" @click="decrease(ability.short)" :disabled="abilityScores[ability.short]<9">-</button>
        <input type="number" min="3" max="18" class="input-btn" :id="ability.short" v-model="abilityScores[ability.short]" :disabled="!manualEntry" :class="{'ready-to-drop': pickedUpScore}">
        <button v-if="increments" class="input-btn small" @click="increase(ability.short)" :disabled="abilityScores[ability.short]>14">+</button>
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
    increments: {
      type: Boolean,
      default: false
    },
    pickedUpScore: {
      default: 0,
    },
    abilityScoresProp: {
      default() {
        return {
          str: "",
          dex: "",
          con: "",
          int: "",
          wis: "",
          cha: ""
        }
      }
    }
  },
  data() {
    return {
      abilities: [
        {
          short: "str",
          name: "Strength"
        },
        {
          short: "dex",
          name: "Dexterity"
        },
        {
          short: "con",
          name: "Constitution"
        },
        {
          short: "int",
          name: "Intelligence"
        },
        {
          short: "wis",
          name: "Wisdom"
        },
        {
          short: "cha",
          name: "Charisma"
        }
      ],
    }
  },
  computed: {
    activeScore() {
      return this.pickedUpScore
    },
    abilityScores() {
      return this.abilityScoresProp;
    }
  },
  methods: {
    getModifier(abShort) {
      let thisAbility = this.abilityScores[abShort];
      let n = Math.floor((parseInt(thisAbility) - 10) / 2);
      return (Number.isInteger(n)) ? (n<=0?"":"+") + n : "";
    },
    assignScore() {
      if (this.activeScore === 0) return;
      event.currentTarget.querySelector('input').value = this.activeScore.score;
      event.currentTarget.querySelector('input').dispatchEvent(new Event('input'));
      this.$emit('scoreDropped', this.activeScore.index);
    },
    increase(abShort) {
      this.abilityScores[abShort] ++;
      this.$emit('scoreIncreased', this.abilityScores[abShort]);
    },
    decrease(abShort) {
      this.abilityScores[abShort] --;
      this.$emit('scoreDecreased', this.abilityScores[abShort]);
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

    .input-btn  {
      display: inline-block;
      width: 40px;
      border: 1px solid $warm-black;
      border-radius: 4px;
      padding: 6px;
      text-align: center;
      will-change: opacity;

      &.small {
        width: 26px;
        padding: 3px;
        cursor: pointer;

        &:disabled {
          opacity: 0.5;
        }
      }
    }

    input {
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
