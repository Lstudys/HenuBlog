<template>
    <div class="my-footer">
        <div class="my-wrap">
            <el-divider>河南大学软件学院交流论坛</el-divider>
            <div class="my-link">
                <a ref="nofollow" href="#">关于</a><span></span>
                <a ref="nofollow" href="#">反馈</a>
                <a ref="nofollow" href="">联系我</a>
                <a ref="nofollow" href="https://github.com/Lstudys">我的GitHub</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style scope>
.my-footer{
    padding-top: 60px !important;
    padding-bottom: 50px !important;
    background-color: #fff;
}

.my-footer .my-wrap{
    margin: 0 auto;
    max-width: 1190px;
}

.my-wrap .my-link{
    text-align: center;
    height: 18px;
    line-height: 18px;
    margin-top: 40px;
    font-family: PingFangSC-Regular;
}
</style>