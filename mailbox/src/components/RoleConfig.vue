<template>
    <div class="modal-box-sub" v-if="show">
        <el-container>
            <el-header>权限配置</el-header>
            <el-main>
                <p>菜单权限</p>
                <el-tree 
                :data="listData" 
                :props="defaultProps" 
                :highlight-current="false"
                show-checkbox
                @check-change="checkChange"
                >
                </el-tree>
                <el-form :inline="true">
                    <el-form-item>
                        <el-button type="primary" @click="roleAuth(roleId)">提交</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="info" @click="hide">取消</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<style lang="scss" scoped>
    .modal-box-sub{
    position: absolute;
    z-index: 2;
    bottom: 0;
    left:50%;
    .el-container{
        width: 20vw;
        height: 26vw;
        .el-header{
            background-color: #19437e !important;
        }
        background-color: #143666;
        color: #fff;
        }
    }
    .el-input,.el-select{
        width:150px;
    }
    .el-tree{
    background-color: transparent;
    margin-bottom: 20px;
    color: #fff;
    .el-tree-node__content{
        background-color: transparent;
    }
    :hover{
        background-color: transparent;
    }

    }
</style>
<script>
export default {
    data(){
        return{
            configList:[],
            menuList:[],      //当前用户的资源列表
            idArray:[],
            defaultcheck:[3,6,9],  //默认选中的权限
            defaultProps: {
                children: 'childrenList',
                label: 'resourceName'
            },
        }
    },
    props:{
        show:Boolean,
        listData:Array,
        roleId:Number,
        roleAuthList:Array,
    },
    defaultProps: {
        children: 'childrenList',
        label: 'resourceName'
    },
    mounted(){
        
    },
    computed:{
        resourceIds(){
            return this.idArray.toString()     //权限ID，用逗号连接
        },
        authKeys(){
            return this.roleAuthList.map((item)=>{
                return item.id
            })
        }
    },
    methods:{
        
        hide(){
            this.$emit('func',false);
        },
        
        
        checkChange(data,ischeck){
            let authid = data.id,_idArray = this.idArray
            if(ischeck){
                if(!_idArray.includes(authid)&&authid.length!=0){
                    _idArray.push(authid)                   //加入选中的项
                }
            }else{
                _idArray.splice(_idArray.findIndex(item=>item === authid),1)         //删去取消选中的项
            }
            this.idArray = _idArray
        },
        roleAuth(id){
            this.hide()
            this.$http.post(`/resource/auth/${id}`,{resourceIds:this.resourceIds}).then(()=>{
                this.$message('授权成功')
            }).catch(()=>{
                this.$message('授权失败')
            })
        },
        
    }
}
</script>