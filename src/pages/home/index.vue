<template lang="">
    <div class="main-content">
        <div class="main-head">
            <m-header :data="title" :menus = "menuList"></m-header>
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
            ]
        }
    },
    components: {
        "m-header": header
    }
}
</script>

<style scoped>
.main-head {
    background-image: url("../../assets/images/home_bg.jpg");
    background-size: cover;
}

.main-area {
    max-width: 1100px;
    min-width: 320px;
    margin: 0 auto;
    padding: 1rem;
}
</style>