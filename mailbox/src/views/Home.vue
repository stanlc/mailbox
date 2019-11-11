<template>
  <div class="container">
      <Header></Header>
      <nav-menu></nav-menu>
        <router-view></router-view>
  </div>
</template>

<script>

import Header from '../components/Header'
import NavMenu from '../components/NavMenu'
export default {
  name: 'app',
  components:{
    Header,
    NavMenu
  },
  
}
</script>

<style lang="scss">
html,body{
  margin:0;
  padding:0;
  background-color: #04172e;
}

.container{
  max-height: 100vh;
  overflow: hidden;
  
}
.el-form-item__label{
  color:#fff !important;
}

 .el-header{
  height: 30px !important;
  line-height: 30px;
  color: #fff;
  background-color:#555; 
  border-radius: 5px 5px 0 0;
}

//Table样式
body .el-table th.gutter{
  display: table-cell!important;  //浏览器缩放表头出现白边
}
.el-table {
  background: transparent !important; //表格背景色
  tr th{
    background: #04172e;    //表头背景色
    border: none !important;  //表头下边框
    text-align: center;
  }
  tr{
    &:nth-child(odd){
      background: red;    
    }
   
    &:nth-child(even){
      background: transparent;
    }
    td{
      border: none;
      text-align: center;
    }
  }
}  
.el-table::before{
  height: 0px !important;   //表格下边框
}

.el-table--enable-row-hover .el-table__body tr:hover>td{
background-color: #212e3e !important;    //hover项背景颜色
}
@import '../assets/common.css'
</style>
