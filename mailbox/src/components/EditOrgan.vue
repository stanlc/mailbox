<template>
    <div class="modal-box-sub" v-if="show" key="edit">
        <el-container>
            <el-header>编辑组织结构</el-header>
            <el-main>
                <el-form  v-model="OrganForm" :inline="true" size="mini">
                        <el-form-item label="机构名称:">
                            <el-input  v-model="OrganForm.organName" ></el-input>
                        </el-form-item>
                        <el-form-item  label="机构描述:">
                            <el-input v-model="OrganForm.organDesc" ></el-input>
                        </el-form-item>
                        <el-form-item label="负责人:">
                            <el-input  v-model="OrganForm.organPerson" ></el-input>
                        </el-form-item>
                        <el-form-item  label="联系电话:">
                            <el-input v-model="OrganForm.phone" ></el-input>
                        </el-form-item>
                        <el-form-item label="机构经度:">
                            <el-input  v-model="OrganForm.organLatitude" ></el-input>
                        </el-form-item>
                        <el-form-item  label="机构纬度:">
                            <el-input v-model="OrganForm.organLongitude" ></el-input>
                        </el-form-item>
                </el-form>
                <el-form :inline="true">
                    <el-form-item>
                        <el-button type="primary" @click="addSubOrgan">确认</el-button>
                        <el-button type="primary" @click="hide">取消</el-button>
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
            OrganForm:{
                'organName':'',
                'organDesc':'',
                'phone':'',
                'organPerson':'',
                'organLatitude':'',
                'organLongitude':''
            }
        }
    },
    updated(){
        this.OrganForm = this.nodeData[0]
    },
    props:{
        show:Boolean,
        nodeData:Array,
    },
    methods:{
        hide(){
            this.$emit('func',false);
        },
        addSubOrgan(){
            this.$http.post('/organ/edit',this.OrganForm).then(res =>{
               this.hide();
               this.$message(res.data.message)
            });
        },
    }
}
</script>