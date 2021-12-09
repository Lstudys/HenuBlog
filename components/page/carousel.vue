<!--
*  @FileDescription: 走马灯组件
*  @Author: 李永晖
*  @CreatedDate:2021/12/06
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/09
-->


<template>
    <div class="block">
          <el-carousel trigger="click" height="250px">
            <el-carousel-item v-for="item in 4" :key="item">
              <img src="../../asserts/images/userImage.jpg" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
</template>

<script>
export default {
    name:'Carousel'
}
</script>

<style scope>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .el-carousel__item img{
    height: 250px;
    width: 100%;
  }
</style>