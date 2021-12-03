<!--
*  @FileDescription: 首页
*  @Author: 李永晖
*  @CreatedDate:2021/11/14
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/03
-->


<template>
<div class="my-wrap">
    <el-row type="flex" justify="space-between">
      <el-col :span="5" class="hidden-sm-and-down">
        <LeftNav></LeftNav>
      </el-col>
    </el-row>
</div>
</template>

<script>
import LeftNav from '../components/page/LeftNav.vue';
export default {
  components:{
    LeftNav
  }
}
</script>

<style scope>

</style>
