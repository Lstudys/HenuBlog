<!--
*  @FileDescription: Header组件
*  @Author: 李永晖
*  @CreatedDate:2021/11/17
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/01
-->

<template>
    <div class="my-header header-fixed">
        <div class="my-nav">
            <el-row type="flex" justify="end" align="center">
                <el-col :span="4" class="my-logo">
                    <nuxt-link to="/"><img src="@/asserts/images/logo.png" alt="" height="50px"></nuxt-link>
                </el-col>
                <el-col :span="10" class="hidden-sm-and-down">
                    <el-menu :default-active="defaultActive" 
                    mode="horizontal" 
                    active-text-color="#EF6520"
                    router>
                        <el-menu-item index="/">首页</el-menu-item>
                        <el-menu-item index="/question">问答</el-menu-item>
                        <el-menu-item index="/label">标签</el-menu-item>
                    </el-menu>
                </el-col>
                <el-col class="my-login" :span="8" xs="12">
                    <div class="my-login-inner">
                        <el-button type="text" >后台管理</el-button>
                        <el-button v-if="!ifLogin" type="text" @click="$store.dispatch('login')">登录</el-button>
                        <el-button v-if="!ifLogin" type="primary" round>注册</el-button>
                        <el-dropdown @command="handleCommand">
                            <div class="el-dropdown-link">
                                 <el-avatar icon="el-icon-user-solid" :src="ifLogin ? userInfo.imageUrl:null"></el-avatar>
                            </div>
                            <el-dropdown-menu slot="dropdown"  >
                                <el-dropdown-item command="artical">写文章</el-dropdown-item>
                                <el-dropdown-item command="question">提问题</el-dropdown-item>
                                <el-dropdown-item command="user">我的主页</el-dropdown-item>
                                <el-dropdown-item v-if="ifLogin" command="logout">退出登录</el-dropdown-item>
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
        // this.defaultActive = this.$route.path;
    },
    data(){
        return {
            defaultActive: `${this.$route.path}`,// 默认导航路径
            userInfo:this.$store.state.userInfo,
            imageUrl:'@/asserts/images/userImage.jpg'
        }
    },
    computed:{
        ifLogin(){
            return this.$store.state.userInfo;
        }
    },
    methods:{
        handleCommand(command){
            if(!this.ifLogin){
               return this.$store.dispatch('login');
            }
            switch(command){
                case 'artical':
                    let articalRoute = this.$router.resolve('/artical/edit');
                    window.open(articalRoute.href,'_blank');
                    break;
                case 'question': 
                    let questionRoute = this.$router.resolve('/question');
                    window.open(questionRoute.href,'_blank');
                    break;
                case 'user':
                    let userRoute = this.$router.resolve('/user');
                    window.open(userRoute.href,'_blank');
                    break;
                default:break;
            }
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
    max-width: 1140px;
}

.my-logo{
    line-height: 60px;
    margin-top: 6px;
    padding-left: 50px;
}

.my-login{
    text-align: right;
}

.my-login-inner{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    margin-left: 60px;
}

.el-dropdown-link{

margin: 10px 10px;
}

div:focus{
    outline: none;
}
</style>