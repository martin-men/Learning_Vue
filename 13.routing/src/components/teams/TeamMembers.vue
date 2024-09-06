<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role"></user-item>
    </ul>

    <!-- To make this work, we need a watcher. It does not work because the current page is cached and the created hook is not called again.  -->
    <router-link to="/teams/t2">Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [
        // { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        // { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      ],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      const selectedTeam = this.teams.find(team => team.id === teamId)
      this.members = this.users.filter(user => selectedTeam.members.includes(user.id))
      this.teamName = selectedTeam.name
    }
  },
  created() {
    this.loadTeamMembers(this.teamId)
    console.log(this.$route.query.sort)
  },
  watch: {
    $route(newRoute) {
      this.loadTeamMembers(newRoute.params.teamId)
    }
  },

  // This router function is intended for reusable components (same component, other data)
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate at TeamMembers');
    console.log(to, from);
    // this.loadTeamMembers(to.params.teamId)
    next();
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>