<script>
import { store } from '../store';
export default {
    name: "MyHeader",
    components: {
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container d-flex justify-content-center align-items-center p-2">
        <img src="../assets/Yugioh_Logo.webp" alt="Logo" class="logo">
        <h1>Yu-Gi-Oh Deck Game!</h1>
    </div>
</template>

<style scoped lang="scss">
.logo {
    width: 15%;
    margin-right: 12px;
}
</style>