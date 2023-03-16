<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header class="bg-dark">
        <div class="container h-100 d-flex justify-content-between align-items-center">
            <nav class="nav-left">
                <h3><router-link class="header-link me-3" :to="{ name: 'Home' }">Boolfolio</router-link></h3>
            </nav>
            <nav class="nav-right">
                <ul class="d-flex m-0 p-0">
                    <li><router-link class="header-link me-3" :to="{ name: 'Home' }">Home</router-link></li>
                </ul>
            </nav>
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

    ul {
        list-style-type: none;

        .header-link {
            color: white;
            text-decoration: none;
        }
    }
}
</style>