<!--
*  @FileDescription: 文章详情页
*  @Author: 李永晖
*  @CreatedDate:2021/12/10
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/15
-->

<template>
    <div class="wrap">
        <el-row>
            <el-col :md="18" :xs="24" :sm="24" class="left">
                <div class="article">
                    <el-card>
                        <div class="header">
                            <p class="title">{{title}}</p>
                            <div class="articleInfo">
                                <nuxt-link to="/" target="_blank"><i class="el-icon-user-solid">{{author}}</i></nuxt-link>
                                <i class="el-icon-date">{{lastEditTime}}</i>
                                <i class="el-icon-thumb">{{thumbNumber}}</i>
                                <i class="el-icon-view">{{viewCount}}</i>
                            </div>
                            <div class="tag">
                                <el-tag size="small">学习</el-tag>
                                <el-tag size="small">生活</el-tag>
                            </div>
                        </div>
                        <div class="article-content">
                            <div class="markdown">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{content}}</div>
                            <!-- <el-button type="primary" class="btn" >点赞</el-button> -->
                            <div class="thumbUp" @click="thumb" title="点赞"><i class="el-icon-thumb"></i></div>
                        </div>
                    </el-card>
                </div>
                <div class="comment">
                    <el-card>
                        <h6>{{commentNumber}}条评论</h6>
                        <el-divider></el-divider>
                        <div class="inputBox">
                            <img :src="imageUrl" alt="">
                            <el-input clearable placeholder="撰写评论..." class="input" v-model="comment"></el-input>
                            <el-button type="primary" :disabled="comment ? false : true">评论</el-button>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col class="hidden-sm-and-down right-content" :md="6">
                <el-card>
                    <div slot="header"><el-divider>目录</el-divider></div>
                    <div></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:'',
            author:'',
            thumbNumber:0,
            viewCount:0,
            content:'',
            lastEditTime:'',
            commentNumber:0,
            imageUrl:require('../../asserts/images/userImage.jpg'),
            comment:''
        }
    },
    async created(){
        const {data} = await this.$axios.get('https://mock.mengxuegu.com/mock/61925633f126df7bfd5b7a1a/articleInfo');
        const datas = data.data;
        this.title = datas.title;
        this.author = datas.nickName;
        this.thumbNumber = datas.thumUp;
        this.viewCount = datas.viewCount;
        this.content = datas.summary;
        this.lastEditTime = datas.updataTime;
    },
    methods:{
        thumb(){
            let thum = document.getElementsByClassName('thumbUp')[0];
            if(thum.style.color){
                document.getElementsByClassName('thumbUp')[0].style.color = null;
                document.getElementsByClassName('thumbUp')[0].title = "点赞";
                this.thumbNumber--;
            }else{
                document.getElementsByClassName('thumbUp')[0].style.color = "#EF6520";
                document.getElementsByClassName('thumbUp')[0].title = "取消点赞";
                this.thumbNumber++;
            }

            
        }
    }
}
</script>

<style scoped>
.left{
    margin-right: 20px;
}

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

/* 鼠标放在作者名称上时的样式 */
.articleInfo i:nth-child(1):hover{
    cursor: pointer;
}

.header .tag{
    margin-bottom: 15px;
}

.thumbUp{
    font-size: 30px;
    margin-top: 20px;
}

.article-content i:hover{
    cursor: pointer!important;
}

.markdown{
    font-size: 16px;
    color: #4D4D4D;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 1px;
}

.right-content{
    position: fixed;
    right: 25px;
}

.comment{
    margin-top: 20px;
}

.comment h6{
    font-size: 16px;
    color: #6b6b6b;
    margin-bottom: 0;
}

.comment img{
    height: 38px;
    width: 38px;
    border-radius: 100px;
    margin-right: 10px;
}

.comment .inputBox{
    display: flex;
}

.comment .input{
    margin-right: 8px;
}
</style>