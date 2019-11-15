<template>
    <div class="loginbox" >
        <el-form
        label-position="left" 
        v-model="loginform">
            <h3>信报箱监测平台</h3>
            <el-form-item label="账号：" label-width="120px">
                <el-input v-model="loginform.userName" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码：" label-width="120px">
                <el-input v-model="loginform.password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>

export default {

    data(){
        return {
            loginform:{
                'userName':'',
                'password':''
            },
        }
    },
    methods:{
        login(){
            this.$http.post('/user/login',this.loginform).then(res=>{
                    localStorage.setItem('token',res.headers['x-user-token']);
                    localStorage.setItem('userInfo',JSON.stringify(res.data.data));     //保存用户信息
                    // this.$utils.getMenuList();
                    let list = localStorage.getItem('menuLIst')
                    console.log(list)
                    this.$router.push({ path: '/home' });  
            })
        },
    },
}
</script>
<style scoped>
    .loginbox{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 100px;
        color: #fff;
    }
    .el-form{
        padding: 10px;
    }
    .el-input{
        width: 220px;
    }
    .el-button{
        margin-left: 120px;
    }
    
</style>