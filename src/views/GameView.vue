<template>
  <GameLayout>
    <template #title>Уровень {{ totalLevel }}</template>
    <template #timer
      ><span :class="{ warning: isTimeRunningOut }">{{ timer }}</span></template
    >
    <SquareWrapper />
  </GameLayout>
</template>

<script>
import GameLayout from '@/layouts/GameLayout.vue';
import { mapState, mapGetters } from 'vuex';
import SquareWrapper from '../components/SquareWrapper.vue';

export default {
  components: { GameLayout, SquareWrapper },

  computed: {
    ...mapState(['totalLevel', 'timer']),
    ...mapGetters(['isTimeRunningOut']),
  },
};
</script>

<style scoped>
.warning {
  color: #db1010;
}
</style>
