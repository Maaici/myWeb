<template>
    <div class="linker-content">
        <icon-font :type="link.icon" :size="21" />
        <div class="l-text l-descr">{{ link.descr }}:</div>
        <div class="l-linker" @click="goPage(link.path)">{{ link.text }}</div>
    </div>
</template>
<script>
import { Icon } from '@arco-design/web-vue';
const IconFont = Icon.addFromIconFontCn({ src: 'https://at.alicdn.com/t/font_180975_ue66sq60vyd.js' });
export default {
    props: {
        link: {
            icon: "",
            descr: '',
            path: '',
            text: ''
        }
    },
    data() {
        return {

        }
    },
    mounted() {

    },
    components: {
        IconFont
    },
    methods: {
        goPage(path) {
            window.open(path)
        }
    },
}
</script>
<style scoped>
.linker-content {
    display: flex;
    justify-content: flex-start;
    padding: 5px 0;
}

.l-descr {
    width: 60px;
    padding-left: 5px;
}

.l-linker {
    cursor: pointer;
}

.l-linker:hover {
    color: rgb(92, 117, 227);
}
</style>