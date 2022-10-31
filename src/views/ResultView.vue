<template>
  <MainLayout>
    <template #title>
      <!-- <template v-if="isNewRecord"> -->
      <span style="color: #f5d10c">Новый рекорд!</span><br>
      {{ message }}
      <!-- <template v-else>
          Покорил<br />{{ message }}<br />
          <span
            v-if="recordLevel"
            style="opacity: 0.5"
            >но рекорд {{ recordLevel }}</span
          >
        </template> -->
    </template>
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
    ...mapState(['totalLevel', 'isGameFinished', 'recordLevel']),

    isNewRecord() {
      return this.totalLevel === this.recordLevel;
    },

    message() {
      return `${this.totalLevel} ${plural(['уровень', 'уровня', 'уровней'], this.totalLevel)}`;
    },
  },

  created() {
    if (this.isGameFinished) {
      return;
    }

    this.$router.push('/');
  },
};
</script>
