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
            <div class="type-content bg-color" ref="pInfo" :style="{top:stickyTop}">
                <classification :articleTypes="articleTypes"></classification>
                <div class="solid-line"></div>
                <article-tags :tags="tags"></article-tags>
            </div>
        </div>
    </div>
</template>
<script>
    import articleItem from '../../components/articleItem.vue';
    import tags from '../../components/tags.vue';
    import classification from '../../components/classification.vue'
    export default {
        data() {
            return {
                stickyTop: '10px',
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
                ,
                windowHeight: 0,
                tags: [
                    {
                        tagName: '.net',
                        id: 2
                    }, {
                        tagName: 'Java',
                        id: 1
                    }, {
                        tagName: '人生感悟',
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
                    }, {
                        tagName: '英语',
                        id: 1
                    }
                ]
                ,
                articleTypes: [
                    {
                        id: 2,
                        typeName: 'C#基础入门',
                        number: 15
                    },
                    {
                        id: 2,
                        typeName: 'sql server',
                        number: 7
                    },
                    {
                        id: 2,
                        typeName: 'asp.net core',
                        number: 22
                    }, {
                        id: 2,
                        typeName: '前端老三件超基础教程',
                        number: 31
                    }, {
                        id: 2,
                        typeName: 'linux系统基础',
                        number: 43
                    }, {
                        id: 2,
                        typeName: '.net基础',
                        number: 44
                    }, {
                        id: 2,
                        typeName: '有趣的项目',
                        number: 23
                    }, {
                        id: 2,
                        typeName: '电子电路电器',
                        number: 3
                    }, {
                        id: 2,
                        typeName: '生活有感',
                        number: 12
                    }
                ]
            }
        },
        components: {
            'article-item': articleItem,
            'article-tags': tags,
            'classification': classification
        },
        mounted() {
            // 监听窗口大小变化
            window.addEventListener('resize', this.setStickyTop);
            this.setStickyTop()
        },
        beforeRouteLeave() {
            window.removeEventListener('resize', this.setStickyTop);
        },
        methods: {
            setStickyTop() {
                let pHeight = this.$refs.pInfo.offsetHeight
                let wHeight = window.innerHeight
                let h = pHeight - wHeight
                if (h < 0) {
                    this.stickyTop = '10px'
                } else {
                    this.stickyTop = -10 - h + 'px'
                }
                //console.log(pHeight, wHeight, this.stickyTop)
            },
        },
    }
</script>
<style scoped>
    .solid-line {
        width: 80%;
        margin: 0 auto;
        height: 20px;
        border-bottom: 1px solid #4e4e4e;
    }

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
        border-radius: 5px;
        background-color: rgb(0, 0, 0, 0.2);
    }

    .type-content {
        position: sticky;
        top: -550px;
    }

    /* .article-item:hover {
    background-color: rgb(0, 0, 0, 0.3);
} */
</style>