<template>
    <el-container>
        <el-header>设备配置</el-header>
        <el-main>
           <div class="search-box">
               <label>设备类型：<input type="text" :v-model="equType"></label>
               <label>设备名称：<input type="text" :v-model="equName"></label>
               <label>设备状态：
                   <select>
                       <option>开</option>
                       <option>关</option>
                    </select>
                    <button>查询</button>
               </label>
               <label>订阅账号：<input type="text" :v-model="obersver"></label>
               <label>所属机构：
                   <select>
                       <option>小区1</option>
                       <option>小区2</option>
                    </select>
               </label>
           </div>
           <div class="config" size="small">
               <button>配置机构</button>
               <el-table
                :data="tableData"
                style="width: 100%"
                :row-style="tableRowStyle"
                :header-cell-style="headerRowStyle"
               >
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    label="序号"
                    prop="number"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="设备名称"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="state"
                    label="设备状态">
                    </el-table-column>
                    <el-table-column
                    prop="mac"
                    label="序列MAC"
                    ></el-table-column>
                    <el-table-column
                    prop="observer"
                    label="订阅账号"
                    ></el-table-column>
                    <el-table-column
                    prop="mechanism"
                    label="所属机构"
                    ></el-table-column>
                    <el-table-column
                    fixed="right"
                    label="操作"
                    width="240">
                    <template slot-scope="scope">
                        <button @click="handleClick(scope.row)">详情</button>
                        <button type="text" size="mini">编辑</button>
                    </template>
                    </el-table-column>
                </el-table>
           </div>
        </el-main>
    </el-container>
</template>
<script>
export default {
    data(){
        return{
            equType:'',
            equName:'',
            obersver:'',
            tableData:[
                {
                    name:'1',
                    state:'开启',
                    mac:'a12321',
                    obersver:'李四',
                    mechanism:'花园小区',

                }
            ]
        }
    },
    methods:{
         handleClick(row) {
            console.log(row);
        },
        headerRowStyle(){
            return 'background-color: transparent;color: #02d6da;font-weigth:none'
        },
        tableRowStyle() {
        return 'background-color: transparent'
        },
    }
}
</script>
<style lang="scss" scoped>
    .el-container {
        .el-header{
            height: 30px !important;
            line-height: 30px;
            background-color:#555; 
            border-radius: 5px 5px 0 0;
        }
        width:96vw;
        height:40vw;
        background-color: #113;
        color: #fff;
        opacity: 0.8;
        border-radius: 5px;
        margin: 2vw auto;
    }
    .search-box{
        width: 57.5vw;
        button{
            width: 4.5vw;
            height: 1.6vw;
            margin-left: 1vw;
            vertical-align: center;
          }
    }
    button{
        border-radius:4px; 
        border: none;
        outline: none;
        background-color: #196de5;
        color:#fff;
        cursor: pointer;
    }
    label{
        font-size: 14px;
        margin-right: 2vw;
        display: inline-block;
        vertical-align: center;
        margin-top: 1vw;
    }
    input{
        width: 10vw;
        height: 1vw;
        border: #fff 1px solid;
        border-radius: 2px;
        outline: none;
        color: #fff;
        font-size: 10px;
        padding: 2px;
        background-color: transparent;
    }
    select{
        width: 10vw;
        line-height: 1vw;
        border: #fff 1px solid;
        color: #fff;
        border-radius: 2px;
        padding: 2px;
        font-size: 10px;
        outline: none;
        background-color: transparent;
        margin: 0 auto;
        vertical-align:middle;
    }
    .config{
        button{
            margin: 1vw 0;
            width: 6.5vw;
            height: 2vw;
            
        }
    }
</style>