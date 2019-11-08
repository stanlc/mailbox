<template>
  <div class="container">
      <Header></Header>
      <nav-menu></nav-menu>
      <div class="viewbox">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>

import Header from './components/Header'
import NavMenu from './components/NavMenu'
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


.myTableStyle {
    .el-table::before{
      height: 0;     //去除表格最下层边框
    }
    .rowStyle {
          td{
            text-align: center;
            border: none;
          }
          &:nth-child(odd){
            td{
              background-color: #04172e !important;
            }
          }
          &:nth-child(even){
            td{
              background-color: transparent !important;
            }
          }
      }
    .el-table{
      color: #fff;
      tr{
        background-color: #0423bb; //表格背景色
        border:none;
      }
      tbody {
        border:none;
      }
      th{
        color: #06ffee;
        text-align: center;
        font-weight: normal;
        background-color:blue;
        &.is-leaf{
          border:none     //去除表头下白边
        }
      }
      
  }
}
  
</style>
