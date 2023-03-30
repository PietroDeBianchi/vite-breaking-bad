<script>
import { store } from '../store';
export default {
    name: "SingleCard",
    props: {
        image: String,
        name: String,
        type: String
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template></template>

<style scoped lang="scss" >
@use '../styles/general.scss' as *;
</style>