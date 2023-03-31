<script>
export default {
    name: 'CharacterCard',
    props: {
        image: String,
        name: String,
        type: String
    }
}
</script>

<template>
    <div class="card text-center p-1">
        <img class="img-fluid" :src="image" alt="name" />
        <h6>{{ name }}</h6>
        <span>{{ type }}</span>
    </div>
</template>

<style scoped lang="scss"></style>