<template>
    <div class="modal-box-sub" v-if="show">
        <el-container>
            <el-header>权限配置</el-header>
            <el-main>
                <el-tree
                :data="data"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps">
                </el-tree>
                <el-form :inline="true">
                    <el-form-item>
                        <el-button type="primary">提交</el-button>
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
        width: 38vw;
        height: 23vw;
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
</style>
<script>
export default {
    data(){
        return{
            configList:[],
            defaultProps: {
            children: 'children',
            label: 'label'
            }
        }
    },
    props:{
        show:Boolean,
        nodeData:Array,
    },
    mounted(){
        // this.getRoleList(2)
    },
    methods:{
        hide(){
            this.$emit('func',false);
        },
        getRoleList(roleId){
            this.$http.get(`/resource/list/${roleId}`).then(res=>{
                console.log(res.data)
            })
        },

        addSubOrgan(){
            this.$http.post('/organ/edit',this.form).then(res =>{
                console.log(res)
            })
        },
    }
}
</script>