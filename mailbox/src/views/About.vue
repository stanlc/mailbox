<template>
  <div class="home">
      <el-select v-model="selectvalue" placeholder="序号"
      >
        <el-option
          v-for="item in filtersData"
          :key="item.value"
          :label="item.number"
          :value="item.value"
          >
        </el-option>
      </el-select>
      <el-select v-model="namevalue" placeholder="请选择名字"
      >
        <el-option
          v-for="item in tableData"
          :key="item.index"
          :label="item.text"
          :value="item.value"
          >
        </el-option>
      </el-select>
      <el-button @click="datefilter(selectvalue,'number')">导出</el-button>
      <el-table
      :data="listData"
      style="width: 100%"
      :default-sort = "{prop: 'date', order: 'descending'}"
      stripe
      >
        <el-table-column
        prop="number"
        label="序号"
        sortable
        width="120"
        >
        </el-table-column>
        <el-table-column
          prop="id"
          label="设备id"
          sortable
          width="120">
        </el-table-column>
        <el-table-column
          prop="areaname"
          label="小区名称"
          >
        </el-table-column>
        <el-table-column
          prop="building"
          label="所在楼栋"
          >
        </el-table-column>
        <el-table-column
          prop="eqname"
          label="设备名称"
          >
        </el-table-column>
        <el-table-column
          prop="status"
          label="运作状态"
          >
        </el-table-column>
        <el-table-column
          prop="operation"
          label="单日操作次数"
          >
        </el-table-column>
        <el-table-column
          prop="time"
          label="操作时间（最后一次时间）"
          width="240"
          >
        </el-table-column>
      </el-table>
  </div>
</template>

<style lang="scss">
  .el-table__row {                       
     background-color: #0e1d30 !important;       //修改el-table奇数行颜色
}
  .el-table .cell{
    text-align: center;
    //color: #fff;
  }
</style>
<script>
  export default {
    data() {
      return {
        tableData: [
          {
            number:'1',
            id:'123',
            areaname:'花园小区',
            building:'10',
            eqname:'01-2233',
            status:'关',
            operation:'10',
            time:'2019-10-25  8:00:30'
          },
          {
            number:'2',
            id:'143',
            areaname:'花园小区',
            building:'12',
            eqname:'01-2433',
            status:'开',
            operation:'11',
            time:'2019-10-25  8:00:30'
          }

        ],
        filtersData:[
          
            {text: '1', value: '1'}, 
            {text: '2', value: '2'}
            
        ],
        selectvalue:'',
        namevalue:'',
        listData:[],
      }
    },
    mounted(){
      this.listData = this.tableData
    },
    methods: {
      datefilter(val,...type){
        this.listData = this.tableData.filter(item =>(~item[type[0]].indexOf(val)));   //筛选列表项
      },
    },
  }
</script>