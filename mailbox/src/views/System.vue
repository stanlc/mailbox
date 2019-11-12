<template>
        <el-container>
            <el-aside>
                <el-menu 
                class="el-menu-demo" 
                background-color = "#112e57"
                text-color="#fff"
                default-active="/system/mechanism"
                router
                active-text-color="#fff"
                >
                <el-menu-item index="/sys/manager/mechanism">
                    <i class="el-icon-office-building"></i><span slot="title">组织机构</span>
                </el-menu-item>
                <el-menu-item index="/sys/manager/users"><i class="el-icon-s-custom"></i>用户管理</el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
</template>

<style lang="scss" scoped>
    
    .el-container {
        margin: 0;
        width: 100%;
        height: 100%;
        .el-aside{
            width: 280px !important;
            height: 100vh;
            background-color: #112e57;
            .el-menu{
                border: none;
                text-align: center;
                .el-menu-item:hover{
                    background-color:#196de5 !important;
                }
                .el-menu-item.is-active {       //el-menu激活后样式
                    outline: 0 !important;
                    color: #fff !important;
                    background-color: #196de5 !important;
                }
            }
            
        }
    }
</style>