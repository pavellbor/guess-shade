import GameView from '@/views/GameView.vue';
import MainView from '@/views/MainView.vue';
import ResultView from '@/views/ResultView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: MainView },
  { path: '/game', component: GameView },
  { path: '/result', component: ResultView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
