<template>
    <div>
        <div class="header">
            <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">文章</a></li>
                <li><a href="#">问答</a></li>
                <li><a href="#">个人中心</a></li>
            </ul>
        </div>
        <Nuxt/>
        <div class="footer">footer</div>
    </div>
</template>

<style>
    *{
        margin: 0 auto;
        font-size: 18px;
    }
    .header{
        width: 100%;
        height: 50px;
        background-color: black;
    }
    .header ul{
        margin-left: 80px;
    }
    .header li{
        display: inline;
        margin-left: 60px;
        line-height: 50px;
    }
    .header a{
        text-decoration: none;
        color: #fff;
    }
    .header a:hover{
        color: aqua;
    }
</style>