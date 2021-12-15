<!--
*  @FileDescription: 消息页面
*  @Author: 李永晖
*  @CreatedDate:2021/12/15
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/15
-->

<template>
    <div class="wrap">
         <el-row>
          <el-col :span="5" class="left">
              <el-card >
                <el-menu
                    :default-active="defaultPath"
                    router
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                    <el-menu-item index="/message">
                    <span>评论</span>
                    </el-menu-item>
                    <el-menu-item index="/message/fllow">
                    <span>关注</span>
                    </el-menu-item>
                    <el-menu-item index="/message/thumbup">
                        <span slot="title">点赞</span>
                    </el-menu-item>
                    <el-menu-item index="/message/private">
                        <span slot="title">私信</span>
                    </el-menu-item>
                    <el-menu-item index="/message/system">
                        <span slot="title">系统通知</span>
                    </el-menu-item>
                </el-menu>
              </el-card>
          </el-col>
          <el-col :span="19" class="right">
                <el-card>
                    <nuxt-child></nuxt-child>
                </el-card>
          </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    head:{
        title:'消息-河南大学软件学院交流论坛'
    },
    data(){
        return {
            defaultPath:this.$route.path
        }
    }
}
</script>

<style scoped>
.left{
    padding-right: 20px;
}
</style>