<template>
  <GameLayout>
    <template #title>Уровень {{ totalLevel }}</template>
    <template #timer>{{ timer }}</template>
    <SquareWrapper />
  </GameLayout>
</template>

<script>
import GameLayout from '@/layouts/GameLayout.vue';
import { mapState } from 'vuex';
import SquareWrapper from '../components/SquareWrapper.vue';

export default {
  components: { GameLayout, SquareWrapper },

  computed: {
    ...mapState(['totalLevel', 'timer']),
  },
};
</script>
