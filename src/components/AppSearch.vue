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
    <select @change="$emit('SearchArchetype')" name="archetypeSelect" id="archetypeSelect" v-model="store.selectArchetype">
        <option value="">All</option>
        <option v-for="(archetype, index) in store.cardArchetypes" :value="archetype.archetype_name" :key="index">{{
            archetype.archetype_name }}</option>
    </select>
</template>
<style scoped lang="scss"></style>