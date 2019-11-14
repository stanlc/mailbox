<template>
   <el-container>
       <div class="left">
           <el-container class="mechanism-box">
               <el-header>机构管理</el-header>
               <el-main>
                   <el-form>
                       <el-form-item>
                           <el-button type="primary"  @click="SameShow = true" v-if="SelectedParentId === null ? true : false">录入同级</el-button>
                           <el-button type="primary" @click="SubShow = true">录入下级</el-button>
                           <el-button type="primary" @click="EditOrganShow = true">编辑</el-button>
                           <el-button type="danger"  @click="delorgan(SelectedOrganId)">删除</el-button>
                       </el-form-item>
                   </el-form>
                   <el-tree :data="organList" :props="defaultProps" @node-click="handleNodeClick" :highlight-current="false"></el-tree>
               </el-main>
           </el-container>
           <div class="modal-box">
                <!-- 组织管理 -->
                <same-input :show="SameShow" @func="FromSameInput"></same-input>      
                <sub-input :show="SubShow" :nodeData="SelectedOrganData" @func="FromSubInput"></sub-input>
                <edit-organ :show="EditOrganShow" :nodeData="SelectedOrganData" @func="FromEditOrgan"></edit-organ>
                <!-- 角色管理 -->
                <role-input :show="RoleShow" @func="FromRoleInput" :nodeData="SelectedOrganData"></role-input>
                <role-edit :show="RoleEditShow" @func="FromRoleEdit" :roleData="roleSelectedData"></role-edit>
                <role-config :show="RoleConfigShow" :listData="roleListData" @func="FromRoleConfig"></role-config>
           </div>
       </div>
        <div class="right">
            <el-container>
                <el-header>角色管理</el-header>
                <el-main>
                    <el-form>
                       <el-form-item>
                           <el-button type="primary" @click="RoleShow = true">录入</el-button>
                           <el-button type="primary" @click="RoleEditShow = true">编辑</el-button>
                           <el-button type="danger" @click="roleDel(SelectedRoleId)">删除</el-button>
                           <el-button type="primary" @click="RoleConfigShow = true">权限配置</el-button>
                       </el-form-item>
                    </el-form>
                    <el-table
                    :data="roleList"
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
            SelectedOrganData:[],//被选中组织数据
            organList:[],
            roleData:[],
            SelectedOrganId:0,//被选中组织Id
            SelectedRoleId:0,//被选中角色Id
            SelectedParentId:0,//被选中组织父Id
            roleList:[],//组织角色列表
            roleTableSelected:[],//被选中角色
            roleListData:[],//选中角色权限列表
            roleSelectedData:{},//被选中角色数据
            //模态框控制
            SubShow:false,
            SameShow:false,
            RoleShow:false,
            RoleEditShow:false,
            EditOrganShow:false,
            RoleConfigShow:false,
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
        //组织列表Tree点击handle
        handleNodeClick(data){          
           this.SelectedOrganData.shift()
           this.SelectedOrganData.push(data)
           this.SelectedOrganId = data.id
           this.SelectedParentId = data.parentId
           this.getRoleList( this.SelectedOrganId)
        },
        //子组件关闭模态框--组织管理
        FromSubInput(data){
            this.SubShow = data;
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
        //子组件关闭模态框--角色管理
        FromRoleInput(data){
            this.RoleShow = data;
            this.getRoleList(this.SelectedOrganId);
        },
        FromRoleEdit(data){
            this.RoleEditShow = data;
            this.getRoleList(this.SelectedOrganId);
        },
        FromRoleConfig(data){
            this.RoleConfigShow = data;
            this.getRoleList(this.SelectedOrganId);
        },
        //组织机构方法

        //获取组织机构列表
        getOrganList(){
            this.$http.post('/organ/list').then(res =>{
               this.organList = res.data.data   
            })
        },

        //删除组织机构
        delorgan(id){                    
            this.$http.delete(`/organ/delete/${id}`).then(res =>{
                console.log(res);
                this.$message(res.data.message);
                this.getOrganList();
            }).catch(()=>{
                this.$message('删除组织失败');
            })

        },
        //角色管理方法
        getRoleList(id){                   //获取角色列表
            this.$http.post(`/role/list/${id}`).then((res)=>{
                this.roleList = res.data.data
            })
        },
        roleDel(id){
             this.$http.delete(`/role/delete/${id}`).then(() =>{
                this.$message('删除成功')
                //更新角色列表
                this.getRoleList(this.SelectedOrganId);
            })
            
        },
        //角色Table选择事件
        roleSelect(e){
            this.roleSelectedData = e[0]
            this.SelectedRoleId = e[0].id
            console.log(this.roleSelectedData)
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