export default {
    // Actions are used to execute asynchronous code with vuex
    increment(context) {
        setTimeout(() => {
            context.commit('increment')
        }, 2000)
    },
    increase(context, payload) {
        setTimeout(() => {
            context.commit('increase', payload)
        }, 2000)
    },
}
