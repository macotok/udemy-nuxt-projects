export const state = () => ({
  message: 'Hello Vuex!',
});

export const mutations = {
  updateMessage: function(state, payload) {
    state.message = payload;
  }
};

export const actions = {
  updateMessageAction: function(context, payload) {
    context.commit('updateMessage', payload);
  }
};
