<!--
*  @FileDescription: 图片组件
*  @Author: 李永晖
*  @CreatedDate:2021/12/06
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/09
-->

<template>
     <el-card shadow="hover">
        <div class="block">
          <el-carousel trigger="click" height="200px">
            <el-carousel-item v-for="item in 4" :key="item">
              
            </el-carousel-item>
          </el-carousel>
        </div>
    </el-card>
</template>


<script>
export default {
    name:'Card'
}
</script>

<style>
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
</style>