<template>
  <div class="top">
    <div class="content">
      <div class="welcome">您好，欢迎访问虚贝租号平台！</div>
      <div class="server">
        <span class="please">
          <span> 你好，请</span>
          <a>登录 </a>
          <a> 注册</a>
        </span>
        <span class="line">|</span>
        <a>个人中心</a>
        <span class="line">|</span>
        <a>帮助中心</a>
        <span class="line">|</span>
        <a class=".about">关于我们</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Top",
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.top {
  background-color: #f8f8f8;
  .content {
    // display: flex;
    // justify-content: space-between;
    width: 1400px;
    height: 34px;
    font-size: 14px;
    color: #666;
    line-height: 34px;
    margin: 0 auto;
    .welcome {
      float: left;
    }
    .server {
      float: right;
      .line {
        color: #e5e5e5;
        font-size: 14px;
        margin-left: 10px;
        margin-right: 10px;
      }
      .please {
        font-size: 12px;
        span {
          margin-right: 10px;
        }
        a {
          font-size: 14px;
          color: red;
          &:first-child {
            margin-right: 10px;
          }
          &:hover {
            color: #3eaffd;
          }
        }
      }

      a:hover {
        color: #3eaffd;
      }
    }
  }
}
</style>
