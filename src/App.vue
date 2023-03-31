<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import CharactersList from './components/CharactersList.vue';

export default {
    components: {
        AppHeader,
        AppSearch,
        CharactersList,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getCards() {
            let urlApi = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?level=6';
            axios.get(urlApi).then(response => {
                this.store.cardListApi = response.data.data;
                this.store.loading = false;
            })
        },
    },
    created() {
        this.getCards();
    }
}
</script>

<template>
    <AppHeader />
    <AppSearch />
    <main>
        <CharactersList />
    </main>
</template>



<style lang="scss">
@use './styles/general.scss';
</style>
