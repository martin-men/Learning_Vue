<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
        Sort Descending
      </button>
    </div>
    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="$emit('list-projects', $event)"
      ></user-item>
    </ul>
  </base-container>
</template>

<script setup>
import UserItem from './UserItem.vue';
import useSearch from '../../hooks/search';

import { defineProps, computed, ref } from 'vue';

/* PROPS */
const props = defineProps(['users']);


/* HOOKS */
const users = computed(() => props.users);
const { enteredSearchTerm, availableItems: availableUsers, updateSearch } = useSearch(users, 'fullName')


/* DATA */
// const enteredSearchTerm = ref('');
// const activeSearchTerm = ref('');
const sorting = ref(null);

/* COMPUTED PROPERTIES */
// const availableUsers = computed(() => {
//   let users = [];
//   if (activeSearchTerm.value) {
//     users = props.users.filter((usr) =>
//       usr.fullName.includes(activeSearchTerm.value)
//     );
//   } else if (props.users) {
//     users = props.users;
//   }
//   return users;
// });

const displayedUsers = computed(() => {
  if (!sorting.value) {
    return availableUsers.value;
  }
  return availableUsers.value.slice().sort((u1, u2) => {
    if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
      return 1;
    } else if (sorting.value === 'asc') {
      return -1;
    } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
      return -1;
    } else {
      return 1;
    }
  });
});

/* METHODS */
// const updateSearch = (val) => {
//   enteredSearchTerm.value = val;
// };

const sort = (mode) => {
  sorting.value = mode;
};

/* WATCHERS */
// watch(enteredSearchTerm, (newVal) => {
//   setTimeout(() => {
//     if (newVal === enteredSearchTerm.value) {
//       activeSearchTerm.value = newVal;
//     }
//   }, 300);
// });
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
