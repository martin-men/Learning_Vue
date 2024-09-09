<template>
    <button @click="increment">Add 1</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        // addOne() {
            // Using a mutation in VUEX
            // this.$store.commit('increment')

            // Using an action in VUEX
        //     this.$store.dispatch('increment')
        // }

        ...mapActions('numbers', ['increment'])
    }
}
</script>
