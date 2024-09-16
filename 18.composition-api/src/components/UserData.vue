<template>
  <div style="border: 1px solid #000;">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <p>Injected alias: {{ alias }}</p>
    <p>I am computed inside UserData: {{ computedProps }}</p>
    <button @click="emitCustomEvent">Emit Event</button>
  </div>
</template>

<script setup>
import { defineProps, computed, defineEmits, inject } from 'vue';

/* To inject data from other component */
const alias = inject('userAlias')

const emits = defineEmits(['customEvent'])

const props = defineProps({
  userName: String,
  age: Number,
});

const computedProps = computed(() => {
  return props.userName + ' is ' + props.age;
});

const emitCustomEvent = () => {
  emits('customEvent', 'Hello from UserData');
}
</script>
