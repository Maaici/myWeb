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
            id: 1,
            title: "包你懂设计模式之：适配器模式（Adapter）",
            inTime: "2023-11-25 12:25:36",
            content: "适配器模式是这个专栏的第一个结构型设计模式，之前六篇介绍了创建型设计模式，欢迎大家查看和交流。适配器模式：将一个类的接口转换成客户希望的另外一个接口，Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。适配器这个模式在我们生活中可以找到很多原型，比如下图中的港版插头需要接在内地的插座上",
            totalView: 7525,
            property: "原创",
            tags: ["设计模式", "架构设计"]
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