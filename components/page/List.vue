<!--
*  @FileDescription: 文章列表组件
*  @Author: 李永晖
*  @CreatedDate:2021/12/09
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/09
-->


<template>
    <div class="wrap">
        <ul>
            <li v-for="article in articles" :key="article.id">
                <div class="content">
                    <nuxt-link to="/" target="_blank">
                        <p class="title">{{article.title}}</p>
                        <p class="news">{{article.summary}}</p>
                    </nuxt-link>
                    <div class="acticleInfo">
                        <nuxt-link to="/" target="_blank"><i class="el-icon-user-solid">{{article.nickName}}</i></nuxt-link>
                        <i class="el-icon-thumb">{{article.thumbup}}</i>
                        <i class="el-icon-view">{{article.viewCount}}</i>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'List',
    data(){
        return {
            articles:[]
        }
    },
    async created(){
        const {data} = await this.$axios.get('https://mock.mengxuegu.com/mock/61925633f126df7bfd5b7a1a/articleList');
        const {records} = data.data;
        this.articles = records;
    }
}
</script>

<style scope>
li{
    list-style-type: none;
}

.title{
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 0;
}

.news{
    margin-top: 0;
    color: #ccc;
    font-size: 14px;    
}

.title:hover{
    color: #EF6520;
}

.news:hover{
    color: #000;
}

.acticleInfo i{
    margin-left: 5px;
    color: #ccc;
    font-size: 14px;
}

/* 作者名的样式 */
.acticleInfo i:nth-child(1):hover{
    color: #EF6520;
    cursor: pointer;
}
</style>