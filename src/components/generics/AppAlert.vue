<script>
export default {
    name: 'AppAlert',
    props: {
        alertClass: String,
        alertType: String,
        alertMessage: String
    },
    emits: ['alert-close']
}
</script>

<template>
    <div class="container">
        <div class="alert alert-dismissible fade show" :class="alertClass" role="alert">
            <strong>{{ alertType }}</strong> {{ alertMessage }}
            <button type="button" class="btn-close" @click="$emit('alert-close')"></button>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>