<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object,
        isDetail: Boolean
    },
    computed: {
        publicationDate() {
            const fullDate = new Date(this.project.updated_at);
            const day = fullDate.getDate() < 10 ? '0' + fullDate.getDate() : fullDate.getDate();
            const month = fullDate.getMonth() < 9 ? '0' + (fullDate.getMonth() + 1) : fullDate.getMonth() + s1;
            const year = fullDate.getFullYear();
            const hour = fullDate.getHours() < 10 ? '0' + fullDate.getHours() : fullDate.getHours();
            const minutes = fullDate.getMinutes() < 10 ? '0' + fullDate.getMinutes() : fullDate.getMinutes();
            const date = `${day}/${month}/${year} - ${hour}:${minutes}`;
            return date;
        },
        contentAbstract() {
            return this.project.description.slice(0, 50) + '...';
        }
    }
}
</script>

<template>
    <router-link :to="{ name: 'ProjectDetails', params: { id: project.id } }" class="card bg-secondary p-5 mb-5">
        <div class="card-header p-0 pb-3 mb-3">
            <time>Pubblicato il: {{ publicationDate }}</time>
        </div>
        <div class="row">
            <div v-if="isDetail" class="col-3">
                <img class="img-fluid" :src="project.image_url" :alt="project.name">
            </div>
            <div :class="isDetail ? 'col-9' : 'col-12'">
                <div class="title d-flex align-items-center mb-3" :class="{ 'justify-content-center': !isDetail }">
                    <h3 class="me-2">{{ project.name }}</h3>
                    <div v-if="project.type" class="badge rounded-pill" :style="`background-color: ${project.type.color}`">
                        {{
                            project.type.label }}</div>
                </div>
                <p v-if="isDetail">{{ project.description }}</p>
                <p v-else>{{ contentAbstract }}</p>
            </div>
        </div>
        <div v-if="isDetail" class="card-footer mt-3 pt-3">
            <div v-if="project.technologies.length" class="technologies d-flex justify-content-end align-items-center">
                <p class="mb-0 me-2">Tecnologie:</p>
                <div v-for="tech in project.technologies" class="technology me-2" :style="`color: ${tech.color}`"
                    v-html="tech.icon"></div>
            </div>
        </div>
    </router-link>
</template>

<style scoped lang="scss">
.card {
    color: white;
    text-decoration: none;
}

.card-footer,
.card-header {
    background-color: transparent;
}

.technologies {
    p {
        font-size: 18px;
    }

    font-size: 25px;
}
</style>