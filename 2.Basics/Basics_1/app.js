const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: '<h2 style="color: #fff">Master Vue and build amazing apps!</h2>',
            valueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random()
            return (randomNumber < 0.5) ? this.courseGoalA : this.courseGoalB
        }
    }
})
app.mount('#user-goal')
