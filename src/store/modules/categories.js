const getDefaultState = () => {
    return {
      selectedCategory: null,
      categoryList: []
    };
  };
  
  // initial state
  const state = getDefaultState();
  
  // getters
  const getters = {
    getSelectedCategory: state => state.selectedCategory,
    getCategoryList: state => state.categoryList
  };
  
  const mutations = {
    RESET(state) {
      Object.assign(state, getDefaultState());
    },
  
    SET_SELECTED_CATEGORY(state, category) {
      state.selectedCategory = category;
    },

    SET_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList;
    },

  }
  
  // actions
  const actions = {
    reset({ commit }) {
      commit("RESET");
    },
  
    setSelectedCategory({ commit }, category) {
      commit("SET_SELECTED_CATEGORY", category);
    },

    setCategoryList({ commit }, categoryList) {
      commit("SET_CATEGORY_LIST", categoryList);
    },
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };