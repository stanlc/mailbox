<template>
   <el-container>
       <div class="left">
           <el-container class="mechanism-box">
               <el-header>机构管理</el-header>
               <el-main>
                   <el-form>
                       <el-form-item>
                           <el-button type="primary">录入同级</el-button>
                           <el-button type="primary" @click="sub()">录入下级</el-button>
                           <el-button type="primary">编辑</el-button>
                           <el-button type="danger">删除</el-button>
                       </el-form-item>
                   </el-form>
                   <el-tree :data="organList" :props="defaultProps" @node-click="handleNodeClick" :highlight-current="false"></el-tree>
               </el-main>
           </el-container>
           <div class="modal-box-sub" v-if="isShow">
               <el-container>
                   <el-header>录入下级</el-header>
                   <el-main>
                       <p>录入下级组织机构</p>
                       <el-form  v-model="form" :inline="true" size="mini" :label-position="labelPosition">
                            <el-form-item label="机构名称:">
                                <el-input  v-model="form.organName"></el-input>
                            </el-form-item>
                            <el-form-item  label="机构描述:">
                                <el-input v-model="form.organDesc"></el-input>
                            </el-form-item>
                            <el-form-item label="负责人:">
                                <el-input  v-model="form.organPerson"></el-input>
                            </el-form-item>
                            <el-form-item  label="联系电话:">
                                <el-input v-model="form.phone"></el-input>
                            </el-form-item>
                            <el-form-item label="机构经度:">
                                <el-input  v-model="form.organLatitude"></el-input>
                            </el-form-item>
                            <el-form-item  label="机构纬度:">
                                <el-input v-model="form.organLongitude"></el-input>
                            </el-form-item>
                        </el-form>
                        <el-form :inline="true">
                            <el-form-item>
                                <el-button type="primary" @click="addSubOrgan">确认</el-button>
                                <el-button type="primary">取消</el-button>
                            </el-form-item>
                        </el-form>
                   </el-main>
               </el-container>
           </div>
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
                        <el-table-column
                        label="序号"
                        type="index">
                        </el-table-column>
                        <el-table-column
                        label="用户名称"
                        prop="organPerson"
                        >
                        </el-table-column>
                        <el-table-column
                        label="角色描述"
                        prop="organDesc"
                        >
                        </el-table-column>
                        <el-table-column
                        label="创建时间"
                        prop="createTime"
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
            defaultProps: {
                children: 'childrenList',
                label: 'organDesc'
            },
            tableData:[],
            organList:[],
            form:{
                "action": 0,
                'organName':'',
                'organDesc':'',
                'phone':'',
                'organPerson':'',
                'organLatitude':'',
                'organLongitude':''
            },
            isShow:false,
            labelPosition:'right',
        }
    },
    mounted(){
        this.getOrganList();

    },
    methods:{
        handleNodeClick(data){
           this.tableData.shift()
           this.tableData.push(data)
            
        },
        getOrganList(){
           
            this.$http.post('/organ/list').then(res =>{
               this.organList = res.data.data   
            })
        },
        addSubOrgan(){
            this.$http.post('/organ/add',this.form).then(res =>{
                console.log(res)
            })
        },
        sub(){
            this.isShow = true;
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
.left{
    position: relative;
}
.el-input,.el-select{
        width:150px;
    }
.modal-box-sub{
    position: absolute;
    z-index: 1;
    bottom: 0;
    left:50%;
    .left-input,.right-input{
        float: left;
    }
    .el-container{
        width: 38vw;
        height: 23vw;
        .el-header{
            background-color: #19437e !important;
        }
        background-color: #143666;
        color: #fff;
    }
}
.el-input .el-input__inner {
    background-color: transparent;
 }
.el-select .el-input__inner {
    background-color: transparent;
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