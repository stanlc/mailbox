<template>
    <div class = "nav-head">
        <el-menu 
          :default-active="activeIndex" 
          class="el-menu-demo" 
          mode="horizontal" 
          @select="handleSelect"
          background-color = "#1c4072"
          text-color="#fff"
          router
          >
          <el-menu-item index="/">综合信息</el-menu-item>
          <el-menu-item index="/about">运行监测</el-menu-item>
          <el-menu-item index="/caozuo">操作管理</el-menu-item>
          <el-menu-item index="4">处理中心</el-menu-item>
          <el-menu-item index="5">处理中心</el-menu-item>
          <el-menu-item index="6">处理中心</el-menu-item>
        </el-menu>
    </div>
</template>

<style scoped lang="scss">
     .el-menu-item:hover{
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