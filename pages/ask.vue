<!--
*  @FileDescription: 提问题页面
*  @Author: 李永晖
*  @CreatedDate:2021/12/15
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/12/15
-->

<template>
    <div class="wrap">
        <el-row>
          <el-col :span="16" class="left">
              <el-card>
                  <h6>标题</h6>
                  <el-input clearable placeholder="输入标题"></el-input>
                  <h6>内容</h6>
                  <div class="mavonEditor">
                    <no-ssr>
                        <mavon-editor :toolbars="markdownOption" v-model="handbook" placeholder="你有什么问题..."/>
                    </no-ssr>
                  </div>
              </el-card>
          </el-col>
          <el-col :span="8" class="right">
              <el-card>
                  <h6>AI助手</h6>
              </el-card>
          </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    head:{
        title:'提问-河南大学软件学院交流论坛'
    }
    
}
</script>

<style scoped>
.left{
    padding-right: 20px;
}

.left h6{
    font-size: 16px;
    color: #6b6b6b;
    margin-bottom: 9px;
}

.right h6{
    font-size: 16px;
    color: #6b6b6b;
}
</style>