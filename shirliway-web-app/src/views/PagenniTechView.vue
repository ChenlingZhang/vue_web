<template>
  <div class="home">
    <div class="header">
      <NaviBar />
    </div>

    <div class="body">
      <div class="top">
        <div class="top-img">
          <img style="width: 100%; height: 534px;"
            src="../static/img/test2.jpg"
          />
        </div>
      </div>

      <div class="desc-div">
        <div class="desc-box">
          <div class="desc-header">
            <span>About PAGENNI-TECH</span>
          </div>

          <div class="desc-body">
            <span>
              lProducts of exquisite workmanship, advanced concept, with a
              number of technical patents of the products, as early as 2003
              became the first domestic production of high-grade brushed
              aluminum surface decorative plate enterprises. Over the years of
              continuous progress, in addition to technical improvement, but
              also to environmental protection has made great efforts. He
              adheres to the direction of green, low-carbon and sustainable
              development, adhering to the concept of "coming from nature and
              returning to nature", and born " PAGENNI-TECH" from 20 years of
              technological precipitation.
            </span>
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
            <span
              style="
                font-family: HarmonySans_Blod;
                font-size: 20px;
                font-weight: bold;
                line-height: 23px;
                letter-spacing: 0.2em;
              "
              >ULTRA-FLEXABLE</span
            >
          </div>

          <div class="ultra-flex-desc">
            <span>
              PAGENNI is the technology which make Shirliway laminate is only
              0.35 millimeters thick, remain excellent fire resistance.
            </span>
          </div>
        </div>
      </div>

      <div class="bendable">
        <div class="bendable-img">
          <el-image :src="require('@/static/img/bendable.png')" />
        </div>
        <div class="bendable-desc">
          <div class="bendable-desc-head">
            <span style="">BENDABLE</span>
          </div>
          <div class="bendable-desc-deatil">
            <span
              >PAGENNI allows fire-resistant boards to be applied on various
              surfaces and combined with various styles, thereby inspiring
              endless design possibilities. This means that PAGENNI provides
              more flexibility and creativity, enabling designers to achieve
              diversified and personalized designs in the application of
              fire-resistant boards.</span
            >
          </div>
        </div>
      </div>

      <div class="environment">
        <div class="environment-img">
          <el-image :src="require('@/static/img/environment.png')" />
        </div>

        <div class="environment-desc">
          <div class="environment-desc-head">
            <span>ENVIRONMENT FRIENDLY</span>
          </div>
          <div class="environment-desc-detail">
            <span
              >Shirliway PEGENNI laminate is a low formaldehyde emission
              material with inherent hard-wearing properties, scratch-resistant,
              easy to clean, and an environmentally friendly building
              material.</span
            >
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

.top {
  width: 100%;
  height: auto;
  margin-bottom: 0px;
  margin-top: 5px;
}

.top-img {
  position: relative;
  width: auto;
  height: 534px;
  object-fit: fill;
}

.desc-div {
  width: 100%;
  max-width: 100%;
  height: auto;
  line-height: 32px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.desc-box {
  justify-content: center;
  align-content: center;
  align-items: center;
}

.desc-header span {
  font-family: HarmonySans_Blod;
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;
  letter-spacing: 0.1em;
  color: black;
}

.desc-body {
  margin: 0 auto;
  width: 883px;
  font-family: HarmonySans_Regular;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.1em;
  text-align: justify;
  margin-top: 40px;
  color: black;
}

.desc-body span {
  text-align: start;
}

.commercial-space-show {
  margin: 0 auto;
  width: 968px;
}

.commercial-space-desc {
  margin-top: 40px;
}

.ultra-flex-desc {
  margin: 0 auto;
  width: 883px;
  height: 64px;
  text-align: start;
  margin-top: 40px;
}
.ultra-flex-desc span {
  font-family: HarmonySans_Regular;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.1em;
}

.bendable {
  margin-top: 40px;
  margin-bottom: 40px;
}

.bendable-img {
  margin-bottom: 40px;
}
.bendable-desc-head {
  font-family: HarmonySans_Blod;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.2em;
}
.bendable-desc-deatil {
  margin: 0 auto;
  width: 883px;
  height: 128px;
  text-align: start;
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: justify;
}

.bendable-desc-deatil span {
  margin: 0 auto;
  width: 883px;
  text-align: justify;
  font-family: HarmonySans_Regular;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.1em;
  margin-top: 40px;
  color: black;
}

.environment {
  margin-top: 40px;
}

.environment-desc {
  margin-top: 40px;
}

.environment-desc-head {
  font-family: HarmonySans_Blod;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.2em;
}

.environment-desc-detail {
  margin: 0 auto;
  width: 883px;
  height: 64px;
  text-align: start;
  margin-top: 40px;
  text-align: justify;
}

.environment-desc-detail span {
  margin: 0 auto;
  width: 883px;
  font-family: HarmonySans_Regular;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.1em;
  text-align: justify;
  margin-top: 40px;
  color: black;
}
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 120px;
  width: 100%;
}
</style>