<template>
    <div class="main-content">
        <div class="left-content">
            <div class="article-content bg-color">
                <div class="article-item" v-for="article in articles" :key="article.id">
                    <article-item :article="article"></article-item>
                </div>
            </div>
        </div>
        <div class="right-content">
            <div class="type-content bg-color">
                faadfsadfsad
            </div>
        </div>
    </div>
</template>
<script>
import articleItem from '../../components/articleItem.vue';
export default {
    data() {
        return {
            articles: [{
                id: 1,
                title: "包你懂设计模式之：适配器模式（Adapter）",
                inTime: "2023-11-25 12:25:36",
                content: "适配器模式是这个专栏的第一个结构型设计模式，之前六篇介绍了创建型设计模式，欢迎大家查看和交流。适配器模式：将一个类的接口转换成客户希望的另外一个接口，Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。适配器这个模式在我们生活中可以找到很多原型，比如下图中的港版插头需要接在内地的插座上",
                totalView: 7525,
                property: "原创",
                tags: ["设计模式", "架构设计"]
            }, {
                id: 2,
                title: "包你懂设计模式之：适配器模式（Adapter）",
                inTime: "2023-11-25 12:25:36",
                content: "适配器模式是这个专栏的第一个结构型设计模式，之前六篇介绍了创建型设计模式，欢迎大家查看和交流。适配器模式：将一个类的接口转换成客户希望的另外一个接口，Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。适配器这个模式在我们生活中可以找到很多原型，比如下图中的港版插头需要接在内地的插座上",
                totalView: 7525,
                property: "原创",
                tags: ["设计模式", "架构设计"]
            }, {
                id: 1,
                title: "包你懂设计模式之：适配器模式（Adapter）",
                inTime: "2023-11-25 12:25:36",
                content: "适配器模式是这个专栏的第一个结构型设计模式，之前六篇介绍了创建型设计模式，欢迎大家查看和交流。适配器模式：将一个类的接口转换成客户希望的另外一个接口，Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。适配器这个模式在我们生活中可以找到很多原型，比如下图中的港版插头需要接在内地的插座上",
                totalView: 7525,
                property: "原创",
                tags: ["设计模式", "架构设计"]
            }, {
                id: 2,
                title: "包你懂设计模式之：适配器模式（Adapter）",
                inTime: "2023-11-25 12:25:36",
                content: "适配器模式是这个专栏的第一个结构型设计模式，之前六篇介绍了创建型设计模式，欢迎大家查看和交流。适配器模式：将一个类的接口转换成客户希望的另外一个接口，Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。适配器这个模式在我们生活中可以找到很多原型，比如下图中的港版插头需要接在内地的插座上",
                totalView: 7525,
                property: "原创",
                tags: ["设计模式", "架构设计"]
            }, {
                id: 1,
                title: "包你懂设计模式之：适配器模式（Adapter）",
                inTime: "2023-11-25 12:25:36",
                content: "适配器模式是这个专栏的第一个结构型设计模式，之前六篇介绍了创建型设计模式，欢迎大家查看和交流。适配器模式：将一个类的接口转换成客户希望的另外一个接口，Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。适配器这个模式在我们生活中可以找到很多原型，比如下图中的港版插头需要接在内地的插座上",
                totalView: 7525,
                property: "原创",
                tags: ["设计模式", "架构设计"]
            }, {
                id: 2,
                title: "包你懂设计模式之：适配器模式（Adapter）",
                inTime: "2023-11-25 12:25:36",
                content: "适配器模式是这个专栏的第一个结构型设计模式，之前六篇介绍了创建型设计模式，欢迎大家查看和交流。适配器模式：将一个类的接口转换成客户希望的另外一个接口，Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。适配器这个模式在我们生活中可以找到很多原型，比如下图中的港版插头需要接在内地的插座上",
                totalView: 7525,
                property: "原创",
                tags: ["设计模式", "架构设计"]
            }, {
                id: 1,
                title: "包你懂设计模式之：适配器模式（Adapter）",
                inTime: "2023-11-25 12:25:36",
                content: "适配器模式是这个专栏的第一个结构型设计模式，之前六篇介绍了创建型设计模式，欢迎大家查看和交流。适配器模式：将一个类的接口转换成客户希望的另外一个接口，Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。适配器这个模式在我们生活中可以找到很多原型，比如下图中的港版插头需要接在内地的插座上",
                totalView: 7525,
                property: "原创",
                tags: ["设计模式", "架构设计"]
            }, {
                id: 2,
                title: "包你懂设计模式之：适配器模式（Adapter）",
                inTime: "2023-11-25 12:25:36",
                content: "适配器模式是这个专栏的第一个结构型设计模式，之前六篇介绍了创建型设计模式，欢迎大家查看和交流。适配器模式：将一个类的接口转换成客户希望的另外一个接口，Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。适配器这个模式在我们生活中可以找到很多原型，比如下图中的港版插头需要接在内地的插座上",
                totalView: 7525,
                property: "原创",
                tags: ["设计模式", "架构设计"]
            }, {
                id: 1,
                title: "包你懂设计模式之：适配器模式（Adapter）",
                inTime: "2023-11-25 12:25:36",
                content: "适配器模式是这个专栏的第一个结构型设计模式，之前六篇介绍了创建型设计模式，欢迎大家查看和交流。适配器模式：将一个类的接口转换成客户希望的另外一个接口，Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。适配器这个模式在我们生活中可以找到很多原型，比如下图中的港版插头需要接在内地的插座上",
                totalView: 7525,
                property: "原创",
                tags: ["设计模式", "架构设计"]
            }, {
                id: 2,
                title: "包你懂设计模式之：适配器模式（Adapter）",
                inTime: "2023-11-25 12:25:36",
                content: "适配器模式是这个专栏的第一个结构型设计模式，之前六篇介绍了创建型设计模式，欢迎大家查看和交流。适配器模式：将一个类的接口转换成客户希望的另外一个接口，Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。适配器这个模式在我们生活中可以找到很多原型，比如下图中的港版插头需要接在内地的插座上",
                totalView: 7525,
                property: "原创",
                tags: ["设计模式", "架构设计"]
            },
            ]
        }
    }, components: {
        'article-item': articleItem
    }
}
</script>
<style scoped>
.main-content {
    padding: 20px 0;
    display: flex;
    flex-flow: wrap;
    align-content: flex-start;
}

.left-content {
    padding: 5px;
    min-width: 300px;
    flex: 3;
}

.right-content {
    padding: 5px;
    min-width: 300px;
    flex: 1;
}

.bg-color {
    background-color: rgb(0, 0, 0, 0.2);
}

/* .article-item:hover {
    background-color: rgb(0, 0, 0, 0.3);
} */
</style>