<template>
   <el-container>
       <div class="left">
           <el-container class="mechanism-box">
               <el-header>机构管理</el-header>
               <el-main>
                   <el-form>
                       <el-form-item>
                           <el-button type="primary">录入同级</el-button>
                           <el-button type="primary">录入下级</el-button>
                           <el-button type="primary">编辑</el-button>
                           <el-button type="danger">删除</el-button>
                       </el-form-item>
                   </el-form>
                   <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick" :highlight-current="false"></el-tree>
               </el-main>
           </el-container>
       </div>
        <div class="right">
            <el-container>
                <el-header>角色管理</el-header>
                <el-main>
                    <el-form>
                       <el-form-item>
                           <el-button type="primary">录入</el-button>
                           <el-button type="primary">编辑</el-button>
                           <el-button type="danger">删除</el-button>
                           <el-button type="primary">权限配置</el-button>
                       </el-form-item>
                    </el-form>
                    <el-table
                    :data="tableData"
                    style="width: 100%">
                        <el-table-column
                        type="selection"
                        width="55">
                        </el-table-column>
                        <el-table-column v-for="item in tableData"
                        :key="item.index" 
                        label="item.name"
                        prop="item.prop"
                        >

                        </el-table-column>

                    </el-table>
                </el-main>
            </el-container>
        </div>
   </el-container>
</template>

<script>
export default {
    data(){
        return {
            treeData:[
                {
                    lable:'qadada',
                    children:[{
                        lable:'2adad'
                    }]
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
                    inittime:'2019-10-25',
                    prop:'name'
                },
                 {
                    number:'1',
                    name:'aa',
                    roledec:'admin',
                    inittime:'2019-10-25',
                    prop:'name'
                }
            ],
            organList:[],
            userInfo:[]
        }
    },
    mounted(){
        this.getOrganList();

    },
    methods:{
        handleNodeClick(data){
            console.log(data)
        },
        getOrganList(){
            let token = localStorage.getItem('token');
            console.log(token);
            this.$http.post('/organ/list').then(res =>{
               console.log(res.data)
               this.userInfo = res.data.data[0];
               console.log(this.userInfo)
            })
        }
    }
}
</script>
<style lang="scss" scoped>

.right .el-container{
    margin-left:1.5vw;
}
.el-container{
    width: 38vw;
    height: 30vw;

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


</style>