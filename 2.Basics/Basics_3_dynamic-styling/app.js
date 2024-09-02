const app = Vue.createApp({
    data() {
        return {
            boxASelected: false
        }
    },
    computed: {
        boxAClasses() {
            return { active: this.boxASelected }
        }
    },
    methods: {
        boxSelected() {
            this.boxASelected = !this.boxASelected
        }
    }
})
app.mount('#styling')
