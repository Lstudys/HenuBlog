<!--
*  @FileDescription: 问答列表组件
*  @Author: 李永晖
*  @CreatedDate:2021/12/13
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/13
-->

<template>
    <div class="wrap">
        <div class="list" v-for="item in 5" :key="item">
            <el-card shadow="hover">
                <div class="content">
                    <div class="questionInfo">
                        <el-tag size="small">回答<br/>10</el-tag>
                        <el-tag size="small">浏览<br/>10</el-tag>
                    </div>
                    <div class="questionbody">
                        <nuxt-link to="/" target="_blank">
                            <p class="title">title</p>
                        </nuxt-link>
                    <div class="acticleInfo">
                        <nuxt-link to="/" target="_blank"><i class="el-icon-user-solid">李永晖</i></nuxt-link>
                        <i class="el-icon-thumb">555</i>
                        <i class="el-icon-view">555</i>
                    </div>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    name:'QuestionList'
}
</script>

<style scoped>
.el-card{
    height: 80px;
}

.el-card:hover{
    /* background-color: blue; */
}

.el-tag{
    height: 45px;
}

.content{
    display: flex;
    flex-direction: row;
    position: relative;
}

.questionbody{
position: absolute;
top: 20px;
left: 80px;
}
</style>