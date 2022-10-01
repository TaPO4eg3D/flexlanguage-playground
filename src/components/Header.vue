<template lang="pug">
.header
    .logo FLEX Language 
    a.repo(href="#")
        img(src="@/assets/github-logo.png")
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeaderComponent',
})
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;

    background-color: #000;
    padding: 20px
}

.logo {
    color: #fff;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
}

.repo {
    margin-left: auto;
}
</style>
