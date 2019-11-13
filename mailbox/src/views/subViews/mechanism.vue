<template>
   <el-container>
       <div class="left">
           <el-container class="mechanism-box">
               <el-header>机构管理</el-header>
               <el-main>
                   <el-form>
                       <el-form-item>
                           <el-button type="primary"  @click="showSame">录入同级</el-button>
                           <el-button type="primary" @click="show">录入下级</el-button>
                           <el-button type="primary" @click="showEditOrgan">编辑</el-button>
                           <el-button type="danger"  @click="delorgan(tableData[0].id)">删除</el-button>
                       </el-form-item>
                   </el-form>
                   <el-tree :data="organList" :props="defaultProps" @node-click="handleNodeClick" :highlight-current="false"></el-tree>
               </el-main>
           </el-container>
           <div class="modal-box">
                <same-input :show="this.SameShow" @func="FromSameInput"></same-input>
                <sub-input :show="this.SubShow" :nodeData="this.tableData" @func="FromSubInput"></sub-input>
                <role-input :show="this.RoleShow" @func="FromRoleInput" :nodeData="this.tableData"></role-input>
                <role-edit :show="this.RoleEditShow" @func="FromRoleEdit" :roleData="this.roleTableSelected"></role-edit>
                <edit-organ :show="this.EditOrganShow" :nodeData="this.tableData" @func="FromEditOrgan"></edit-organ>
                <role-config :show="this.RoleConfigShow" :listData="this.roleListData" @func="FromRoleConfig"></role-config>
           </div>
       </div>
        <div class="right">
            <el-container>
                <el-header>角色管理</el-header>
                <el-main>
                    <el-form>
                       <el-form-item>
                           <el-button type="primary" @click="showRole">录入</el-button>
                           <el-button type="primary" @click="showRoleEdit">编辑</el-button>
                           <el-button type="danger" @click="roleDel(roleTableSelected[0][0].id)">删除</el-button>
                           <el-button type="primary" @click="showROleConfig(tableData[0].id)">权限配置</el-button>
                       </el-form-item>
                    </el-form>
                    <el-table
                    :data="roleData"
                    style="width: 100%"
                    @select="roleSelect"
                    >
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
                        prop="roleName"
                        >
                        </el-table-column>
                        <el-table-column
                        label="角色描述"
                        prop="roleDesc"
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
import RoleInput from '../../components/RoleInput'
import SubInput from '../../components/SubInput'
import SameInput from '../../components/SameInput'
import RoleEdit from '../../components/RoleEdit'
import EditOrgan from '../../components/EditOrgan'
import RoleConfig from '../../components/RoleConfig'
export default {
    data(){
        return {
            defaultProps: {
                children: 'childrenList',
                label: 'organDesc'
            },
            tableData:[],
            organList:[],
            roleData:[],
            roleTableSelected:[],//被选中角色
            roleListData:[],//选中角色权限列表
            SubShow:false,
            SameShow:false,
            RoleShow:false,
            RoleEditShow:false,
            EditOrganShow:false,
            RoleConfigShow:false,
            labelPosition:'right',
        }
    },
    components:{
        RoleInput,
        SubInput,
        RoleEdit,
        SameInput,
        EditOrgan,
        RoleConfig,
    },
    mounted(){
        this.getOrganList();
    },
   
    methods:{
        handleNodeClick(data){          
           this.tableData.shift()
           this.tableData.push(data)
           this.getRoleList(data.id)
        },
        //显示模态框
        showSame(){
            this.SameShow = true;
        },
        show(){
            this.SubShow = true;
        },
        showRole(){
            this.RoleShow = true;
        },
        showRoleEdit(){
            this.RoleEditShow = true
        },
        showEditOrgan(){
            this.EditOrganShow = true
        },
        showROleConfig(id){
            this.RoleConfigShow = true
             this.$http.get(`resource/list/${id}`).then(res=>{
               this.roleListData = res.data.data
            })
        },
        //子组件传值
        FromSubInput(data){
            this.SubShow = data;
            this.getOrganList();
        },
        FromRoleInput(data){
            this.RoleShow = data;
        },
        FromRoleEdit(data){
            this.RoleEditShow = data;
            this.getOrganList();
        },
        FromSameInput(data){
            this.SameShow = data;
            this.getOrganList();
        },
        FromEditOrgan(data){
            this.EditOrganShow = data;
            this.getOrganList();
        },
        FromRoleConfig(data){
            this.RoleConfigShow = data;
            this.getOrganList();
        },
        //组织机构方法
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
       
        delorgan(id){                    //删除组织机构
            this.$http.delete(`/organ/delete/${id}`).then(res =>{
                console.log(res);
                this.$message('删除成功');
                this.getOrganList();
            }).catch(()=>{
                this.$message('删除失败');
            })

        },
        editOrgan(){
            this.$http.post('/organ/edit').then(res=>{
                console.log(res)
            })
        },
        //角色管理方法
        getRoleList(id){                   //获取角色列表
            this.$http.post(`/role/list/${id}`).then((res)=>{
                if(this.roleData.length>1){
                    this.roleData.shift()
                }
                this.roleData =res.data.data
            })
        },
        roleDel(id){
             this.$http.delete(`/role/delete/${id}`).then(() =>{
                this.$message('删除成功')
                //更新角色列表
            })
            
        },
        //角色Table
        roleSelect(e){
            this.roleTableSelected[0] = e
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

.role-input{
    position: absolute;
    z-index: 2;
    bottom: 0;
    left:50%;
    .el-container{
        width: 26vw;
        height: 13vw;
    }
}  
.modal-box-sub{
    position: absolute;
    z-index: 2;
    bottom: 0;
    left:50%;
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