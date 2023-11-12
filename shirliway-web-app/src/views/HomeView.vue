<template>
  <div class="home">
    <div class="header">
      <NaviBar/>
    </div>

    <div class="body">

    </div>

    <div class="footer">

    </div>
  </div>
</template>

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

<style>
.icon, .iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>