<script>
import { store } from '../store.js';
export default {
    name: 'AppSearch',
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <div class="text-center w-100 p-4">
        <h3>Search your Monster-Type</h3>
        <select>
            <option value="All">All</option>
            <option v-for="(type, index) in store.archetypeListApi" :value="type" :key="index">{{
                type }}</option>
        </select>
    </div>
</template>
<style scoped lang="scss">
select {
    width: 10%;
}
</style>