<template lang="">
  <div class="mybody">
    <div class="main-content">
      <!-- <div class="logo"></div> -->
      <div class="introduction">
        <div class="intro-title"><div>Hi,I am Maaici.</div></div>
        <div class="intro-content">If you love something, do that thing!</div>
      </div>
      <div class="btn-content">
        <div class="transparent-btn" @click="goBlog">READ MORE</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods: {
        goBlog() {
            this.$router.push("/");
        },
    },
};
</script>
<style scoped>
.mybody {
    max-width: 1100;
    min-width: 320px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
}

.main-content {
    font-family: 'ZoomlaWenzhengming-A064';
    margin-top: 25vh;
}

/* .logo{
        margin: 0 auto;
        width: 180px;
        height: 180px;
        background: url("../../assets/images/Logo.png");
        background-repeat: round;
    } */
.intro-title {
    font-size: 4rem;
    font-weight: 600;
    color: #ffffff;

}

.intro-title>div {
    background-color: rgb(50, 65, 236, 0.15);
    width: 500px;
    margin: 0 auto;
}

.intro-content {
    padding-top: 1rem;
    font-size: 1.6rem;
    color: #848484;
}

.btn-content {
    padding-top: 5rem;
}

.transparent-btn {
    cursor: pointer;
    font-size: 1.6rem;
    border: 0.1rem solid #ffffff;
    border-radius: 0.5rem;
    width: 15rem;
    line-height: 3rem;
    margin: 0 auto;
    color: #ed7777;
}

.transparent-btn:hover {
    color: #f05f5f;
}
</style>
