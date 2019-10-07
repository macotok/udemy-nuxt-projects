export const state = () => ({
  count: 0,
});

export const mutations = {
  countUp: function(state) {
    state.count++
  },
  countReset: function(state) {
    state.count = 0;
  }
};
