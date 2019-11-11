<template>
        <el-container>
            <el-aside>
                <el-menu 
                class="el-menu-demo" 
                background-color = "#112e57"
                text-color="#fff"
                default-active="/bind/AccountObersve"
                router
                active-text-color="#fff"
                >
                <el-menu-item index="/bind/AccountObersve">
                    <i class="el-icon-collection-tag"></i><span slot="title">账号订阅</span>
                </el-menu-item>
                <el-menu-item index="/bind/EquBind"><i class="el-icon-link"></i>设备绑定</el-menu-item>
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