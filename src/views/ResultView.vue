<template>
  <MainLayout>
    <template #title>{{ message }}</template>
    <template #button>Играть снова</template>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';
import { plural } from '@/utils';
import { mapState } from 'vuex';

export default {
  components: { MainLayout },

  computed: {
    ...mapState(['totalLevel']),

    message() {
      return `Покорил ${this.totalLevel} ${plural(
        ['уровень', 'уровня', 'уровней'],
        this.totalLevel,
      )}`;
    },
  },
};
</script>
