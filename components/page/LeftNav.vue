<!--
*  @FileDescription: 左侧导航栏组件
*  @Author: 李永晖
*  @CreatedDate:2021/12/03
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/09
-->


<template>
    <div>
        <el-divider>分类</el-divider>
      <el-menu
      :default-active="defaultPath"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="/">
       <span>推荐</span>
      </el-menu-item>
      <el-menu-item index="/technology">
       <span>技术</span>
      </el-menu-item>
      <el-menu-item index="/study">
        <span slot="title">学业</span>
      </el-menu-item>
      <el-menu-item index="/life">
        <span slot="title">生活</span>
      </el-menu-item>
      <el-menu-item index="/emotion">
        <span slot="title">情感</span>
      </el-menu-item>
    </el-menu>
    </div>
</template>


<script>
export default {
    name:'LeftNav',
    data(){
      return {
        defaultPath:this.$route.path
      }
    }
}
</script>

<style scope>
span{
  font-weight: bold;
}
</style>