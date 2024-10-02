<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script setup>
import UserAlert from './UserAlert.vue';
import useAlert from '../hooks/alert.js'
import { ref } from 'vue'

const alertTitle = ref('Delete the user?')
// Using a custom hook to reuse logic
const { alertIsVisible, showAlert, hideAlert } = useAlert(true)
</script>