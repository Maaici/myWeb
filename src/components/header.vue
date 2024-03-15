<template>
    <div class="head-content">
        <div class="main-content">
            <div class="head-title">
                {{ data }}
            </div>
            <div class="head-menu">
                <div class="menu_item" :class="{menu_checked: '/'+item.name == checked  }" v-for="item in menus " v-bind:key="item.id" @click="goPage(item.name)">
                    {{ item.name }}
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
        mounted() {
        },
        methods: {
            goPage(path) {
                this.$router.push("/" + path);
            },
        },
        
    }
</script>
<style scoped>
.head-content {
    font-family: 'ZoomlaWenzhengming-A064';
    padding: 10px 0;
    /* height: 100px; */
}

.main-content {
    max-width: 1100px;
    min-width: 320px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
}

.head-title {
    /* font-family:'ZoomlaWenzhengming-A064'; */
    font-size: 4.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.head-menu {
    display: flex;
    justify-content: center;
}

.menu_item {
    padding: .5rem 1rem;
    font-size: 1.4rem;
    cursor: pointer;
    color: #c8c8c8;
}

.menu_checked{
    text-decoration:underline;
    color:#ffffff;
}

.menu_item:hover {
    text-decoration: underline;
    color: #ffffff;
}
</style>