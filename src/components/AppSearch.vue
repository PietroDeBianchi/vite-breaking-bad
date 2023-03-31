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
        <select @change="$emit('selectArchetype')" name="archetypeSelect" id="archetypeSelect"
            v-model="store.filterSelection">
            <option value="all">All</option>
            <option v-for="(archetype, index) in store.archetypeListApi" :value="archetype.archetype_name" :key="index">{{
                archetype.archetype_name }}</option>
        </select>
    </div>
</template>
<style scoped lang="scss">
select {
    width: 10%;
}
</style>