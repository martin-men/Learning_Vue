import { computed, watch, ref } from 'vue';

const useSearch = (items, searchProp) => {
  /* DATA */
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  /* COMPUTED PROPERTIES */
  const availableItems = computed(() => {
    let filteredItems = [];
    if (activeSearchTerm.value) {
      filteredItems = items.value.filter((item) =>
        item[searchProp].includes(activeSearchTerm.value)
      );
    } else if (items.value) {
      filteredItems = items.value;
    }
    return filteredItems;
  });

  /* METHODS */
  const updateSearch = (val) => {
    enteredSearchTerm.value = val;
  };

  /* WATCHERS */
  watch(enteredSearchTerm, (newVal) => {
    setTimeout(() => {
      if (newVal === enteredSearchTerm.value) {
        activeSearchTerm.value = newVal;
      }
    }, 300);
  });

  return {
    enteredSearchTerm,
    availableItems,
    updateSearch
  }
};

export default useSearch;
