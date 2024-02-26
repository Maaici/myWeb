<template lang="">
    <div class="main-content">
        <m-header :data="title" :menus = "menus"></m-header>
    </div>
</template>
<script>
import header from '../../components/header.vue';
export default {
    data() {
        return {
            title: "瀚海拾贝",
            menus: [{
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
.main-content {}
</style>