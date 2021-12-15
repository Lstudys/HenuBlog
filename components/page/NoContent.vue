<!--
*  @FileDescription: 没有文章
*  @Author: 李永晖
*  @CreatedDate:2021/12/15
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/15
-->

<template>
    <div class="content">
        <img src="../../asserts/images/background.jpg" alt="">
        <h6>什么也没有</h6>
        <nuxt-link :to="path" class="edit">{{btnText}}</nuxt-link>
    </div>
</template>

<script>
export default {
    props:['btnText','path']
}
</script>

<style scoped>
.content{
    text-align: center;
    margin-top: 40px;
}

.content img{
    height: 100px;
    width: 100px;
}

.content h6{
    margin-top: 10px;
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