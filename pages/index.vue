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
      <el-col :span="16">
        <Carousel></Carousel>
        <!-- <router-view></router-view> -->
        <!-- 两个显示子路由的标签都能用 -->
        <nuxt-child></nuxt-child>
      </el-col>
      <el-col :span="3">
        <Card></Card>
      </el-col>
    </el-row>
</div>
</template>

<script>
import LeftNav from '../components/page/LeftNav.vue';
import Carousel from '../components/page/carousel.vue';
import Card from '../components/page/Card.vue';

export default {
  components:{
    LeftNav,
    Carousel,
    Card
  },
  mounted() {
    console.log(this.$route.path);
  },
}
</script>

<style scoped>

</style>
