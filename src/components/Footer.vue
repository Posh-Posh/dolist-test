<template>
    <footer>
        <p class="footer-copyright centered">
                by Pauline Frémont - {{ new Date().getFullYear() }}
        </p>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
    p {
        margin: 2rem auto;
    }
</style>