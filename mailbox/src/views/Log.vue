<template>
    <el-container>
        <el-header>操作日志</el-header>
        <el-main>
            <el-form  v-model="form" :inline="true" size="mini" >
                <el-form-item label="小区名称：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="小区名称：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="订阅状态:">
                    <el-select v-model="form.state">
                        <el-option label="开" value="开"></el-option>
                        <el-option label="关" value="关"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
            </el-form>
            <el-table
                :data="tableData"
                style="width: 100%"
                >
                <el-table-column
                type="selection"
                ></el-table-column>
                <el-table-column
                label="序号"
                prop="number">
                </el-table-column>
                <el-table-column
                label="订阅账号"
                prop="account">
                </el-table-column>
                <el-table-column
                label="订阅状态"
                prop="state">
                </el-table-column>
                <el-table-column
                label="订阅类型"
                prop="type">
                </el-table-column>
                <el-table-column
                label="上一次调用更新设备时间"
                prop="time"
                width="180">
                </el-table-column>
                <el-table-column
                label="操作"
                width="300">
                    <template>
                        <el-button type="info" size="mini">详情</el-button>
                        <el-button type="primary" size="mini">订阅</el-button>
                        <el-button type="primary" size="mini">同步设备</el-button>
                        <el-button type="danger" size="mini">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data(){
        return {
            form:[
                {
                    account:'',
                    state:''
                }
            ],
            tableData:[
                {
                    number:'1',
                    account:'aa',
                    state:'开',
                    type:'B',
                    time:'2019-10-22'
                }
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
    .el-container{
        width: 97vw;
        height: 47vw;
        margin:2vw auto;
        background-color: transparent;
        opacity: 0.8;
        border-radius: 5px;
    }
</style>