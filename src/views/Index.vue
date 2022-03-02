<template>
    <el-container>
        <el-header id='main_header'>
            <el-image
            style="height:45px; float:left; margin: 10px auto;"
            :src="logoImg"
            fit="contain">渔农同芯有限公司</el-image>

            <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#fff"
            text-color="#333333"
            active-text-color="#d4fc79"
            style="float:right;border-bottom: 1px solid #e6e6e6;">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="3"><a href="https://www.ele.me" target="_blank" style="text-decoration: none;">物资销售</a></el-menu-item>
            <el-submenu index="2">
                <template slot="title">订购</template>
                <el-menu-item index="2-1">商品评价</el-menu-item>
                <el-menu-item index="2-2">立即订购</el-menu-item>
                </el-submenu>
            
            <el-submenu index="4">
                <template slot="title">我的</template>
                <el-menu-item index="4-1">我的订单</el-menu-item>
                <el-menu-item index="4-2">后台数据</el-menu-item>
            </el-submenu>
            </el-menu>
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
        <el-footer style="text-align: center;">
            <el-divider></el-divider>
            <el-image
            style="float:left; heigh:30px; width:30px"
            :src="require('../assets/fish-bowl.png')"
            fit="fit"></el-image>
            <el-image
            style="float:right; heigh:30px; width:30px"
            :src="require('../assets/pig.png')"
            fit="contain"></el-image>
            <span>商业邮箱: 
                <el-link :underline="false" href="mailto:ly@6yfz.cn" target="_blank">ly@6yfz.cn</el-link>
            </span>
            <el-divider direction="vertical"></el-divider>
            <span>公司地址: 浙江省舟山市定海区海大南路1号</span>
            <p/>
            <span>浙ICP备**********</span>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    data(){
        return {
            activeIndex: '1',
            logoImg:require('../assets/logo.png')
        }
    },
    created(){
        if(this.$route.name=="Index"){
            this.$router.replace({path:"/main"});
        }
    },
     methods: {
        handleSelect(key, keyPath) {
            if(key==='1'){
                this.$router.replace({path:"/main"});
            }else if(key==='2-1'){
                this.$router.replace({path:"/rate"});
            }else if(key==='4-1'){
                this.$router.replace({path:"/myOrder"});
            }else if(key==='2-2'){
                this.$router.replace({path:"/order"});
            }
            console.log(key, keyPath);
        }
    }
}
</script>

<style>
#main_header{
    padding: 0 70px;
    height: 3%;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
}
#mainNav{
    /* color:#d5d5d5; */
    text-align: center;
    font-size: 0.96rem;
    height: 100%;
    padding-top: 0;
    /* 0.9625rem */
}
body{
    margin: 0px;
    height: 100%;
}
</style>