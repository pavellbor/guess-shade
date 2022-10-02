<template>
  <div ref="squareWrapper" class="square-wrapper" :style="squareWrapperStyle">
    <SquareItem
      v-for="index in squareCounts"
      :key="index"
      :style="squareItemStyle(index)"
      @click="checkAnswer(index)"
    ></SquareItem>
  </div>
</template>

<script>
import { getElementMinSize } from '@/utils';
import { mapActions, mapGetters, mapState } from 'vuex';
import SquareItem from './SquareItem.vue';

export default {
  data() {
    return {
      squareWrapperSize: null,
    };
  },
  computed: {
    ...mapState(['squaresNumberOnOneSide', 'correctSquareIndex', 'squareColor', 'timer']),
    ...mapGetters(['squareCounts', 'opacityDegree']),
    squareWrapperStyle() {
      return {
        gridTemplateColumns: `repeat(${this.squaresNumberOnOneSide}, 1fr)`,
        gridTemplateRows: `repeat(${this.squaresNumberOnOneSide}, 1fr)`,
        gap: `${this.squareWrapperSize / 40}px`,
        width: `${this.squareWrapperSize}px`,
        height: `${this.squareWrapperSize}px`,
      };
    },
  },
  watch: {
    timer(newValue) {
      if (newValue === 0) {
        this.$router.push({ path: '/result' });
      }
    },
  },
  created() {
    this.resetGame();
  },
  mounted() {
    const squareWrapper = this.$refs.squareWrapper;
    this.squareWrapperSize = getElementMinSize(squareWrapper);
  },
  methods: {
    ...mapActions(['incrementLevel', 'startTimer', 'resetGame']),
    checkAnswer(index) {
      if (this.correctSquareIndex === index) {
        this.incrementLevel();
      }
    },
    squareItemStyle(index) {
      return {
        backgroundColor: this.squareColor,
        opacity: index === this.correctSquareIndex ? this.opacityDegree : 1,
      };
    },
  },
  components: { SquareItem },
};
</script>

<style scoped>
.square-wrapper {
  display: grid;
  width: 100%;
  height: 100%;
  max-width: 460px;
  max-height: 460px;
  box-sizing: border-box;
  padding: 40px;
}
</style>
