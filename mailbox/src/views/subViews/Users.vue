<template>
    <el-container >
        <el-header>用户管理</el-header>
        <el-main>
            <el-form :inline="true" v-model="form" size="mini">
                <el-form-item label="小区名称：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="登录名称：">
                    <el-input v-model="form.logName"></el-input>
                </el-form-item>
                <el-form-item label="手机号：">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="电子邮箱：">
                    <el-input v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">重置</el-button>
                </el-form-item>
            </el-form>
            <el-form :inline="true" >
                <el-form-item>
                    <el-button type="success" @click="addUserShow = true">新增用户</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="delUser(selectedUserId)">删除</el-button>
                </el-form-item>
            </el-form>
            <el-table
            :data="userList"
            style="width: 100%"
            @select="userSelect"
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
                label="用户名称"
                prop="userName"
                >
                </el-table-column>
                <el-table-column
                label="登录名称"
                prop="nickName"
                >
                </el-table-column>
                <el-table-column
                label="所属角色"
                prop="roleName"
                >
                </el-table-column>
                <el-table-column
                label="手机号码"
                prop="phone"
                >
                </el-table-column>
                <el-table-column
                label="电子邮箱"
                prop="email"
                width="160px"
                >
                </el-table-column>
                <el-table-column
                label="机构名称"
                prop="organName"
                >
                </el-table-column>
                <el-table-column
                label="创建时间"
                prop="updateTime"
                >
                </el-table-column>
            </el-table>
            <div class="adduser-box">
                <add-users :roleList="roleList" :show="addUserShow" @func="FromAddUser" :organList="organList"></add-users>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import AddUsers from './AddUsers'
export default {
    data(){
        return{
            //用户列表请求表单
            form:{},
            reqForm:{
                "pageNum": 1,
                "pageSize": 10
            },
            userList:[],
            organList:[],
            roleList:[],
            addUserShow:false,
            selectedUserId:0,
        }
    },
    created(){
        this.getUserList()
        this.getOrganList()
    },
    methods:{
        getUserList(){        //获取用户列表
            this.$http.post('user/userList',this.reqForm).then(res=>{
                this.userList = res.data.paging.list
            })
        },
        FromAddUser(data){
            this.addUserShow = data
        },
        delUser(id){         //删除用户
            this.$http.delete(`user/delete/${id}`).then(()=>{
                this.$message('删除用户成功')
                this.getUserList()
            })
        },
        userSelect(e){
            console.log(e)
            this.selectedUserId = e[0].id
        },
        getOrganList(){
            this.$http.get('/user/organList').then(res=>{
                this.organList = res.data.data
            })
        }
    },
    components:{
        AddUsers,
    }
}
</script>
<style scoped>
.el-input--mini /deep/ .el-input__inner {
    background-color: transparent;
 }
.el-select /deep/ .el-input__inner {
    background-color: transparent;
 }

</style>