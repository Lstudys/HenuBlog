<!--
*  @FileDescription: 默认布局页面
*  @Author: 李永晖
*  @CreatedDate:2021/11/15
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/11/17
-->

<template>
    <div>
        <div class="header">
            <Header/>
        </div>
        <div class="my-main">
            <Nuxt/>
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
</style>