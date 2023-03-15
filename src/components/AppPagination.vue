<script>
export default {
    name: 'AppPagination',
    props: {
        links: Array,
    },
    emits: ['change-page']
}
</script>

<template>
    <nav>
        <ul class="pagination">
            <li v-for="link in links" class="page-item" :class="{ 'disabled': !link.url }">
                <button type="button" class="page-link" :class="{ 'active': link.active }" v-html="link.label"
                    @click="$emit('change-page', link.url)"></button>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss"></style>