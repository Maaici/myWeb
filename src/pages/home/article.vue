<template>
    <div class="main-content">
        <div class="article-title bg-color1">{{article.title}}</div>
        <div class="article-info bg-color1">
            <div class="create-time">发布于：{{article.inTime}}</div>
            <div class="view-number">阅读：{{article.totalView}}</div>
        </div>
        <div class="article-type bg-color1">
            <div class="tag-style">收录合辑:</div>
            <div class="btn-tag-style">{{article.listName}}</div>
            <div class="tag-style">标签:</div>
            <div class="btn-tag-style" v-for="item in article.tags">{{item.name}}</div>
        </div>
        <div class="article-body">
            <div v-html="article.content"></div>
            <div class="solid-line"></div>
            <div class="next-article" @click="goNextArticle(article.nextId)">下一篇：{{article.nextArticle}}</div>
            <div class="article-like">
                <div class="like-btn-group">
                    <div class="btn-give btn-type">赏</div>
                    <div class="btn-like btn-type">赞</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                article: {
                    id: 1,
                    title: "包你懂设计模式之：适配器模式（Adapter）",
                    inTime: "2023-11-25",
                    content: `<div id="content_views" class="htmledit_views">
                    <p>简单工厂模式其实不在传统的23种设计模式中，它和工厂模式一样属于<span style="color:#f33b45;">创建型</span>的设计模式，主要用它来创建需要特定的实例。</p> 
<p>从它的命名联想到我们现实生活中的工厂，我让他给我造手机，好了手机造好了；我让他造一个笔记本，也没问题；我让他造航母，“对不起我们是 apple ,不产这个！”。简单工厂模式就是对这种场景的抽象，我们要啥不需要我们自己造，工厂来！</p> 
<p>简单工厂模式的实现基于面向对象的<span style="color:#f33b45;">继承和多态</span>，首先定义一个父类（抽象类），然后下面我们定义一系类的类来继承并重写父类的虚方法。工厂外部则需要用父类的来接受工厂类创建的子类实例，，即可使用子类的内部实现。下面我们用简单工厂来模拟计算器的加减乘除：</p> 
<p><strong>1、创建一个计算类（父类）</strong></p> 
                </div><div id="content_views" class="htmledit_views">
                    <p>简单工厂模式其实不在传统的23种设计模式中，它和工厂模式一样属于<span style="color:#f33b45;">创建型</span>的设计模式，主要用它来创建需要特定的实例。</p> 
<p>从它的命名联想到我们现实生活中的工厂，我让他给我造手机，好了手机造好了；我让他造一个笔记本，也没问题；我让他造航母，“对不起我们是 apple ,不产这个！”。简单工厂模式就是对这种场景的抽象，我们要啥不需要我们自己造，工厂来！</p> 
<p>简单工厂模式的实现基于面向对象的<span style="color:#f33b45;">继承和多态</span>，首先定义一个父类（抽象类），然后下面我们定义一系类的类来继承并重写父类的虚方法。工厂外部则需要用父类的来接受工厂类创建的子类实例，，即可使用子类的内部实现。下面我们用简单工厂来模拟计算器的加减乘除：</p> 
<p><strong>1、创建一个计算类（父类）</strong></p> 
                </div><div id="content_views" class="htmledit_views">
                    <p>简单工厂模式其实不在传统的23种设计模式中，它和工厂模式一样属于<span style="color:#f33b45;">创建型</span>的设计模式，主要用它来创建需要特定的实例。</p> 
<p>从它的命名联想到我们现实生活中的工厂，我让他给我造手机，好了手机造好了；我让他造一个笔记本，也没问题；我让他造航母，“对不起我们是 apple ,不产这个！”。简单工厂模式就是对这种场景的抽象，我们要啥不需要我们自己造，工厂来！</p> 
<p>简单工厂模式的实现基于面向对象的<span style="color:#f33b45;">继承和多态</span>，首先定义一个父类（抽象类），然后下面我们定义一系类的类来继承并重写父类的虚方法。工厂外部则需要用父类的来接受工厂类创建的子类实例，，即可使用子类的内部实现。下面我们用简单工厂来模拟计算器的加减乘除：</p> 
<p><strong>1、创建一个计算类（父类）</strong></p> 
                </div>`,
                    totalView: 7525,
                    totalLike: 98,
                    property: "原创",
                    listName: '详解26种设计模式',
                    tags: [{ id: 1, name: "设计模式" }, { id: 1, name: "架构设计" }],
                    nextId: '',
                    nextArticle: '创建不同的运算子类的实例'
                }
            }
        },
    }
</script>
<style scoped>
    .solid-line {
        /* width: 90%; */
        margin: 0 auto;
        height: 20px;
        border-bottom: 1px solid #4e4e4e;
    }

    .main-content {
        padding: 25px 5px;
    }

    .bg-color1 {
        background-color: rgb(0, 0, 0, .2);
    }

    .article-title {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        font-size: 28px;
        font-weight: 600;
        text-align: center;
        padding: 20px 10px 10px 10px;
    }

    .article-type {
        padding: 0 40px 30px 40px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .tag-style {
        font-size: 1rem;
        color: #abc0d3;
        margin: 5px;
    }

    .btn-tag-style {
        margin: 5px;
        padding: 2px 5px;
        background-color: #4e4e4e;
        border-radius: 2px;
        cursor: pointer;
    }
    .btn-tag-style:hover{
        background-color: rgb(160, 115, 115);
    }

    .article-info {
        text-align: center;
        display: flex;
        justify-content: center;
        font-size: .9rem;
        padding: 10px 0 20px 0;
        color: rgb(127, 223, 255);
        ;
    }

    .create-time {
        width: 160px;
        text-align: left;
    }

    .view-number {
        width: 100px;
        text-align: right;
    }

    .article-body {
        background-color: rgb(39, 39, 39);
        padding: 10px 40px;
    }

    .next-article{
        font-size: 1rem;
        padding: 10px 0;
        color: #a8c2f9;
        cursor: pointer;        
    word-wrap: normal;
    }
    .next-article:hover{
        color: #779ef3;
    }

    .article-like{
        padding: 20px 0 50px 0;
    }

    .like-btn-group{
        display: flex;
        justify-content: center;
        background-color: #717171;
        width: 120px;
        margin: 0 auto;
        border-radius: 5px;
        font-size: 1.2rem;
        text-align: center;
    }

    .btn-type{
        flex: 1;
        padding: 5px;
        cursor: pointer;
    }

    .btn-type:hover{
        border-radius: 5px;
        background-color: #ff8282;
    }

    .btn-like{
        border-left: 1px solid #4e4e4e;
    }
    .btn-give{
        border-right: 1px solid #4e4e4e;

    }
</style>