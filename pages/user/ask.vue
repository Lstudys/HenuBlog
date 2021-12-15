<!--
*  @FileDescription: 个人主页提问子路由
*  @Author: 李永晖
*  @CreatedDate:2021/12/15
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/15
-->

<template>
    <div class="wrap">
        <NoContent btnText="我要提问" path="/ask"></NoContent>
    </div>
</template>

<script>
import NoContent from '../../components/page/NoContent.vue';
export default {
    components:{
        NoContent
    }
}
</script>