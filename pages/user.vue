<!--
*  @FileDescription: 个人主页
*  @Author: 李永晖
*  @CreatedDate:2021/12/14
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/14
-->

<template>
    <div class="wrap">
        <el-row>
          <el-col :span="7" class="left">
              <el-card >
                  <img src="../asserts/images/userImage.jpg" alt="">
                  <p class="username">李永晖</p>
                  <div class="userinfo">
                      <p>520<br/>关注</p>
                      <p>520<br/>粉丝</p>
                      <p>520<br/>获赞</p>
                  </div>
                  <div class="editUserInfo"><nuxt-link to="/" target="_blank">编辑个人资料</nuxt-link></div>
              </el-card>
              <p class="viewNumber">浏览 20</p>
          </el-col>
          <el-col :span="17" class="right">
                <el-card>
                    <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
                        <el-menu-item index="/user">文章</el-menu-item>
                        <el-menu-item index="/user/answer">回答</el-menu-item>
                        <el-menu-item index="/user/ask">提问</el-menu-item>
                        <el-menu-item index="/user/follow">关注</el-menu-item>
                    </el-menu>
                    <nuxt-child></nuxt-child>
                </el-card>
          </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    head:{
        title:'个人主页-河南大学软件学院交流论坛'
    },
    data(){
        return {
            activeIndex:this.$route.path
        }
    }
    
}
</script>

<style>
.left{
    padding-right: 20px;
}

.left img{
    border-radius: 100px;
    margin: 0 auto;
    padding-left: 38px;
}

.username{
    /* background-color: blue; */
    text-align: center;
    color: #212529;
    font-size: 24.696px;
}

.userinfo{
    display: flex;
    justify-content: center;
    align-items: center;
}

.userinfo p{
    margin: 20px;
    margin-top: 0;
}

.userinfo p:nth-child(1):hover{
    color: #EF6520;
    cursor: pointer;
}

.userinfo p:nth-child(2):hover{
    color: #EF6520;
    cursor: pointer;
}


.editUserInfo .nuxt-link-active{
    display: block;
    color: #EF6520;
    margin-left: 43px;
    width: 180px;
    height: 30px;
    padding-top: 5px;
    text-align: center;
    border: 1px solid #EF6520;
    border-radius: 5px;
    transition: 0.5s;
}

.editUserInfo .nuxt-link-active:hover{
    color: #fff;
    background-color: #EF6520;
}

.viewNumber{
    font-size: 14px;
    color: #6c757d;
}

.right{
}
</style>