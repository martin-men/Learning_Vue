import mutations from './mutations.js'
import getters from './getters.js'

const authorization ={
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: mutations,
    getters: getters
}

export default authorization
