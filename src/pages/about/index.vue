<template>
    <div class="head-content">
        <div class="head-title">
            {{ data }}
        </div>
        <div class="head-menu">

        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            name: "",
            logoPath: "",
        },
    },
}
</script>
<style scoped>
.head-content {
    background-color: #0d0c0f;
    height: 100px;
}
</style>