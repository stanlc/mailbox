<template>
    <div class="loginbox">
        <el-form :rules="loginRules"
        label-position="left" >
            <h3>信报箱监测平台</h3>
            <el-form-item label="账号：" label-width="120px">
                <el-input v-model="userName" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码：" label-width="120px">
                <el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
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
            userName:'',
            password:'',
            loginRules: {
                userName: [
                    {
                        required: true,

                        message: "请输入用户名",

                        trigger: "blur"
                    }
                ],
                password: [
                {
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }
                ]
            },

        }
    },
    methods:{
        login(){
            this.$http.post('/user/login',{userName:'admin',password:'123456'}).then(res=>{
                if(res.data.code=='200'){
                    localStorage.setItem('token',res.headers['x-user-token']);
                    localStorage.setItem('userInfo',JSON.stringify(res.data.data));     //保存用户信息
                    this.$router.push({ path: '/home' });
                }else{
                    this.$message({
                        message: '账号或密码有误',
                        center: true
                        });
                }
            })
        }
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