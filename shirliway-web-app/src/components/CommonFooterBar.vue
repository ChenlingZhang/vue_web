<template>
  <div class="footer">
    <div class="foot-icon-bar">
      <el-image
        :src="require('../static/icon/iconfonttencentweibo.png')"
        class="social_icon"
        @click="route2socialmedia('https://weibo.com/u/7883618149')"
      ></el-image>
      <el-image
        :src="require('../static/icon/douyin.png')"
        class="social_icon"
        @click="
          route2socialmedia(
            'https://www.tiktok.com/@shirliwayofficial?lang=zh_Hant'
          )
        "
      ></el-image>
      <el-image
        :src="require('../static/icon/instagram.png')"
        class="social_icon"
        @click="route2socialmedia('https://www.instagram.com/hplshirliway/')"
      ></el-image>
      <el-image
        :src="require('../static/icon/youtube.png')"
        class="social_icon"
        @click="
          route2socialmedia(
            'https://www.youtube.com/channel/UC2Rh0YK-HhucDx8ITmaQgxA'
          )
        "
      ></el-image>
    </div>

    <div class="foot-word-bar">
      <div class="foot-word-button-bar">
        <router-link to="/contact" class="link">Contact Us</router-link>
        <router-link to="/location" class="link">Locate Us</router-link>
        <router-link to="/wood" class="link">Product Information</router-link>
        <router-link to="/lookbook" class="link">Look Book</router-link>
      </div>
      <hr />
      <div class="foot-end-word">
        <span class="end-word">Typeface using HarmonyOS Sans Fonts </span>
        <br/>
        <br/>
        <span class="end-word">©2023 Shriliway. All Right Reserved.</span>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.foot-icon-bar {
  display: flex;
  justify-content: center;
  align-content: center;
  transform: scale(0.9);
}

.social_icon {
    width: 37px;
    height: 37px;
    transform: scale(1);
    padding-left: 20px;
    padding-right: 20px;
  margin: 0;
}

.foot-word-button-bar {
    display: flex;
    justify-content: center;
    align-content: center;
}

.foot-word-bar{
    background-color: black;
}

.foot-end-word {
    text-align: center;
    color: white;
}

.link{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
}

.end-word {
    padding-bottom: 10px;
    padding-top: 10px;
}
hr {
    color: whitesmoke;
    width: 90%;
}
</style>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

.router-link-active {
  text-decoration: none;
  color: whitesmoke;
}
</style>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    route2socialmedia(url) {
      window.location.href = url;
    },
  },
};
</script>
