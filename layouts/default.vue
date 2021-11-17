<template>
    <div>
        <div class="header">
            <Header/>
        </div>
        <Nuxt/>
        <div class="footer">
            <Footer/>
        </div>
    </div>
</template>

<script>
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
export default {
    components:{
        Header,
        Footer
    }
}
</script>

<style>
    *{
        margin: 0 auto;
        font-size: 18px;
    }
    /* .header{
        width: 100%;
        height: 50px;
        background-color: black;
    } */
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