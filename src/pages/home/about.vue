<template>
    <div class="main-content">
        <div class="left-content">
            <div class="personal-info">
                <div class="personal-photo"></div>
                <div class="personal-data">
                    <div class="personal-info-text big-text">{{ userInfo.name }}</div>
                    <div class="personal-info-text">{{ userInfo.city }}</div>
                    <div class="personal-info-text desc-text">"{{ userInfo.say }}"</div>
                    <a-divider :size="1" solid></a-divider>
                    <div>
                        <div v-for="link in links" :key="link.id">
                            <link-item :link="link"></link-item>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right-content">
            <div class="line-1">
                <div class="number-data">
                    <div class="number-text">2545215</div>
                    <div>总访问</div>
                </div>
                <div class="number-data">
                    <div class="number-text">89</div>
                    <div>文章数</div>
                </div>
                <div class="number-data">
                    <div class="number-text">1258</div>
                    <div>点赞数</div>
                </div>
            </div>
            <div class="line-2">
                <div v-for="lnode in lnodes" :key="lnode.id">
                    <life-node :lnode="lnode"></life-node>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import linkItem from '../../components/linkItem.vue'
import lifeNode from '../../components/lifeNode.vue'
export default {
    data() {
        return {
            userInfo: {
                name: '隔壁王菇凉的老公',
                photoPath: '',
                birthDay: '1992-06-24',
                codeYears: 8,
                city: 'suzhou',
                say: "Hi! I'm Aici Ma, I built this website to record my life and improve my abilities. If it happens to help you, it would be really an honor "

            },
            links: [{
                id: 1,
                icon: "icon-vue",
                descr: 'CSDN',
                path: 'https://blog.csdn.net/maaici',
                text: 'Maaici的博客'
            }, {
                id: 2,
                icon: "icon-react",
                descr: 'GitHub',
                path: 'https://github.com/Maaici',
                text: 'Maaici的GitHub'
            },],
            lnodes: [{
                title: "123131312312312313131231231231313123123",
                inTime: '1992年11月5日',
                content: 'fsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdas',
                text: ''
            }, {
                title: "1231313123123",
                inTime: '1992年',
                content: 'fsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdas',
                text: ''
            }, {
                title: "1231313123123",
                inTime: '1992年',
                content: 'fsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdas',
                text: ''
            }, {
                title: "1231313123123",
                inTime: '1992年',
                content: 'fsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdas',
                text: ''
            }, {
                title: "1231313123123",
                inTime: '1992年',
                content: 'fsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdasfsf sd asdf sdfasdgdgdaa sdas',
                text: ''
            },]
        }
    },
    components: {
        "link-item": linkItem,
        "life-node": lifeNode,
    },
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
    min-width: 250px;
    flex: 1;
}

.right-content {
    padding: 5px;
    min-width: 300px;
    flex: 3;
}

.personal-info {
    padding-top: 30px;
    background-color: rgb(0, 0, 0, .2);
}

.personal-photo {
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-image: url("../../assets/images/my-photo.jpg");
    background-repeat: round;
}

.personal-data {
    padding: 20px;
}

.personal-info-text {
    word-wrap: break-word;
    color: #adadad;
    text-align: center;
}

.big-text {
    font-size: 1.1rem;
    font-weight: 800;
    color: #ffffff;
}

.desc-text {
    padding: 10px 0;
    color: #e8e8e8;
    /* font-family: 'ZoomlaWenzhengming-A064'; */
}

.personal-info:hover {
    background-color: rgba(0, 0, 0, 0.4);
}

.line-1 {
    background-color: rgb(0, 0, 0, .2);
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    padding: 20px 0;
}

.number-data {
    text-align: center;
    flex: 1;
    min-width: 100px;
}

.number-text {
    font-size: 1.2rem;
    font-weight: 600;
    color: #5dc5f9;
}

.line-2 {
    margin-top: 10px;
    background-color: rgb(39, 39, 39);
    min-height: 800px;
}
</style>