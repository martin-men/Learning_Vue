<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script setup>
import { computed, watch, defineProps, toRefs } from 'vue'

import useSearch from '../../hooks/search';
import ProjectItem from './ProjectItem.vue';

/* PROPS */
const props = defineProps(['user']);
/* It's necessary to make props reactive in order to watch them */
const propsWithRefs = toRefs(props);


/* HOOKS */
const projects = computed(() => propsWithRefs.user.value ? propsWithRefs.user.value.projects : [])
const { enteredSearchTerm, availableItems: availableProjects, updateSearch  } = useSearch(projects, 'title')


/* DATA */
// const enteredSearchTerm = ref('');
// const activeSearchTerm = ref('');

/* COMPUTED PROPERTIES */
const hasProjects = computed(() => {
  return props.user.projects && availableProjects.value.length > 0;
});

// const availableProjects = computed(() => {
//   if (activeSearchTerm.value) {
//     return props.user.projects.filter((prj) =>
//       prj.title.includes(activeSearchTerm.value)
//     );
//   }
//   return props.user.projects;
// });

/* METHODS */
// const updateSearch = (val) => {
//   enteredSearchTerm.value = val;
// };

/* WATCHERS */
// watch(enteredSearchTerm, (val) => {
//   setTimeout(() => {
//     if (val === enteredSearchTerm.value) {
//       activeSearchTerm.value = val;
//     }
//   }, 300);
// })

watch(propsWithRefs.user, () => {
  updateSearch('')
})
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
