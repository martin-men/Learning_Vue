<template>
  <button @click="confirmUser()">Confirm</button>
  <button @click="saveChanges()">Save</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  data() {
    return {
      changesSaved: false
    }
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmUser() {
      // do something important with ur life

      // Programmatic navigation
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter at UsersList');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave at UsersList');
    console.log(to, from);
    if (!this.changesSaved) {
      alert('You have unsaved changes. Please save them first!');
      next(false);
    }
    next()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>