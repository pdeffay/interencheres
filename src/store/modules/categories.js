const getDefaultState = () => {
    return {
      // Activité selectionnée pour traitement
      selectedCategory: null,
    };
  };
  
  // initial state
  const state = getDefaultState();
  
  // getters
  const getters = {
    getSelectedCategory: state => state.selectedCategory
  };
  
  const mutations = {
    RESET(state) {
      Object.assign(state, getDefaultState());
    },
  
    SET_SELECTED_CATEGORY(state, category) {
      state.selectedCategory = category;
    }
  }
  
  // actions
  const actions = {
    reset({ commit }) {
      commit("RESET");
    },
  
    setSelectedCategory({ commit }, category) {
      commit("SET_SELECTED_CATEGORY", category);
    },
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };