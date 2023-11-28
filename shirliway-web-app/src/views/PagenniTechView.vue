<template>
  <div class="home">
    <div class="header">
      <NaviBar />
    </div>

    <div class="body">
      <div class="top">
        <div class="top-img">
          <el-image :src="require('@/static/img/PagenniTech.png')"></el-image>
          <span>PAGENNI-TECH</span>
        </div>
      </div>

      <div class="desc-div">
        <div class="desc-box">
          <div class="desc-header">
            <span>About PAGENNI-TECH</span>
          </div>

          <div class="desc-body">
            <span
              >lProducts of exquisite workmanship, advanced concept, with a
              number of technical patents of the products, as early as 2003
              became the first domestic production of high-grade brushed
              aluminum surface decorative plate enterprises. Over the years of
              continuous progress, in addition to technical improvement, but
              also to environmental protection has made great efforts. He
              adheres to the direction of green, low-carbon and sustainable
              development, adhering to the concept of "coming from nature and
              returning to nature", and born " PAGENNI-TECH" from 20 years of
              technological precipitation.</span
            >
          </div>
        </div>
      </div>

      <div class="commercial-space">
        <div class="commercial-space-show">
          <el-image
            :src="require('@/static/img/commercial-space.png')"
          ></el-image>
        </div>

        <div class="commercial-space-desc">
          <div class="ultra-felx">
            <span>ULTRA-FLEXABLE</span>
          </div>

          <div class="ultra-flex-desc">
            <span>
              PAGENNI is the technology which make Shirliway laminate is only
              0.35 millimeters thick, remain excellent fire resistance.
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <FootBar />
    </div>
  </div>
</template>

<script>
import NaviBar from "@/components/NavigationHeader.vue";
import FootBar from "@/components/CommonFooterBar.vue";

export default {
  name: "PagenniTechView",
  components: {
    NaviBar,
    FootBar,
  },
};
</script>

<style>
.home {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding-bottom: 100px;
  font-family: HarmonySans_Regular;
}
.body {
  position: relative;
  min-height: 100vh;
  padding-bottom: 120px;
}

.top-img {
  position: relative;
  width: 100%;
  height: auto;
  display: justified;
}

.top-img span {
  position: absolute;
  top: 40%;
  left: 30%;
  font-family: HarmonyOS Sans SC;
  font-size: 80px;
  font-weight: 900;
  line-height: 94px;
  letter-spacing: 0.3em;
  text-align: justified;
  color: #fff;
}

.desc-div {
  width: 100%;
  height: auto;
  line-height: 32px;
}

.desc-box {
  justify-content: center;
  align-content: center;
  align-items: center;
}

.desc-header span {
  font-family: HarmonyOS Sans SC;
  font-size: 36px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0.1em;
  text-align: justified;
}

.desc-body {
  margin: 0 auto;
  width: 883px;
  font-family: HarmonyOS Sans SC;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.1em;
  text-align: start;
}

.desc-body span {
  text-align: start;
}

.commercial-space-show {
  margin: 0 auto;
  width: 968px;
}

.ultra-flex span {
  font-family: HarmonyOS Sans SC;
  font-size: 40px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0.2em;
  text-align: justified;
}

.ultra-flex-desc span {
  font-family: HarmonyOS Sans SC;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.1em;
  text-align: justified;
}

.top {
  width: 100%;
  height: auto;
  margin-bottom: 0px;
}
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 120px;
  width: 100%;
}
</style>

