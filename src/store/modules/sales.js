const getDefaultState = () => {
  return {
    // Activité selectionnée pour traitement
    selectedSale: null,
  };
};

// initial state
const state = getDefaultState();

// getters
const getters = {
  getSelectedSale: state => state.selectedSale
};

const mutations = {
  RESET(state) {
    Object.assign(state, getDefaultState());
  },

  SET_SELECTED_SALE(state, sale) {
    state.selectedSale = sale;
  }
}

// actions
const actions = {
  reset({ commit }) {
    commit("RESET");
  },

  setSelectedSale({ commit }, sale) {
    commit("SET_SELECTED_SALE", sale);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};