<template>
  <el-card ref="active" v-if="activityList" class="activity">
    <div class="act" v-for="active in activityList" :key="active.activityId">
      <div class="act-top">
        <div class="left">
          ￥
          <span>{{active.amount}}</span>
        </div>
        <div class="main">
          <div class="title">满{{active.thresholdAmount}}可用</div>
          <p>有效期{{active.expireDate}}</p>
          <p>{{active.title}}</p>
        </div>
        <div class="right">立即领取</div>
      </div>
      <div class="act-bot">领取后自动关注店铺</div>
    </div>
  </el-card>
</template>
<script>
export default {
  name: 'Active',
  props: {
    activityList: Array
  },
  mounted () {
    if (this.activityList) {
      setTimeout(() => {
        this.$refs.active.$el.style.height = '130px'
      }, 1000)
    }
  }
}
 </script>
<style lang="less" rel="stylesheet/less" scoped>
.activity {
  margin: 0 0 16px;
  width: 100%;
  height: 0px;
  box-sizing: border-box;
  .act {
    display: inline-block;
    width: 320px;
    height: 110px;
    margin-right: 66px;
    .act-top {
      display: flex;
      height: 72px;
      background: url('../../assets/image/common/active.jpg') no-repeat;
      .left {
        width: 96px;
        line-height: 72px;
        color: #fff;
        font-size: 20px;
        text-align: center;
        span {
          font-size: 48px;
        }
      }
      .main {
        width: 120px;
        margin: 0;
        padding: 0;
        color: #fff;
        padding-top: 7px;
        .title {
          font-size: 18px;
        }
      }
      .right {
        width: 104px;
        line-height: 72px;
        text-align: center;
        color: #f54f35;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
      }
    }
    .act-bot {
      margin-top: 1px;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
    }
  }
}
</style>