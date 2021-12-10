<!--
*  @FileDescription: 文章详情页
*  @Author: 李永晖
*  @CreatedDate:2021/12/10
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/10
-->

<template>
    <div class="wrap">
        <el-row>
            <el-col :md="18" :xs="24" :sm="24">
                <div class="article">
                    <el-card>
                        <div class="header">
                            <p class="title">今天天气晴，上了一上午课</p>
                            <div class="articleInfo">
                                <nuxt-link to="/" target="_blank"><i class="el-icon-user-solid">李永晖</i></nuxt-link>
                                <i class="el-icon-date">一天前</i>
                                <i class="el-icon-thumb">520</i>
                                <i class="el-icon-view">520</i>
                            </div>
                            <div class="tag">
                                <el-tag size="small">学习</el-tag>
                                <el-tag size="small">生活</el-tag>
                            </div>
                        </div>
                        <div class="article-content">
                            <div class="markdown">
                                啊哈哈哈哈哈哈哈哈哈
                            </div>
                            <el-button type="primary" class="btn" icon="el-icon-thumb">点赞</el-button>
                        </div>
                    </el-card>
                </div>
                <div>
                    <h2>评论区</h2>
                    <el-card></el-card>
                </div>
            </el-col>
            <el-row class="hidden-sm-and-down" :md="6">
                <el-card>
                    <div slot="header"></div>
                    <div></div>
                </el-card>
            </el-row>
        </el-row>
    </div>
</template>

<style scope>
.el-card{
    margin: 0 15px;
}

.header{
    display: flex;
    flex-direction: column;
}

.header .title{
    font-weight: bold;
}

.title{
    margin-bottom: 20px;
}

.articleInfo{
    margin-bottom: 10px;
}

.articleInfo i{
    color: #ccc;
    font-size: 12px;
}

.articleInfo i:nth-child(1){
    color: #EF6520;
}

.article-content .btn{
    border-radius: 5px;
}
</style>