<!--
*  @FileDescription: 推荐模块页面
*  @Author: 李永晖
*  @CreatedDate:2021/12/08
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/09
-->

<template>
    <div class="wrap">
        <List></List>
    </div>
</template>

<script>
import List from '../../components/page/List.vue';
export default {
    components:{
        List
    },
    created(){
        console.log('index创建');
    },
    methods:{
     
    }
}
</script>

<style scoped>

</style>