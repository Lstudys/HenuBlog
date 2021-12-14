<!--
*  @FileDescription: 个人主页文章子路由
*  @Author: 李永晖
*  @CreatedDate:2021/12/14
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/14
-->

<template>
    <div class="wrap">
        <div class="header">
            <p>排序：</p>
            <p :class="{clicked:click1, unClicked:unClick1}" @click="clickbtn1">按最后发布时间</p>
            <p :class="{clicked:click2,unClicked:unClick2}" @click="clickbtn2">按访问量</p>
        </div>
        <el-divider></el-divider>
        <div class="content">
            <img src="../../asserts/images/background.jpg" alt="">
            <p>什么也没有</p>
            <nuxt-link to="/articles/edit" class="edit">写文章</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            click1:true,
            unClick1:false,
            click2:false,
            unClick2:true
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

.content{
    text-align: center;
}

.content p{
    font-size: 16px;
    color: #6b6b6b;
}

.content .edit{
    display: block;
    color: #EF6520;
    margin-left: 300px;
    width: 180px;
    height: 30px;
    padding-top: 5px;
    text-align: center;
    border: 1px solid #EF6520;
    border-radius: 5px;
    transition: 0.5s;
}

.content .edit:hover{
    color: #fff;
    background-color: #EF6520;
}
</style>