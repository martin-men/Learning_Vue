<template>
  <user-alert v-if="alertIsVisible" title="Add a User?" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script setup>
import UserAlert from './UserAlert.vue';
import useAlert from '../hooks/alert.js'

// Using a custom hook to reuse logic
const { alertIsVisible, showAlert, hideAlert } = useAlert()
</script>