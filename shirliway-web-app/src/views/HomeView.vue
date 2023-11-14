<template>
  <div class="home">
    <div class="header">
      <NaviBar/>
    </div>

    <div class="body">

    </div>

    <div class="footer">
      <FootBar/>
    </div>
  </div>
</template>


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
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 120px;
  width: 100%;
}
</style>
<script>
// @ is an alias to /src
import NaviBar from '@/components/NavigationHeader.vue'
import FootBar from '@/components/CommonFooterBar.vue'

export default {
  name: 'HomeView',
  components: {
    NaviBar,
    FootBar
  },


}
</script>