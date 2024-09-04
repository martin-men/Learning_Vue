<template>
    <div>
        <header>
            <slot name="header"></slot>
        </header>
        <slot>
            <h1>DEFAULT CONTENT FOR THE SLOT IF NOTHING IS PASSED</h1>
        </slot>
    </div>
</template>

<script>
export default {
    mounted() {
        // Special attribute to access the slot's information
        console.log(this.$slots)

        // Access specific slots
        console.log(this.$slots.header)
        console.log(this.$slots.default)
    }
}
</script>

<style scoped>
div header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div {
    margin: 2rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
}
</style>
