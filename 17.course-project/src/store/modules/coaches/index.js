import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    lastFetch: null,
    namespaced: true,
    state() {
        return {
            coaches: []
        }
    },
    mutations,
    actions,
    getters
}
