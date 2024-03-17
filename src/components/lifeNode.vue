<template>
    <div class="lnode-content">
        <div class="title-text">{{ lnode.title }} </div>
        <div class="time-text">{{ lnode.inTime }}</div>
        <div class="line-2">{{ lnode.content }}</div>
    </div>
</template>
<script>
export default {
    props: {
        lnode: {
        }
    },
    mounted() {

    },
    methods: {
    },
}
</script>
<style scoped>
.lnode-content {
    padding: 20px 30px;
    margin-bottom: 20px;
}

.title-text {
    word-wrap: break-word;
    color: rgb(226, 226, 226);
    font-size: 1.1rem;
    font-weight: 600;
}

.time-text {
    color: rgb(253, 116, 125);
    /* font-size: 1rem; */
    padding: 0.1rem;
}

.line-2 {
    /* font-size: 1rem; */
    color: rgb(208, 208, 208);
}
</style>