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
            let urlApi = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
            if (this.store.filterSelection.length > 0) {
                urlApi += `?archetype=${this.store.filterSelection}`
            }
            axios.get(urlApi).then(response => {
                this.store.cardListApi = response.data.data;
            })
        },
        getArchetype() {
            axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then(response => {
                this.store.archetypeListApi = response.data;
            })
        }
    },
    created() {
        this.getCards();
        this.getArchetype();
    }
}
</script>

<template>
    <AppHeader />
    <AppSearch @selectArchetype="getCards()" />
    <main>
        <CharactersList />
    </main>
</template>



<style lang="scss">
@use './styles/general.scss';
</style>
