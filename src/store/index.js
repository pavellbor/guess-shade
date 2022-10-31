import { getRandomColor, getRandomInt, getSquareCounts } from '@/utils';
import { createStore } from 'vuex';

function getInitialState() {
  return {
    recordLevel: localStorage.getItem('record'),
    isGameFinished: true,
    totalLevel: 1,
    squaresNumberOnOneSide: 2,
    correctSquareIndex: getRandomInt(1, 4),
    squareColor: getRandomColor(),
    timer: 59,
  };
}

export default createStore({
  state() {
    return {
      ...getInitialState(),
    };
  },

  getters: {
    squareCounts(state) {
      return getSquareCounts(state.squaresNumberOnOneSide);
    },

    opacityDegree(state) {
      return 0.5 + (0.1 * state.squaresNumberOnOneSide) / 2;
    },

    isTimeRunningOut(state) {
      return state.timer < 10;
    },
  },

  mutations: {
    incrementTotalLevel(state) {
      state.totalLevel++;
    },

    updateCorrectSquareIndex(state) {
      state.correctSquareIndex = getRandomInt(1, getSquareCounts(state.squaresNumberOnOneSide));
    },

    incrementSquaresNumberOnOneSide(state) {
      state.squaresNumberOnOneSide++;
    },

    updateSquareColor(state) {
      state.squareColor = getRandomColor();
    },

    decrementTimer(state) {
      state.timer--;
    },

    resetGame(state) {
      Object.assign(state, getInitialState());
    },

    finishGame(state) {
      if (state.totalLevel > state.recordLevel) {
        localStorage.setItem('record', state.totalLevel);
        state.recordLevel = state.totalLevel;
      }

      state.isGameFinished = true;
    },
  },

  actions: {
    incrementLevel({ state, getters, commit, dispatch }) {
      commit('incrementTotalLevel');
      commit('updateCorrectSquareIndex');
      commit('updateSquareColor');

      if (state.totalLevel === 2) {
        dispatch('startTimer');
      }

      if (
        state.totalLevel === Math.round(getters.squareCounts / 2) &&
        getters.opacityDegree < 0.9
      ) {
        commit('incrementSquaresNumberOnOneSide');
      }
    },

    startTimer({ state, commit }) {
      const timerId = setInterval(() => {
        if (state.timer === 1) {
          clearInterval(timerId);
        }

        commit('decrementTimer');
      }, 1000);
    },

    resetGame({ commit }) {
      commit('resetGame');
    },

    finishGame({ commit }) {
      commit('finishGame');
    },
  },
});
