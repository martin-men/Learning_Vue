<template>
  <base-card>
    <!-- <template v-slot:header> -->
    <template #header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <p>{{ infoText }}</p>
  </base-card>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<!-- scoped means that the styles will only affect this component an not any other component in the application. -->
<style scoped>

</style>