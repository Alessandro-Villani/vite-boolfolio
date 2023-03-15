<script>
export default {
    name: 'AppLoader',
}
</script>

<template>
    <div class="loader d-flex justify-content-center align-items-center">
        <i class="fa-solid fa-spinner fa-8x fa-spin"></i>
    </div>
</template>

<style scoped lang="scss">
.loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba($color: #000000, $alpha: 0.5);

    .fa-spinner {
        color: white;
    }
}
</style>