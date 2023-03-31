<script>
export default {
    name: 'CharacterCard',
    props: {
        image: String,
        name: String,
        archetype: String
    }
}
</script>

<template>
    <div class="card">
        <img class="img-fluid" :src="image" alt="name" />
        <h3>{{ name }}</h3>
        <h4>{{ archetype }}</h4>
    </div>
</template>

<style scoped lang="scss"></style>