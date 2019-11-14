<template>
    <el-container v-if="show">
        <el-header>新增用户</el-header>
        <el-main>
            <el-form v-model="addUserForm" :inline="true">
                <el-form-item label="用户名称：">
                    <el-input v-model="addUserForm.userName"></el-input>
                </el-form-item>
                <el-form-item label="登录名称：">
                    <el-input v-model="addUserForm.nickName"></el-input>
                </el-form-item>
                <el-form-item label="电子邮件：">
                    <el-input v-model="addUserForm.email"></el-input>
                </el-form-item>
                <el-form-item label="手机号码：">
                    <el-input v-model="addUserForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="机构名称">
                     <el-select v-model="selectOrgan" > 
                         <el-option v-for="item in userOrganList" :key="item.index" :label="item.organName" :value="item.id" @change="organChange"></el-option>
                     </el-select>
                </el-form-item>
                <el-form-item label="所属角色">
                     <el-select v-model="selectRole"> 
                         <el-option v-for="item in userRoleList" :key="item.index" :label="item.roleName" :value="item.id"></el-option>
                     </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addUser">添加</el-button>
                </el-form-item><el-form-item>
                    <el-button type="primary" @click="hide">取消</el-button>
                </el-form-item>
            </el-form>
            {{selectOrgan}}-{{selectRole}}
        </el-main>
    </el-container>
</template>

<style scoped>
    .el-container{
       background:burlywood !important;
       opacity: 1 !important;
       z-index: 3 !important;
    }
</style>
<script>
export default {
    data(){
        return {
            addUserForm:{
                "email": "11111@qq.com",
                "nickName": "啊",
                "organId": 1,
                "organName": "金鑫成都",
                "phone": "11111",
                "roleId": 2,
                "roleName": "管理员",
                "userName": "李"
            },
            selectOrgan:{},        //机构选择框值
            selectRole:{},         //角色选中框值
            organId:0,
            roleId:0,
            userOrganList:[],     //当前用户所拥有的组织列表
            userRoleList:{}
        }
    },
    props:{
        organList:Array,
        roleList:Array,
        show:Boolean,
    },
    updated(){
        this.organId = this.selectOrgan    //保存选中的组织ID
        this.roleId = this.selectRole      //保存选中的角色ID
        
    },
    mounted(){
        this.$http.post('/organ/list').then(res=>{
            this.userOrganList = res.data.data
        })
        
    },
    methods:{
        getUserRolelist(){
            this.$http.get(`user/roleList/${this.organId}`).then(res=>{
                this.userRoleList = res.data.data
                console.log('111')
            })
        },
        addUser(){
            this.$http.post('user/add',this.addUserForm).then(res=>{
                console.log(res.data)
            })
        },
        organChange(item){
            // this.getUserRolelist()
            console.log(item.organName)
        },
        hide(){
            this.$emit('func',false);
        },
    }
    
}
</script>
