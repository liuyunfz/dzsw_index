<template>
  <div>
    <h2 style="width:50%">用户评价</h2> 
  <div v-for="dataItem in appraises" :key="dataItem.id">
  <el-descriptions class="margin-top" title="" :column="3" border >

    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        产品名称
      </template>
      {{dataItem.goodName}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        用户名
      </template>
      {{dataItem.username}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        养殖/种植 地
      </template>
      {{dataItem.loc}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        种类
      </template>
      <el-tag size="small" v-for="tag in dataItem.classify" :key="tag" style="    margin-right: 5px;">{{tag}}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        购买时间
      </template>
      {{dataItem.time}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        用户评价
      </template>
      <el-rate
        v-model="dataItem.source"
        :icon-classes="iconClasses"
        disabled
        score-template=4
        void-icon-class="icon-rate-face-off"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        详细评价
      </template>
      {{dataItem.more}}<el-button type="primary" style="float:right"  size="small" @click="toBuy">购买同款</el-button>
    </el-descriptions-item>
  </el-descriptions>
  <el-divider></el-divider>
  </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        appraises:[{
          id:1,
          goodName:"养殖类监测芯片 V1.0",
          username:"张三",
          loc:"苏州市",
          time:"2022-2-27",
          source:4.3,
          classify:["渔产品","大黄鱼"],
          more:"商品很好，检测很准确，已经赚了3套别墅的钱了。推荐购买"
        },{
          id:2,
          goodName:"种植类监测芯片 V1.0",
          username:"李四",
          loc:"舟山市",
          time:"2022-2-21",
          source:4.8,
          classify:["农产品","水稻"],
          more:"商品很好，检测很准确，已经赚了7套别墅的钱了。推荐购买"
        },{
          id:3,
          goodName:"养殖类监测芯片 V1.0",
          username:"王五",
          loc:"重庆市",
          time:"2022-3-23",
          source:5.0,
          classify:["渔产品","咸鱼"],
          more:"商品很好，检测很准确，已经赚了5套别墅的钱了。推荐购买"
        }],
        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']
      };
    },methods:{
      toBuy(){
        this.$router.replace({path:"/order"});
      }
    }
}
</script>

<style>
</style>