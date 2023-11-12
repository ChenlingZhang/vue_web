<template class="common_header">
  <div>
    <el-menu class="navi_bar" mode="horizontal" ref="main_navi" @select="handleSelection">
      <el-menu-item>
        <el-image
          :src="require('../static/img/company-logo.jpg')"
          fit="fit"
          alt="#"
          class="company-logo"
          @click="back2Home"
        />
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">PRODUCTS</template>
        <el-submenu index="1-1">
          <template slot="title">PAGENNI</template>
          <el-menu-item index="1-1-1">WOOD</el-menu-item>
          <el-menu-item index="1-1-2">MARBLE</el-menu-item>
          <el-menu-item index="1-1-3">PATTREN</el-menu-item>
          <el-menu-item index="1-1-4">SOILD COLOR</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">TECHNOLOGY</template>
        <el-menu-item index="2-1">FINISHED</el-menu-item>
        <el-menu-item index="2-2">PERFOMANCE</el-menu-item>
        <el-menu-item index="2-3">PAGENNI-TECH</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">INSPIRATION</template>
        <el-menu-item index="3-1">VISION CASE</el-menu-item>
        <el-menu-item index="3-2">LOOKBOOK</el-menu-item>
        <el-menu-item index="3-3">LIFESTYLE</el-menu-item>
      </el-submenu>

      <el-menu-item @click="appointment()">APPOINTMENT</el-menu-item>

      <el-menu-item @click="move2About()">ABOUT</el-menu-item>

      <div class="search">
        <el-menu-item>
          <el-input
            placeholder="search......"
            class="nav-search-bar"
            v-model="search_input"
          >
            <i
              slot="suffix"
              class="el-icon-search"
              @click="search_handle()"
            ></i>
          </el-input>
        </el-menu-item>
      </div>
    </el-menu>

    <el-dialog
      title="Appointment"
      :visible.sync="visible"
      width="60%"
      :src="app_path"
    >
      <iframe :src="app_path" frameborder="0" class="appFrame"></iframe>
    </el-dialog>
  </div>
</template>

<style>
.common_header {
  font-family: HarmonySans_Regular;
}

.navi_bar {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: black;
  font-size: 50px;
}

.company-logo {
  position: absolute;
  width: 99px;
  height: 72px;
  left: 0px;
  top: 0px;
  padding-left: 0%;
  padding-top: 0px;
  margin-top: 0px;
}

.el-submenu,
.el-menu-item {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 20px;
}

.el-dialog {
    width: 60%;
    height: 60%;
}
.el-dialog__body {
    width: 100%;
    height: 100%;
}
.appFrame {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>

<script>
export default {
  data() {
    return {
      search_input: "",
      visible: false,
      app_path: "https://calendly.com/hplshirliway/make-an-appointment-to-shirliway",
      router_dic:{
        'wood':'/wood',
        'marble':'/marble',
        'pattren':'/pattren',
        'soild color':'/soild_color',
        'finished':'/finished',
        'performance':'/performance',
        'pagenni-tech':'/pagenni-tech',
        'vision-case':'/vision_case',
        'lookbook':'/lookbook',
        'lifestyle':'/lifestyle'
      } 
    };
  },

  methods: {
    back2Home() {
      this.$router.push("/");
      console.log("back 2 home");
    },

    appointment() {
      this.visible = true;
    },
    search_handle() {
      console.log(this.search_input);
    },

    handleSelection(index){
      var tempname = ''
      if(index === '1-1-1'){
        this.routerMove('wood')
      }
      else if (index === '1-1-2') {
        this.routerMove('marble')
      }
      else if (index === '1-1-3') {
        this.routerMove('pattren')
      }
      else if (index === '1-1-4') {
        this.routerMove('soild color')
      }
      else if (index === '2-1') {
        this.routerMove('finished')
      }
      else if (index === '2-2') {
        this.routerMove('performance')
      }
      else if (index === '2-3') {
        this.routerMove('pagenni-tech')
      }
      else if (index === '3-1') {
        this.routerMove('vision-case')
      }
      else if (index === '3-2') {
        this.routerMove('lookbook')
      }
      else if (index === '3-3') {
        this.routerMove('lifestyle')
      }
    },

    routerMove(name){
      var path = this.router_dic[name]
      console.log(path)
      this.$router.push(path)
    },
  },
};
</script>
