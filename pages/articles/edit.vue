<!--
*  @FileDescription: 写文章页面
*  @Author: 李永晖
*  @CreatedDate:2021/12/10
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/15
-->

<template>
    <div class="wrap">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="标题">
                <el-input clearable  v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="标签">
                <el-cascader clearable :props="{multiple:true}" placeholder="输入标签" :options="options" filterable></el-cascader>
            </el-form-item>
            <el-form-item label="照片">
                <el-upload
                    action="#"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item label="谁可以看">
                <el-radio v-model="radio" label="1">所有人</el-radio>
                <el-radio v-model="radio" label="2">仅自己</el-radio>
            </el-form-item>
        </el-form>
        <div class="mavonEditor">
            <no-ssr>
                <mavon-editor :toolbars="markdownOption" v-model="handbook"/>
            </no-ssr>
        </div>
    </div>
</template>

<script>
export default {
    head:{
        title:'写文章-河南大学软件学院交流论坛'
    },
    data(){
        return {
            form:{
                name:''
            },
            options:[
                {
                    value:'technology',
                    label:'技术'
                },
                {
                    value:'study',
                    label:'学业'
                },
                {
                    value:'life',
                    label:'生活'
                },
                {
                    value:'emotion',
                    label:'情感'
                }
            ],
            dialogImageUrl:'',
            dialogVisible:false,
            radio:'1'
        }
    },
    methods:{
        handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      }
    }
}
</script>

<style scoped>
.wrap{
    /* background-color: blue; */
    width: 80%;
    padding-left: 80px;
    text-align: left;
}

.el-cascader{
    width: 100%;
}

.avatar-uploader{
    width: 150px;
    height: 150px;
    /* background-color: blue; */
}
</style>