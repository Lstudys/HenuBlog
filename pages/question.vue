<!--
*  @FileDescription: 问答页面
*  @Author: 李永晖
*  @CreatedDate:2021/12/12
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/14
-->

<template>
    <div class="wrap">
        <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/question">热门</el-menu-item>
            <el-menu-item index="/question/newAanswer">最新</el-menu-item>
            <el-menu-item index="/question/unAnswer">待回答</el-menu-item>
        </el-menu>
        <nuxt-child></nuxt-child>
    </div>
</template>

<script>
import List from '../components/page/List.vue'
export default {
    name:'question',
    components:{
        List
    },
    data(){
        return {
            activeIndex:''
        }
    },
    created(){
        this.activeIndex = this.$route.path;
    }
}
</script>

<style scoped>


.el-menu{
    padding-left: 0px;
    margin-bottom: 20px;
}
</style>