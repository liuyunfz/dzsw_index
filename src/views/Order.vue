<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="商品名称" prop="model">
    <el-select v-model="ruleForm.model" placeholder="请选择商品">
      <el-option label="养殖类监测芯片 V1.0" value="cultivation-1"></el-option>
      <el-option label="种植类监测芯片 V1.0" value="planting-1"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item
    label="手机号"
  >
  <el-col :span="4">
    <el-input type="phone" v-model.number="ruleForm.phone" autocomplete="off" disabled></el-input>
  </el-col>
  </el-form-item>
  <el-form-item label="配送地址" required>
    <el-col :span="3">
        <el-select v-model="ruleForm.adress.province" placeholder="选择省">
            <el-option label="浙江省" value="zhejiang"></el-option>
        </el-select>
    </el-col>
    <el-col class="line" :span="1" style="text-align:center;">-</el-col>
    <el-col :span="3">
        <el-select v-model="ruleForm.adress.city" placeholder="选择市">
            <el-option label="杭州市" value="hangzhou"></el-option>
            <el-option label="舟山市" value="zhoushan"></el-option>
        </el-select>
    </el-col>
    <el-col class="line" :span="1" style="text-align:center;">-</el-col>
    <el-col :span="3">
        <el-select v-model="ruleForm.adress.district" placeholder="选择区">
            <el-option label="萧山区" value="xiaoshan"></el-option>
            <el-option label="定海区" value="dinghai"></el-option>
        </el-select>
    </el-col>
  </el-form-item>
  <el-form-item label="具体地址" prop="adress.details">
    <el-input type="textarea" v-model="ruleForm.adress.details"></el-input>
  </el-form-item>
  <el-form-item
    label="邮编"
  >
  <el-col :span="4">
    <el-input type="phone" v-model.number="ruleForm.zipCode" autocomplete="off" ></el-input>
  </el-col>
  </el-form-item>
  <el-form-item label="即时配送" prop="delivery">
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即订购</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>

</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          model: '',
          adress:{
            province:'',
            city:'',
            district:'',
            details:''
          },
          delivery: false,
          phone: '137******67',
          zipCode:'000000'
        },
        rules: {
          model: [
            { required: true, message: '请选择商品类型', trigger: 'change' }
          ],
          details: [
            { required: true, message: '请输入具体地址', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>

</style>