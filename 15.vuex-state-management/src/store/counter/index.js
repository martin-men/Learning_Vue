import counterMutations from './mutations.js'
import counterActions from './actions.js'
import counterGetters from './getters.js'

const counterModule = {

    // This is to avoid clashes between mutations, actions, and getters with the same name in different modules.
    // Namespace is the key you assign to the module when you add it
    // If it is set to true, then the way to access the module's state, mutations, actions, and getters will be namespaced.
    // like this -> store.dispatch('numbers/increment')
    // For the map functions now we pass 2 arguments, like this -> mapGetters('numbers', ['finalCounter'])
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    mutations: counterMutations,
    actions: counterActions,
    getters: counterGetters
}

export default counterModule
