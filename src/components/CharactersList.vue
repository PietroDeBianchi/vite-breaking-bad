<script>
import { store } from '../store';
import CharacterCard from './CharacterCard.vue';

export default {
    name: 'Characterslist',
    data() {
        return {
            store
        }
    },
    components: {
        CharacterCard
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-3 mb-2" v-for="(card, index) in store.cardListApi" :key="index">
                <CharacterCard :image="card.card_images[0].image_url" :name="card.name" :type="card.type" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    background-color: #CA9249;


}
</style>