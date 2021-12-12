<!--
*  @FileDescription: 问答页面
*  @Author: 李永晖
*  @CreatedDate:2021/12/12
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/12
-->

<template>
    <div class="wrap">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">热门</el-menu-item>
            <el-menu-item index="3">最新</el-menu-item>
            <el-menu-item index="4">待回答</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import List from '../components/page/List.vue'
export default {
    components:{
        List
    },
    data(){
        return {
            activeIndex:'1'
        }
    }
}
</script>

<style scoped>
.wrap{
    /* background-color: blue; */
    /* padding-left: 300px; */
}

.el-menu{
    /* background-color: blue; */
    padding-left: 250px;
}
</style>