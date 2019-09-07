import { FETCH_LISTDATA, SAVE_LISTDATA } from "./actions.type";
import {
    FETCH_START, 
    FETCH_END,
    SAVE_START,
    SAVE_END
} from "./mutations.type";

import axios from 'axios';

const state = {
  listData: [],
  isLoading: true,
};

const getters = {
  isLoading(state) {
    return state.isLoading;
  },
  getListData(state) {
    return state.listData;
  }
};

const actions = {
  async [FETCH_LISTDATA]({ commit }) {
    const response = await axios.get(
      'http://ff4f01.me:5000/'
      );
  
    commit(FETCH_END, response.data);
  },
  [SAVE_LISTDATA]({ commit }, listData) {
    axios({
      method: 'post',
      url: 'http://ff4f01.me:5000/save',
      data: listData
    }).then(function(){
      commit(SAVE_END);
      }
    );
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state, response) {
    state.isLoading = false;
    state.listData = response
  },
  [SAVE_START](state) {
    state.isSaving = true;
  },
  [SAVE_END](state) {
    state.isSaving = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
