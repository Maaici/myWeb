<template>
    <div class="tags-content">
        <div class="title">热门标签</div>
        <div class="tags-box">
            <div class="tag-item" v-for="tag in tags" :key="tag.id" @click="goTagArticles(tag.id)">
                <span>{{ tag.tagName }}</span>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    props: {
        tags: [
            {
                tagName: '.net',
                id: 2
            }, {
                tagName: 'Java',
                id: 1
            }, {
                tagName: 'sql server',
                id: 1
            }, {
                tagName: 'sql',
                id: 1
            }, {
                tagName: 'JavaScript',
                id: 1
            }, {
                tagName: 'Vue',
                id: 1
            }, {
                tagName: 'webApi',
                id: 1
            }
        ]
    },
    mounted() {

    },
    methods: {
        goTagArticles(id) {

        }
    },
}
</script>
<style scoped>
.tags-content {
    padding: 20px;
}

.title {
    color: #ffffff;
    font-size: 1rem;
    margin-bottom: 10px;
}

.tags-box {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.tag-item {
    font-family: 'ali-light';
    font-weight: 100;
    background: #656565;
    margin: 5px 3px;
    padding: 1px 5px;
    border-radius: 2px;
    font-size: 12px;
    cursor: pointer;
}

.tag-item:hover {
    color: #5dc5f9;
}
</style>