<!--
*  @FileDescription: 文章列表组件
*  @Author: 李永晖
*  @CreatedDate:2021/12/09
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/10
-->


<template>
    <div class="wrap">
        <ul>
            <li v-for="article in articles" :key="article.id">
                <div class="content">
                    <nuxt-link :to="`/articles/${article.id}}`" target="_blank">
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
        <div class="noNews" v-show="ifHaveNews">
            <el-divider>没有更多了</el-divider>
        </div>
        <div class="btn">
            <el-button type="primary" :loading="isLoading" @click="loadNews">{{isLoading ? '加载中' : '点击加载'}}</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name:'List',
    data(){
        return {
            articles:[],
            isLoading:false,
            ifHaveNews:false
        }
    },
    async created(){
        const {data} = await this.$axios.get('https://mock.mengxuegu.com/mock/61925633f126df7bfd5b7a1a/articleList');
        const {records} = data.data;
        this.articles = records;
    },
    methods:{
        async loadNews(){
            this.isLoading = true;
            if(this.articles.length <= 80){
                const {data} = await this.$axios.get('https://mock.mengxuegu.com/mock/61925633f126df7bfd5b7a1a/articleList');
                const {records} = data.data;
                this.articles = this.articles.concat(records);
                this.isLoading = false;
            }
            else{
                setTimeout(() => {
                    this.ifHaveNews = true;
                    this.isLoading = false;
                }, 1500);
            }
        }
    }
}
</script>

<style scoped>
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

.btn{
    text-align: center;
}

.el-button{
    border-radius: 20px;
}

.noNews{
    text-align: center;
    color: #ccc;
}
</style>