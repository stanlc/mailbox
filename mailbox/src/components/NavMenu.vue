<template>
    <div class = "nav-head">
        <el-menu 
          :default-active="activeIndex" 
          class="el-menu-demo" 
          mode="horizontal" 
          background-color = "#1c4072"
          text-color="#fff"
          router
          >
          <el-menu-item index="/info">综合信息</el-menu-item>
          <el-menu-item index="/obersve">运行监测</el-menu-item>
          <el-menu-item index="/equipment">设备管理</el-menu-item>
          <el-menu-item index="/bind">设备绑定</el-menu-item>
          <el-menu-item index="/log">操作日志</el-menu-item>
          <el-menu-item index="/system">系统管理</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
  data(){
    return{
      activeIndex:'/info'
    }
  }
}
</script>
<style scoped lang="scss">
  .nav-head{
    opacity: 0.8;
    .el-menu-demo .el-menu--horizontal{
      border-bottom: none;
      
    }
  }
  .el-menu-demo .el-menu-item{
    text-align: center;
    width:10vw;
  }
  .el-menu-demo ul li{
    height: 3vw;
    line-height: 30px;
  }
  .el-menu-demo .el-menu-item:hover{
    outline: 0 !important;
    background-color: #22bdd8 !important;
    color:#fff !important;
  }
  .el-menu-item.is-active {
    outline: 0 !important;
    color: #fff !important;
    background-color: #22bdd8 !important;
  }

</style>