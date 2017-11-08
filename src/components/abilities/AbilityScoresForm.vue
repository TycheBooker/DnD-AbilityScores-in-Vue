<template>
  <div class="ability-scores">
    <form action="">
      <div class="input-group" @click="assignScore">
        <label for="str" class="ability-label">Strength</label>
        <input type="number" id="str" v-model="abilities.str" :disabled="!manualEntry">
        <span class="modifier">{{modifiers.str}}</span>
      </div>
      <div class="input-group" @click="assignScore">
        <label for="dex" class="ability-label">Dexterity</label>
        <input type="number" id="dex" v-model="abilities.dex" :disabled="!manualEntry">
        <span class="modifier">{{modifiers.dex}}</span>
      </div>
      <div class="input-group" @click="assignScore">
        <label for="con" class="ability-label">Constitution</label>
        <input type="number" id="con" v-model="abilities.con" :disabled="!manualEntry">
        <span class="modifier">{{modifiers.con}}</span>
      </div>
      <div class="input-group" @click="assignScore">
        <label for="int" class="ability-label">Intelligence</label>
        <input type="number" id="int" v-model="abilities.int" :disabled="!manualEntry">
        <span class="modifier">{{modifiers.int}}</span>
      </div>
      <div class="input-group" @click="assignScore">
        <label for="wis" class="ability-label">Wisdom</label>
        <input type="number" id="wis" v-model="abilities.wis" :disabled="!manualEntry">
        <span class="modifier">{{modifiers.wis}}</span>
      </div>
      <div class="input-group" @click="assignScore">
        <label for="cha" class="ability-label">Charisma</label>
        <input type="number" id="cha" v-model="abilities.cha" :disabled="!manualEntry">
        <span class="modifier">{{modifiers.cha}}</span>
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
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      abilities: {
        str: "",
        dex: "",
        con: "",
        int: "",
        wis: "",
        cha: ""
      },
    }
  },
  computed: {
    modifiers() {
      return {
        str: this.getModifier('str'),
        dex: this.getModifier('dex'),
        con: this.getModifier('con'),
        int: this.getModifier('int'),
        wis: this.getModifier('wis'),
        cha: this.getModifier('cha'),
      }
    },
    activeScore() {
      return this.pickedUpScore
    }
    // activeScore: {
    //   get: function() {
    //     return this.pickedUpScore
    //   },
    //   set: function(newValue) {
    //     this.pickedUpScore = newValue
    //   }
    // }
  },
  methods: {
    getModifier(ability) {
      let n = Math.floor((parseInt(this.abilities[ability]) - 10) / 2);
      return (Number.isInteger(n)) ? (n<=0?"":"+") + n : "";
    },
    assignScore() {
      if (this.activeScore === 0) return;
      event.currentTarget.querySelector('input').value = this.activeScore;
      event.currentTarget.querySelector('input').dispatchEvent(new Event('input'));
      // this.activeScore = 0;
      this.$emit('scoreDropped', 0);
    }
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
    }

    .modifier {
      width: 50px;
      margin-left: $gutter;
      text-align: center;
    }
  }
</style>
