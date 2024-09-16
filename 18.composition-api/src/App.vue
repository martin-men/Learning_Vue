<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <p>{{ user.name }} is {{ user.age }}</p>
    <button @click="setNewAge()">Change age</button>
    <p>Computed property: {{ completeName }}</p>
    <div>
      <input type="text" placeholder="First name" v-model="firstName" />
      <input type="text" placeholder="Last name" v-model="lastName" />
      <input type="text" placeholder="Alias" ref="aliasInput" />
      <p>Alias: {{ alias }}</p>
      <button @click="setAlias">Set alias</button>
    </div>
    <UserData
      :userName="userName"
      :age="age"
      @customEvent="customEventEmitted"
    />
  </section>
</template>

<!-- The composition API of VUE replaces the options API. It replaces data(), methods, computed and watch with setup
Now, related code is not split into different sections, but it is grouped together in the setup function. -->

<!-- Referring to Vue's lifecycle, beforeCreate and created hooks are replaced by the setup function. This functions executes at the same time as beforeCreate and created hooks
Thus, those hooks are not available in the composition API -->
<script setup>
import {
  ref,
  reactive,
  isRef,
  isReactive,
  computed,
  watch,
  provide,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

import UserData from './components/UserData.vue';

/* REPLACEMENT OF data() */
const userName = ref('Martin');
const age = ref(30);
const firstName = ref('César');
const lastName = ref('Mendieta');
const aliasInput = ref(null);
const alias = ref('');

/* To provide data to another component */
provide('userAlias', alias);

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
  user.age = user.age + 1;
};
const setAlias = () => {
  alias.value = aliasInput.value.value;
};
const customEventEmitted = (message) => {
  console.log(message);
};

/* REPLACEMENT OF computed properties */
/* Computed properties are readonly */
const completeName = computed(() => {
  return firstName.value + ' ' + lastName.value;
});

/* REPLACEMENT FOR watchers */
watch(firstName, (newValue, oldValue) => {
  console.log('old firstname: ' + oldValue);
  console.log('new firstname: ' + newValue);
});
/* We ca pass more than one dependency */
watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {
  console.log('old name: ' + oldFirst + ' ' + oldLast);
  console.log('new name: ' + newFirst + ' ' + newLast);
});


/* REPLACEMENT FOR lifecycle hooks */
onBeforeMount(() => {
  console.log('Before mount');
});
onMounted(() => {
  console.log('Mounted');
});
onBeforeUpdate(() => {
  console.log('Before update');
});
onUpdated(() => {
  console.log('Updated');
});
onBeforeUnmount(() => {
  console.log('Before unmount');
});
onUnmounted(() => {
  console.log('Unmounted');
});
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
