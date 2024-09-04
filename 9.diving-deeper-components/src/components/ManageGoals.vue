<template>
    <div>
        <h2>Manage goals</h2>
        <input type="text" ref="goal">
        <button @click="setGoal()">Set goal</button>

        <!-- Having a dialog nested deeply inside the html code is semantically incorrect.
        The teleport tag allows us to render the element within it in wherever we want in the DOM via a css selector -->
        <teleport to="body">
            <error-alert v-if="inputIsInvalid">
                <h2>Input is invalid!</h2>
                <p>Please enter, at least, a few characters...</p>
                <button @click="confirmError()">Ok</button>
            </error-alert>
        </teleport>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'

export default {
    components: { ErrorAlert },
    data() {
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value
            if (enteredValue === '') {
                this.inputIsInvalid = true
            }
        },
        confirmError() {
            this.inputIsInvalid = false
        }
    }
}
</script>
