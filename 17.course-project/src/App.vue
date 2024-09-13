<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    }
  },
  watch: {
    didAutoLogout(currentValue, oldValue) {
      if (currentValue && currentValue != oldValue) {
        this.$router.replace('/');
      }
    }
  },
  created() {
    this.$store.dispatch('tryLogin')
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
