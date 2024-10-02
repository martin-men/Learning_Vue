import { ref } from "vue";

// We can accept parameters in the hook function
const useAlert = (startingVisibility = false) => {
  const alertIsVisible = ref(startingVisibility);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return {
    alertIsVisible,
    showAlert,
    hideAlert,
  };
};

export default useAlert;
