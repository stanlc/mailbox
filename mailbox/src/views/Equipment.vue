<template>
    <el-container>
        <el-header>设备配置</el-header>
        <el-main>
           <div class="search-box">
               <el-form  v-model="form" :inline="true" size="mini" >
                    <el-form-item label="设备类型：">
                        <el-input v-model="form.type" class="aa"></el-input>
                    </el-form-item>
                    <el-form-item label="设备名称：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="设备状态：">
                        <el-select v-model="form.state">
                            <el-option label="在线" value="在线"></el-option>
                            <el-option label="离线" value="离线"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">查询</el-button>
                    </el-form-item>
                </el-form>
                <el-form  v-model="form" :inline="true" size="mini" >
                    <el-form-item label="订阅账号：">
                        <el-input v-model="form.account" class="dialog-input-text"></el-input>
                    </el-form-item>
                    <el-form-item label="所属机构：">
                         <el-select v-model="form.mechanism" >
                            <el-option label="花园小区1" value="花园小区1"></el-option>
                            <el-option label="花园小区2" value="花园小区2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <el-form :inline="true">
                    <el-form-item>
                        <el-button type="primary">配置机构</el-button>
                    </el-form-item>
                </el-form>
           </div>
           <div class="config" size="small">
                <div class="myTableStyle">
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    :row-class-name="rowStyle"
                    >
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    label="序号"
                    type="index">
                    </el-table-column>
                    <el-table-column
                    prop="deviceName"
                    label="设备名称"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="status"
                    label="设备状态"
                    :formatter="statusFormat">
                    </el-table-column>
                    <el-table-column
                    prop="deviceMac"
                    label="序列MAC"
                    ></el-table-column>
                    <el-table-column
                    prop="deviceAccount"
                    label="订阅账号"
                    ></el-table-column>
                    <el-table-column
                    prop="organId"
                    label="所属机构"
                    ></el-table-column>
                    <el-table-column
                    label="操作"
                    width="300">
                        <template>
                            <el-button type="info" size="mini">详情</el-button>
                            <el-button type="primary" size="mini">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                    layout="prev, pager, next"
                    :total="50"
                    background>
                </el-pagination>
                </div>
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
            tableData:[],  //设备列表
            rowStyle:'rowStyle',
            deviceForm:{
                "pageNum": 1,
                "pageSize": 10
            },
            form:[
                {
                    type:'',
                    name:'',
                    state:'',
                    account:'',
                    mechanism:''
                }
            ]
        }
    },
    created(){
        this.getDeviceList()
    },
    computed:{
    },
    methods:{
        handleClick(row) {
            console.log(row);
        },
        //获取设备列表
        getDeviceList(){ 
            this.$http.post('/device/pagerList',this.deviceForm).then(res=>{
                this.tableData = res.data.paging.list
                console.log(res.data.paging.list)
            })
        },
        statusFormat(row){           //设备状态格式化
            let val = row.status
            return val==1?'在线':'离线'
        }
    }
}
</script>
<style scoped>
    .el-container {
        width:96vw;
        height:40vw;
        background-color: #113;
        color: #fff;
        opacity: 0.8;
        border-radius: 5px;
        margin: 2vw auto;
    }
    .el-input,.el-select{
        width:200px;
    }
    .el-form  .el-form-item{
    padding:0 30px 0 0;
    }
    .el-pagination{
        position: fixed;
        bottom: 10px;
    }
    
    
</style>