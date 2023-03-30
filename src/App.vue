<template>
    <MyHeader></MyHeader>
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
import MyHeader from './components/MyHeader.vue';
import MyFilter from './components/MyFilter.vue';
import ListCards from './components/ListCards.vue';

export default {
    components: {
        MyHeader,
        MyFilter,
        ListCards,
    },

}


</script>



<style lang="scss">
@use './styles/general.scss';
</style>
