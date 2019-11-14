<template>
    <div class="role-input" v-if="show">
        <el-container>
            <el-header>角色录入</el-header>
            <el-main>
                <el-form v-model="roleForm" label-width="120px" size="mini">
                    <el-form-item  label="角色名称:">
                        <el-input v-model="roleForm.roleName"></el-input>
                    </el-form-item>
                    <el-form-item  label="角色描述:">
                        <el-input v-model="roleForm.roleDesc"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true">
                    <el-form-item>
                        <el-button type="primary" @click="roleAdd">提交</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="hide">取消</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>
<style lang="scss" scoped>
.role-input{
    position: absolute;
    z-index: 2;
    bottom: 0;
    left:50%;
    .el-container{
        width: 26vw;
        height: 15vw;
        background-color: #143666;
    }
}  
</style>
<script>
export default {
    data(){
        return {
             roleForm:{
                "organId": 0,
                "roleDesc": "",
                "roleName": ""
            },
        }
    },
    updated(){
        this.roleForm.organId = this.nodeData[0].id
    },
    props:{
        show:Boolean,
        nodeData:Array,
    },
    methods:{
        roleAdd(){
            this.$http.post('role/add',this.roleForm).then(() =>{
                this.hide();
                this.$message('添加角色成功');
            })
        },
         hide(){
            this.$emit('func',false);
        }
    }
}
</script>