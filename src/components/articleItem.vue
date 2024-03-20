<template>
    <div class="lnode-content" @click="goPage(article.id)">
        <div class="title-text">{{ article.title }} </div>
        <div class="line-content">{{ article.content }}</div>
        <div class="article-info">
            <div class="time-text"><span class="property-icon">{{ article.property }}</span>
                发布于 {{ article.inTime }}
            </div>
            <div class="view-text">{{ article.totalView }} 阅读</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        article: {
        }
    },
    mounted() {

    },
    methods: {
        goPage(id) {
            this.$router.push("/article/" + id);
        }
    },
}
</script>
<style scoped>
.lnode-content {
    padding: 20px 20px;
    /* margin-bottom: 20px; */
    border-bottom: 1px solid #3e3e3e;
    cursor: pointer;
}

.title-text {
    cursor: pointer;
    word-wrap: break-word;
    color: rgb(200, 200, 200);
    font-size: 1.1rem;
    font-weight: 600;
    padding-bottom: 10px;
}

.title-text:hover {
    color: #fb6b74;
}

.time-text {
    font-size: 14px;
    line-height: 30px;
}

.line-content {
    line-height: 20px;
    height: 40px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-break: break-word;
    -webkit-line-clamp: 2;
    color: rgb(181, 181, 181);
}

.article-info {
    display: flex;
    justify-content: space-between;
    color: #85a1b1;
}

.view-text {
    font-size: 14px;
    line-height: 30px;
}

.property-icon {
    color: #ffffff;
    background-color: rgb(223, 117, 124);
    border-radius: 2px;
    font-size: 12px;
    padding: 1px 5px;
    margin-right: 5px;
}
</style>