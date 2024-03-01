<template>
    <div class="head-content">
        <div class="main-content">
            <div class="head-title">
                {{ data }}
            </div>
            <div class="head-menu">
                <div class="menu-item" v-for="item in menus " v-bind:key="item.id">
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
        menus: [{}]
    },
}
</script>
<style scoped>
.head-content {
    font-family:'ZoomlaWenzhengming-A064';
    padding: 50px 0;
    /* height: 100px; */
}

.main-content {
    max-width: 1280px;
    min-width: 320px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
}

.head-title {
    /* font-family:'ZoomlaWenzhengming-A064'; */
    font-size: 3.6rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.head-menu {
    display: flex;
    justify-content: center;
}

.menu-item {
    padding: .5rem 1rem;
    font-size: 1.1rem;
    cursor: pointer;
    color: #c8c8c8;
}

.menu-item:hover {
    text-decoration: underline;
    color: #ffffff;
}
</style>