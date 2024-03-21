<template>
    <div class="tags-content">
        <div class="title">文章分类</div>
        <div class="tags-box">
            <div class="tag-item" v-for="tag in articleTypes" :key="tag.id" @click="goTagArticles(tag.id)">
                <div >{{tag.typeName}}</div><div>{{tag.number}} 篇</div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    props: {
        articleTypes: [{}]
    },
    mounted() {

    },
    methods: {
        goTagArticles(id) {
            alert('待完善')
        }
    },
}
</script>
<style scoped>
.tags-content {
    padding:  20px 20px 0 20px;
}

.title {
    color: #ffffff;
    font-size: 1rem;
    margin-bottom: 10px;
}

.tags-box {
    /* display: flex;
    justify-content: flex-start;
    flex-wrap: wrap; */
}

.tag-item {
    font-family: 'ali-light';
    margin: 5px 5px;
    padding: 1px 5px;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
}

.tag-item:hover {
    color: #5dc5f9;
}
</style>