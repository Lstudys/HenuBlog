<!--
*  @FileDescription: 问答列表组件
*  @Author: 李永晖
*  @CreatedDate:2021/12/13
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/13
-->

<template>
    <div class="wrap">
        <div class="list" v-for="item in articles" :key="item.id">
            <el-card shadow="hover">
                <div class="content">
                    <div class="questionInfo">
                        <el-tag size="small">回答<br/>{{item.answerNumber}}</el-tag>
                        <el-tag size="small">浏览<br/>{{item.viewCount}}</el-tag>
                    </div>
                    <div class="questionbody">
                        <nuxt-link class="title" to="/" target="_blank">
                            <p class="title">{{item.title}}</p>
                        </nuxt-link>
                    <div class="acticleInfo">
                        <nuxt-link to="/" target="_blank"><i class="el-icon-user-solid">{{item.nickName}}</i></nuxt-link>
                        <i class="el-icon-thumb">{{item.thumbup}}</i>
                        <i class="el-icon-view">{{item.answerNumber}}</i>
                    </div>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    name:'QuestionList',
    data(){
        return {
            articles:[]
        }
    },
    async created(){
        const {data} = await this.$axios.get('https://mock.mengxuegu.com/mock/61925633f126df7bfd5b7a1a/questionList');
        const datas = data.data;
        this.articles = datas.records;
    }
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
top: -30px;
left: 120px;
/* background-color: blue; */
}

.title{
    margin-top: 15px;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 20px;
}

.title:hover{
    color: #EF6520;
}

.acticleInfo i{ 
    margin-left: 5px;
    color: #ccc;
    font-size: 14px;    
}

.acticleInfo i:nth-child(1):hover{
    color: #EF6520;
    cursor: pointer;
}
</style>