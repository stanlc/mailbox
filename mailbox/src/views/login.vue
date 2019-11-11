<template>
    <div class="loginbox">
        <el-form :rules="loginRules">
            <el-form-item label="账号：" label-width="120px">
                <el-input v-model="userName" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码：" label-width="120px">
                <el-input v-model="password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">登录</el-button>
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

    },
}
</script>
<style scoped>
    .loginbox{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 100px;
    }
    .el-input{
        width: 220px;
    }
    .el-button{
        margin-left: 120px;
    }
    
</style>