<script>
import { store } from '../store';
import SingleCard from './SingleCard.vue';
export default {
    name: "ListCards",
    components: {
        SingleCard
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template></template>

<style scoped lang="scss"></style>