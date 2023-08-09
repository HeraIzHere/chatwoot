import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

export const state = {
  conversations: {
    byId: {},
    allIds: [],
    uiFlags: {
      byId: {
        // 1: { allFetched: false, isAgentTyping: false, isFetching: false },
      },
    },
    meta: {
      byId: {
        // 1: { userLastSeenAt: undefined, status: 'open' },
      },
    },
  },
  uiFlags: {
    allFetched: false,
    isFetching: false,
    isCreating: false,
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
