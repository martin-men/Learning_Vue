<template>
    
    <!-- tag is to tell transition group which element to render in the DOM -->
    <!-- tag acepta componentes propios -->
    <transition-group tag="ul" name="user-list">
        <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
    </transition-group>
    <div>
        <input type="text" ref="userNameInput">
        <button @click="addUser()">Add user</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: ['Max', 'Julia', 'Monika', 'Erik', 'John', 'Anna'],
        }
    },
    methods: {
        addUser() {
            const enteredUserName = this.$refs.userNameInput.value;
            this.users.unshift(enteredUserName);
        },
        removeUser(userToDelete) {
            this.users = this.users.filter((user) => user !== userToDelete);
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    margin: 1rem 0;
    padding: 0;
}

li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
}

.user-list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}

.user-list-enter-to {
    opacity: 1;
    transform: translateX(0);
}

.user-list-enter-active {
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.user-list-leave-from {
    opacity: 1;
    transform: translateX(0px);
}

.user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.user-list-leave-active {

    /* Position absolute is to make the user-list-move animation work properly when we remove an element of the list */
    position: absolute;
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

/* special class to animate the other elements that need to move to make room for the new one or to fill the gap left by the removed one */
/* el nombre de la clase es nuestro prefijo más la palabra move */
/* By defect, Vue uses transform to animate this class, so we can user transition for transform to control the time */
.user-list-move {
    transition: transform 0.5s ease;
}
</style>
