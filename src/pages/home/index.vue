<template lang="">
    <div class="main-content">
        <div class="main-head">
            <m-header :data="title" :menus="menuList" :checked="checked"></m-header>
        </div>
        <div class="main-area">
            <router-view></router-view>
        </div>
    </div>

</template>
<script>
import header from '../../components/header.vue';
export default {
    data() {
        return {
            title: "瀚海拾贝",
            menuList: [{
                id: "1",
                name: "About",
                pat: "",
                icon: ""
            }, {
                id: "2",
                name: "Blog",
                pat: "",
                icon: ""
            }, {
                id: "3",
                name: "Project",
                pat: "",
                icon: ""
            }, {
                id: "4",
                name: "List100",
                pat: "",
                icon: ""
            }, {
                id: "5",
                name: "Friends",
                pat: "",
                icon: ""
            }, {
                id: "5",
                name: "Search",
                pat: "",
                icon: ""
            },
            ],
            checked: '/Blog'
        }
    },
    mounted() {
        //首次进入更新导航组件路由定位（高亮显示）
        let path = this.$router.currentRoute.value.path
        if (path != '/') {
            this.checked = path
        }
        else {
            this.checked = '/Blog'
        }
    },
    components: {
        "m-header": header
    },
    //通知组件路由变化
    beforeRouteUpdate(to, from, next) {
        next()
        this.checked = to.fullPath
    }
}
</script>

<style scoped>
.main-head {
    background-image: url("../../assets/images/home_bg.jpg");
    background-size: cover;
}

.main-area {
    max-width: 1000px;
    min-width: 300px;
    margin: 0 auto;
    /* padding: 1rem; */
}
</style>