<!--
*  @FileDescription: 热门问答页面
*  @Author: 李永晖
*  @CreatedDate:2021/12/13
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/13
-->

<template>
    <div class="wrap">
        <QuestionList></QuestionList>
    </div>
</template>

<script>
import QuestionList from '../../components/page/QuestionList.vue';
export default {
    components:{
        QuestionList
    },
    mounted() {
        console.log('热门组件');
    },
}
</script>