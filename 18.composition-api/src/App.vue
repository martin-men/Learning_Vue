<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <p>{{ user.name }} is {{ user.age }}</p>
    <button @click="setNewAge()">Change age</button>
  </section>
</template>

<!-- The composition API of VUE replaces the options API. It replaces data(), methods, computed and watch with setup
Now, related code is not split into different sections, but it is grouped together in the setup function. -->
<script setup>
import { ref, reactive, isRef, isReactive } from 'vue';

/* REPLACEMENT OF data() */
const userName = ref('Martin');
const age = ref(30);

// Reactive only works with objects
// It converts the object into a reactive object
const user = reactive({ name: 'Andrés', age: 80 });

// The values inside a ref() or a reactive() are not reactive
console.log(isRef(userName)); // true
console.log(isReactive(user)); // true
console.log(isRef(userName.value)); // false
console.log(isReactive(user.name)); // false

setTimeout(() => {
  userName.value = 'Mendieta';
  user.name = 'Dany';
}, 2000);


/* REPLACEMENT OF methods */
const setNewAge = () => {
  user.age = user.age + 1
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
