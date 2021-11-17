<template>
    <div class="my-header header-fixed">
        <div>header</div>
    </div>
</template>

<script>
export default {
    name:'Header',
    mounted() {
        console.log('Header组件');
    },
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
</style>