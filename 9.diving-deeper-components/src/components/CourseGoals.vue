<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <!-- Scoped slots let you pass data from inside the component where you define the slot to the component that defines the markup -->
            <slot :item="goal" another-prop="... kjsdbkasjbdkasjb"></slot>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                goals: ['Finish the course', 'Learn Vue']
            }
        }
    }
</script>
