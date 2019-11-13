<template>
    <div class="modal-box-sub" v-if="show">
        <el-container>
            <el-header>权限配置</el-header>
            <el-main>
                <p>菜单权限</p>
                <el-tree 
                :data="roleListData" 
                :props="defaultProps" 
                :highlight-current="false"
                show-checkbox
                >
                </el-tree>
                <el-form :inline="true">
                    <el-form-item>
                        <el-button type="primary" @click="test">提交</el-button>
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
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            roleListData:[
                {
                    'label':'系统管理',
                    'children':[
                        {
                            'label':'组织机构'
                        },
                        {
                            'label':'用户管理'
                        }
                    ]
                },
                {
                    'label':'设备绑定',
                    'children':[
                        {
                            'label':'账号订阅'
                        },
                        {
                            'label':'设备绑定'
                        }
                    ]
                },
                {
                    'label':'设备管理'
                },
                {
                    'label':'运行监测'
                },
                {
                    'label':'操作日志'
                },
                {
                    'label':'综合信息'
                }
            ]
        }
    },
    props:{
        show:Boolean,
        listData:Array,
    },
    defaultProps: {
        children: 'childrenList',
        label: 'resourceName'
    },
    mounted(){
       
    },
    methods:{
        
        hide(){
            this.$emit('func',false);
        },
        test(){
            //  this.$http.get(`resource/list/${id}`).then(res=>{
            //    console.log(res.data.data)
               
            // })
            console.log(this.listData)
        },

        getRoleAuthList(id){       //获取角色权限列表
            this.$http.get(`resource/list/${id}`).then(res=>{
               console.log(res.data.data)
               //this.configList = res.data.data
            })
        }
    }
}
</script>