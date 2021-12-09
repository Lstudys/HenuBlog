<!--
*  @FileDescription: 默认布局页面
*  @Author: 李永晖
*  @CreatedDate:2021/11/15
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/09
-->

<template>
    <div>
        <div class="header">
            <Header/>
        </div>
        <div class="my-main">
            <Nuxt/>
            <!-- 回到顶部按钮 -->
            <el-backtop><di class="my-back-btn"><i class="el-icon-top"></i></di></el-backtop>
        </div>
        <div class="footer">
            <Footer/>
        </div>
    </div>
</template>

<script>
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
export default {
    components:{
        Header,
        Footer
    }
}
</script>

<style scope>
.my-main{
    padding-top: 90px;
    max-width: 1140px;
    margin: 0 auto;
}

.my-back-btn{
    height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
}
</style>