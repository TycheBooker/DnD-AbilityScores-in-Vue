<template>
  <transition-group name="abilities-array-transition" class="abilities-array" tag="div">
    <span v-for="(score, index) in abilitiesArray" :key="index" @click="pickUp(score, index)" :class="{used: usedScores.includes(index)}">{{score}}</span>
    <button class="refresh-button" @click="resetScores" key="button">
      <refresh-icon></refresh-icon>
    </button>
  </transition-group>
</template>

<script>
import RefreshIcon from '../../assets/svg/refresh-icon.svg';
export default {
  props: ['abilitiesArray', 'pickedUpScore', 'dropedScoreIndex'],
  data() {
    return {
      activeScore: this.pickedUpScore,
    }
  },
  computed: {
    usedScores() {
      return this.dropedScoreIndex
    }
  },
  components: {
    RefreshIcon
  },
  methods: {
    pickUp(score, index) {
      this.activeScore = {
        score,
        index
      };
      this.$emit('scorePickedUp', this.activeScore)
    },
    resetScores() {
      this.$emit('resetScores');
      this.$root.$emit('resetScores');
    }
  }
}
</script>

<style lang="scss" scoped>
  .abilities-array {
    padding: $gutter/2;
    margin: $gutter/2 auto;
    border: 1px solid $warm-black;
    max-width: colw(6);
    height: 62px;
    border-radius: 4px;
    position: relative;

    span {
      margin-left: $gutter;
      margin-right: $gutter;
      color: $rust;
      font-size: 28px;
      cursor: pointer;
      transition: all 0.3s;
      transform-origin: center;

      &:hover {
        transform: translateY(-5px);
      }

      &.used {
        color: $rifle-green;
        pointer-events: none;
      }
    }
  }

  .refresh-button {
    display: inline-block;
    position: absolute;
    right: $gutter/2;
    cursor: pointer;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  .abilities-array-transition-enter,
  .abilities-array-transition-leave-to {
    opacity: 0;
    transform: scale(0.3);
  }
</style>
