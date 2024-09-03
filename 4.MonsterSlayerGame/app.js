const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        }
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return { width: '0%' }
            }
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: '0%' }
            }
            return { width: this.playerHealth + '%' }
        },
        mayUseSpecialAttack() {
            return (this.currentRound % 3 !== 0)
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
                this.addLogMessage('Game over: ', 'draw', ' ')
            } else if (value <= 0) {
                this.winner = 'monster'
                this.addLogMessage('Game over: ', 'monster victory', ' ')
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
                this.addLogMessage('Game over: ', 'draw', ' ')
            } else if (value <= 0) {
                this.winner = 'player'
                this.addLogMessage('Game over: ', 'player victory', ' ')
            }
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.currentRound = 0
            this.winner = null
            this.logMessages = []
        },
        attackMonster() {
            this.currentRound++
            const attackValue = getRandomValue(5, 12)
            this.monsterHealth -= attackValue
            this.addLogMessage('player', 'attack', attackValue)
            this.attackPlayer()
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15)
            this.addLogMessage('monster', 'attack', attackValue)
            this.playerHealth -= attackValue
        },
        specialAttackMonster() {
            this.currentRound++
            const attackValue = getRandomValue(10, 25)
            this.monsterHealth -= attackValue
            this.addLogMessage('player', 'special-attack', attackValue)
            this.attackPlayer()
        },
        healPlayer() {
            this.currentRound++

            const healValue = getRandomValue(8, 20)
            const healedValue = this.playerHealth += healValue

            if (healedValue > 100) {
                this.playerHealth = 100
            } else {
                this.playerHealth = healedValue
            }
            this.addLogMessage('player', 'heal', healValue)
            this.attackPlayer()
        },
        surrender() {
            this.addLogMessage('player', 'surrender', ' ') 
            this.winner = 'monster'
        },
        addLogMessage(character, action, actionValue) {
            this.logMessages.unshift({
                actionBy: character,
                actionType: action,
                actionValue: actionValue
            })
        }
    }
})

app.mount('#game')
