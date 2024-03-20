<template>
    <div class="head-content">
        <div class="main-content">
            <div class="head-title">
                {{ data }}
            </div>
            <div class="head-menu" v-if="!minMenuType">
                <div class="menu_item" :class="{ menu_checked: '/' + item.name == checked }" v-for="item in menus "
                    v-bind:key="item.id" @click="goPage(item.name)">
                    {{ item.name }}
                </div>
            </div>
            <div class="min_head_menu" v-if="minMenuType">
                <div class="min_menu_btn" @click="minMenuSwitch">
                    MENU
                </div>
                <div class="min_menu_content" v-if="minMenuShow">
                    <div class="menu_item" :class="{ menu_checked: '/' + item.name == checked }"
                        v-for="  item   in   menus   " v-bind:key="item.id" @click="goPage(item.name)">
                        {{ item.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: "",
        menus: [{}],
        checked: '/'
    },
    data() {
        return {
            pageWidth: window.innerWidth,
            minMenuType: window.innerWidth <= 650,
            minMenuShow: false
        }
    },
    mounted() {
        // 监听窗口大小变化
        const resizeHandler = (data) => {
            this.pageWidth = window.innerWidth
            if (this.pageWidth <= 650) {
                this.minMenuType = true
            } else {
                this.minMenuType = false
            }
        };
        window.addEventListener('resize', resizeHandler);
    },
    beforeDestroy() {
        window.removeEventListener('resize', resizeHandler);
    },
    methods: {
        goPage(path) {
            this.$router.push("/" + path);
        },
        minMenuSwitch() {
            this.minMenuShow = !this.minMenuShow;
        }
    },
}
</script>
<style scoped>
.head-content {
    font-family: 'ali-light';
    font-weight: 800;
    padding: 10px 0;
    /* height: 100px; */
}

.main-content {
    max-width: 1100px;
    min-width: 320px;
    margin: 0 auto;
    padding: 2rem 0;
    text-align: center;
}

.head-title {
    font-family: 'dingding-Regular';
    font-size: 3.2rem;
    font-weight: 400;
    margin-bottom: 1rem;
}

.head-menu {
    display: flex;
    justify-content: center;
}

.min_menu_btn {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 1.1rem;
    font-family: '';
    padding: 5px 10px;

}

.min_menu_content {
    background-color: rgba(33, 33, 33, 0.6);
}

.menu_item {
    padding: .4rem 1rem;
    font-size: 1.3rem;
    cursor: pointer;
    color: #c8c8c8;
}

.menu_checked {
    text-decoration: underline;
    color: #ffffff;
}

.menu_item:hover {
    text-decoration: underline;
    color: #ffffff;
}
</style>