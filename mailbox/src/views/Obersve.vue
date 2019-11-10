<template>
  <el-container>
    <el-header></el-header>
    <el-main>
          <div class="home">
          <el-form :inline="true" v-model="form" size="mini">
            <el-form-item label="小区名称:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="楼栋">
              <el-input v-model="form.buliding"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">导出</el-button>
            </el-form-item>
          </el-form>
          <div class="myTableStyle">
            <el-table
            :data="listData"
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}"
            :row-style="rowStyle"
            >
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
              prop="number"
              label="序号"
              width="120"
              >
              </el-table-column>
              <el-table-column
                prop="id"
                label="设备id"
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
      </div>
    </el-main>
  </el-container>
  
</template>

<style scope>
  .el-container {
        width:96vw;
        height:40vw;
        background-color: #113;
        color: #fff;
        opacity: 0.8;
        border-radius: 5px;
        margin: 2vw auto;
    }
    
</style>
<script>
  export default {
    data() {
      return {
        form:[
          {
            name:'',
            building:''
          }
        ],
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
          },
          {
            number:'3',
            id:'143',
            areaname:'花园小区',
            building:'12',
            eqname:'01-2433',
            status:'开',
            operation:'11',
            time:'2019-10-25  8:00:30'
          },
          {
            number:'4',
            id:'143',
            areaname:'花园小区',
            building:'12',
            eqname:'01-2433',
            status:'开',
            operation:'11',
            time:'2019-10-25  8:00:30'
          },
          {
            number:'5',
            id:'143',
            areaname:'花园小区',
            building:'12',
            eqname:'01-2433',
            status:'开',
            operation:'11',
            time:'2019-10-25  8:00:30'
          },
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
      rowStyle(rowIndex){
        if(rowIndex==1){
          return 'background:blue'
        }
      }
    }
  }
</script>