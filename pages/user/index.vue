<!--
*  @FileDescription: 个人主页文章子路由
*  @Author: 李永晖
*  @CreatedDate:2021/12/14
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/15
-->

<template>
    <div class="wrap">
        <div class="header">
            <p>排序：</p>
            <p :class="{clicked:click1, unClicked:unClick1}" @click="clickbtn1">按最后发布时间</p>
            <p :class="{clicked:click2,unClicked:unClick2}" @click="clickbtn2">按访问量</p>
        </div>
        <el-divider></el-divider>
        <NoContent btnText="写文章"></NoContent>
    </div>
</template>

<script>
import NoContent from '../../components/page/NoContent.vue';
export default {
    components:{
        NoContent
    },
    data(){
        return {
            click1:true,
            unClick1:false,
            click2:false,
            unClick2:true,
        }
    },
    methods:{
        clickbtn1(){
            this.click1 = true;
            this.unClick1 = false;
            this.click2 = false;
            this.unClick2 = true;
        },
        clickbtn2(){
            this.click2 = true;
            this.unClick2 = false;
            this.click1 = false;
            this.unClick1 = true;
        }
    }
}
</script>

<style scoped>
.header{
    display: flex;
    justify-content: right;
}

.header p:nth-child(1){
    font-size: 14px;
    color: #999aaa;
    margin-right:15px;
}

.header .clicked{
    font-size: 14px;
    color: #EF6520;
    cursor: pointer;
}

.header .unClicked{
    font-size: 14px;
    color: #555666;
    cursor: pointer;
}

.header p:nth-child(2){
    margin-right: 15px;
}

.header p:nth-child(3){
    margin-right: 10px;
}
</style>