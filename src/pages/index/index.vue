<template lang="">
  <div class="mybody">
    <div class="main-content">
      <!-- <div class="logo"></div> -->
      <div class="introduction">
        <div class="intro-title">Hi,I am Maaici.</div>
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
            this.$router.push("/blog");
        },
    },
};
</script>
<style scoped>
.mybody {
    max-width: 1280px;
    min-width: 320px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
}

.main-content {
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
    color: #999999;
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
    color: #999999;
}

.transparent-btn:hover {
    color: #ffffff;
}
</style>
