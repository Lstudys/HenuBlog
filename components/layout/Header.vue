<!--
*  @FileDescription: Header组件
*  @Author: 李永晖
*  @CreatedDate:2021/11/17
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/11/17
-->

<template>
    <div class="my-header header-fixed">
        <div class="my-nav">
            <el-row type="flex" justify="end" align="center">
                <el-col :span="4">
                    <nuxt-link to="/"><img src="@/asserts/images/logo.png" alt="" height="40px"></nuxt-link>
                </el-col>
                <el-col :span="10" class="hidden-xs-only">
                    <el-menu default-active="/" 
                    mode="horizontal" 
                    active-text-color="#EF6520"
                    router="true"
                    @select="handleSelect">
                        <el-menu-item index="/">首页</el-menu-item>
                        <el-menu-item index="/question">问答</el-menu-item>
                        <el-menu-item index="/label"><a href="https://www.ele.me" target="_blank">标签</a></el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span="8" xs="12">
                    <div class="my-login">
                        <el-button type="text" >后台管理</el-button>
                        <el-button type="text">登录</el-button>
                        <el-button type="primary" round="true">注册</el-button>
                        <el-dropdown>
                            <div class="el-dropdown-link">
                                 <el-avatar icon="el-icon-user-solid"></el-avatar>
                            </div>
                            <el-dropdown-menu slot="dropdown"  @command="handleCommand">
                                <el-dropdown-item command="artical">写文章</el-dropdown-item>
                                <el-dropdown-item command="question">提问题</el-dropdown-item>
                                <el-dropdown-item command="user">我的主页</el-dropdown-item>
                                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name:'Header',
    mounted() {
        console.log('Header组件');
    },
    methods:{
        handleCommand(command){
            this.$message(command);
        }
    }
}
</script>

<style scope>
.my-header{
    background-color: #fafafa;
    width: 100%;
    height: 60px;
    border-top: 3px solid #EF6520;
    box-shadow: 0 2px 4px rgba(0,0, 0, 0.12);
    z-index: 99999;
}

.header-fixed{
     position: fixed; 
}

.my-nav{
    margin: 0 auto;

}

 
</style>