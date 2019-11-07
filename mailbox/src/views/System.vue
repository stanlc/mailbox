<template>
    <div class="container">
        <div class="left">
            <el-container>
                <el-header>机构管理</el-header>
                <el-main>
                    <div class="btn-box">
                        <el-button type="primary" size="small"><span>录入同级</span></el-button>
                        <el-button type="primary" size="small">录入下级</el-button>
                        <el-button type="primary" size="small">编辑</el-button>
                        <el-button type="danger"  size="small">删除</el-button>
                    </div>
                    <div class="info-box">
                        <el-tree :data="data" :props="defaultProps" default-expand-all></el-tree>
                    </div>
                </el-main>
            </el-container>
        </div>
        <div class="right">
            <el-container>
                <el-header>角色管理</el-header>
                <el-main>
                    <div class="btn-box">
                        <el-button type="primary" size="small"><span>录入</span></el-button>
                        <el-button type="primary" size="small">编辑</el-button>
                        <el-button type="danger"  size="small">删除</el-button>
                        <el-button type="primary" size="small">权限配置</el-button>
                    </div>
                    <div class="table-box">
                       <el-table
                        :data="tableData"
                        style="width: 100%"
                        :row-style="tableRowStyle"
                        :header-cell-style="headerRowStyle"
                        >
                        <el-table-column
                        type="selection"
                        width="55">
                        </el-table-column>
                        <el-table-column
                        label="序号"
                        prop="number"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="用户名称"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="roledec"
                        label="角色描述">
                        </el-table-column>
                        <el-table-column
                        prop="inittime"
                        label="创建时间"
                        width="120"
                        ></el-table-column>
                    </el-table>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            data:[{
                label: '花园小区',
                children: [{
                    label: '花园小区1',
                },
                {
                    label:'花园小区2'
                }
                ]
            }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            tableData:[
                {
                    number:'1',
                    name:'aa',
                    roledec:'admin',
                    inittime:'2019-10-25'
                }
            ]
        }
    },
    methods:{
        // 修改table row的背景色
        headerRowStyle(){
            return 'background-color: transparent;color: #02d6da;font-weigth:none'
        },
        tableRowStyle() {
        return 'background-color: pink'
        },
    }
}
</script>
<style lang="scss" scoped>

.el-table .cell{
     background-color: transparent;
}
.container{
    display: flex;
    justify-content: center;
    .right,.left{
        margin: 2vw 1vw 0 1vw;
    }
    .el-container {
        .el-header{
            height: 30px !important;
            line-height: 30px;
            background-color:#555; 
            border-radius: 5px 5px 0 0;
        }
        width:40vw;
        height:30vw;
        background-color: #113;
        color: #fff;
        opacity: 0.8;
        border-radius: 5px;
       
    }
}

.el-tree{
    background-color: transparent;
    .el-tree-node__content{
        background-color: transparent;
    }
    :hover{
        background-color: transparent;
    }

}
// .el-tree-node:focus > .el-tree-node__content {
//   background-color: #222 !important;
// }

</style>