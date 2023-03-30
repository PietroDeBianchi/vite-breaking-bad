<script>
import axios from 'axios';
import { store } from './store';
import MyHeader from './components/MyHeader.vue';
import Search from './components/Search.vue';
import ListCards from './components/ListCards.vue';

export default {
    components: {
        MyHeader,
        Search,
        ListCards,
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <MyHeader />
    <Search />
    <ListCards />
    <SingleCard />
</template>



<style lang="scss">
@use './styles/general.scss';
</style>
