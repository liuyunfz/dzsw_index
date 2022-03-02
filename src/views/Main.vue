<template>
  <div>
  <el-carousel :interval="4000" type="card" height="300px">
    <el-carousel-item label="监测芯片">
        <el-image
        style="width: 100%; height: 100%; float:left"
        :src="require('../assets/xp.jpg')"
        fit="fit"></el-image>
      <!-- <h3 style="float:left; width:9%">渔农芯片</h3> -->
    </el-carousel-item>
    <el-carousel-item label="数据展示">
        <el-image
        style="width: 100%; height: 100%; float:left"
        :src="require('../assets/data-img.png')"
        fit="fit"></el-image>
    </el-carousel-item>
    <el-carousel-item label="渔民收获">
        <el-image
        style="width: 100%; height: 100%; float:left"
        :src="require('../assets/fish-1.jpg')"
        fit="fit"></el-image>
    </el-carousel-item>
  </el-carousel>

  <div id="body-main">
    <el-card class="box-card" shadow="hover" >
      <el-row :gutter="40">
        <el-col :span="6" :xs="24">
          <el-image
          style="width: 100px; height: 100px;"
          :src="require('../assets/cpu.png')"
          fit="fit"></el-image>
        </el-col>
        <el-col :span="18" :xs="24">
          <div style="">
          我们利用最新的嵌入式芯片，将其植入牲畜的体内<p/>
          通过内部监测，更准确地实时反馈牲畜的状态信息<p/>
          养殖户可以通过我们提供的数据后台网站，实时查看相关数据
          </div>
          </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card" shadow="hover" >
      <el-row :gutter="40">
        <el-col :span="6" :xs="24">
          <el-image
          style="width: 100px; height: 100px;"
          :src="require('../assets/shop.png')"
          fit="fit"></el-image>
        </el-col>
        <el-col :span="18" :xs="24">
          <div>
            在线的B2C销售网站，只针对渔农类的特化销售平台<p/>
            帮助养殖户与种植户更快的兜售
          </div>
          </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card" shadow="hover" >
      <el-row :gutter="40">
        <el-col :span="6" :xs="24">
          <el-image
          style="width: 100px; height: 100px;"
          :src="require('../assets/car.png')"
          fit="fit"></el-image>
        </el-col>
        <el-col :span="18" :xs="24">
          <div>
            通过与物流公司合作，我们为一些难以保存的产品提供了 <b>冷链运输</b> 服务<p/>
            达到 快装快运、轻装轻卸、防热防冻、平稳运输
          </div>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card" shadow="hover" >
      <el-row :gutter="40">
        <el-col :span="6" :xs="24">
          <el-image
          style="width: 100px; height: 100px;"
          :src="require('../assets/rainbow.png')"
          fit="fit"></el-image>
        </el-col>
        <el-col :span="18" :xs="24">
          <div>
            提供从出生到被消费的完整 <b>溯源</b> 服务<p/>
            包括每日的生长情况，所属的科室，养殖的地点，运输的路线<p/>
            使消费者更放心的购买，增加回购量
          </div>
        </el-col>
      </el-row>
    </el-card>

  </div>
  <el-backtop :visibility-height='0'>
    <span class="iconfont icon-kefu"/>
  </el-backtop>
  </div>
</template>

<script>
export default {

}
</script>

<style>
 @import url('//at.alicdn.com/t/font_3178306_0nddxh4rxnvb.css');
.el-card{
  margin-bottom: 30px;
}
@media (min-width: 768px) {
  .el-card__body{
    margin-left: 10%;
  }
}

@media (max-width: 768px) {
  .el-row { 
    margin-left: -20px;
    text-align: center;
  }
}
#body-main{
  margin: 50px 30px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>