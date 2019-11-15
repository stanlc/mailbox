<template>
    <div class="">
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
                        <el-select v-model="selectOrgan" @change="organChange"> 
                            <el-option v-for="item in organList" :key="item.index" :label="item.organName" :value="item.id" ></el-option>
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
    </div>
    
</template>

<style scoped>
    .el-container{
       color: #fff
    }
</style>
<script>
export default {
    data(){
        return {
            addUserForm:{
            },
            selectOrgan:{},        //机构选择框值
            selectRole:{},         //角色选中框值
            organId:0,
            roleId:0,
            userRoleList:{},
            level:0,          //管理员级别
            childlist:[],
        }
    },
    props:{
        organList:Array,    //当前用户所拥有的组织列表
        roleList:Array,
        show:Boolean,
    },
    created(){
        this.level = JSON.parse(localStorage.getItem('userInfo')).level
        
    },
    updated(){
        this.organId = this.selectOrgan    //保存选中的组织ID
        this.roleId = this.selectRole      //保存选中的角色ID
        
    },
    mounted(){
       this.childlist = this.arrExpand(this.organList)
    },
    methods:{
        getUserRolelist(id){
            this.$http.get(`user/roleList/${id}`).then(res=>{
                this.userRoleList = res.data.data
                console.log('111')
            })
        },
        addUser(){
            this.$http.post('user/add',this.addUserForm).then(res=>{
                console.log(res.data)
            })
        },
        organChange(value){
            // this.getUserRolelist(value)
            console.log(value)
        },
        hide(){
            this.$emit('func',false);
        },
        //展开数组
        arrExpand (arr){     
            let initArr = [] 
            arr.forEach(item => {
                initArr.push(item.childrenList)
            })           
            if(initArr.childrenList&&initArr.childrenList.length>0){
                console.log('aa')
            } else{
                return initArr;
            }          
           
        }
        ,
        findchildren(list){  
            let children = [],clist = list.childrenList            //展开childrenList
            if(clist && clist.length>0){
                 children = list.map((item)=>{
                    return item.childrenList
                })
                this.childlist = children
            }
        }
    }
    
}
</script>
