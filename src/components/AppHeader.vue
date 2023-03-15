<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header class="bg-dark">
        <div class="container h-100 d-flex justify-content-between align-items-center">
            <div class="nav-left">
                <h3><a href="#">Boolfolio</a></h3>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    height: 80px;

    h3 a {
        color: white;
        text-decoration: none;
    }
}
</style>