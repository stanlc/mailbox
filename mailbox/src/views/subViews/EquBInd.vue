<template>
    <el-container>
        <el-header>设备绑定</el-header>
        <el-main>
            <el-form  v-model="form" :inline="true" size="mini" >
                <el-form-item label="设备名称：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="设备序列号：">
                    <el-input v-model="form.key"></el-input>
                </el-form-item>
                <el-form-item label="设备正品码：">
                    <el-input v-model="form.number"></el-input>
                </el-form-item>
                <el-form-item label="订阅账号：">
                    <el-input v-model="form.account"></el-input>
                </el-form-item>
                <el-form-item label="同步状态:">
                    <el-select v-model="form.state">
                        <el-option label="已同步" value="已同步"></el-option>
                        <el-option label="未同步" value="未同步"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="设备备注：">
                    <el-input v-model="form.remark"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
            </el-form>
            <div class="myTableStyle">
                <el-table
                :data="tableData"
                style="width: 100%"
                :row-class-name="rowStyle"
                >
                <el-table-column
                type="selection"
                ></el-table-column>
                <el-table-column
                type="index"
                label="序号"
                ></el-table-column>
                <el-table-column
                label="设备名称"
                prop="name">
                </el-table-column>
                <el-table-column
                label="设备备注"
                prop="remark">
                </el-table-column>
                <el-table-column
                label="设备序列号"
                prop="key">
                </el-table-column>
                <el-table-column
                label="设备正品码"
                prop="number">
                </el-table-column>
                <el-table-column
                label="订阅账号"
                prop="account"
                width="180">
                </el-table-column>
                <el-table-column
                label="同步状态"
                prop="state">
                </el-table-column>
                <el-table-column
                label="操作"
                width="300">
                    <template>
                        <el-button type="info" size="mini">详情</el-button>
                        <el-button type="primary" size="mini">解绑设备</el-button>
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
        return {
            form:[
                {
                    name:'',
                    key:'',
                    number:'',
                    account:'',
                    state:'',
                    remark:''
                }
            ],
            tableData:[
                {
                    name:'新报箱',
                    number:'zp1233',
                    account:'aa',
                    state:'已同步',
                    key:'xH1231414'
                }
            ],
            rowStyle:'rowStyle',
        }
    }
}
</script>

<style lang="scss" scoped>
     .el-container {
        margin: 0vw auto;
        .el-header{
            height: 30px !important;
            line-height: 30px;
            background-color:#555; 
            border-radius: 5px 5px 0 0;
        }
        width:77vw;
        height: 80vh;
        color: #fff;
        border-radius: 5px;
    }
    
    .el-input,.el-select{
        width:6vw;
    }

 
</style>