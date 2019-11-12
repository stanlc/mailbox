<template>
    <div class="modal-box-sub" v-if="show">
        <el-container>
            <el-header>录入下级</el-header>
            <el-main>
                <p>录入下级组织机构</p>
                <el-form  v-model="form" :inline="true" size="mini">
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
            form:{
                "action": 2,                //1建平级，2建下级
                'organName':'',
                'organDesc':'',
                'phone':'',
                'organPerson':'',
                'organLatitude':'',
                'organLongitude':''
            },
        }
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
            this.$http.post('/organ/add',this.form).then(res =>{
                console.log(res)
            })
        },
    }
}
</script>