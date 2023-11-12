<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: "HarmonySans_Medium";
  src: url(./static/font/HarmonyOS_Sans/HarmonyOS_Sans_Medium.ttf);
}

@font-face {
  font-family: "HarmonySans_Thin";
  src: url(./static/font/HarmonyOS_Sans/HarmonyOS_Sans_Thin.ttf);
}

@font-face {
  font-family: "HarmonySans_Blod";
  src: url(./static/font/HarmonyOS_Sans/HarmonyOS_Sans_Bold.ttf);
}

@font-face {
  font-family: "HarmonySans_Regular";
  src: url(./static/font/HarmonyOS_Sans/HarmonyOS_Sans_Regular.ttf);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, HarmonySans_Medium, HarmonySans_Thin,HarmonySans_Blod,HarmonySans_Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
