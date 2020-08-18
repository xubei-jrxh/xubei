<template>
  <div class="login">
    <!-- 头部 -->
    <div class="logo">
      <img src="../assets/image/common/logoXubei.png" />
    </div>
    <!-- 中部 -->
    <div class="main">
      <!-- 左二维码 -->
      <div class="left"></div>
      <!-- 右登录 -->
      <div class="right">
        <!-- 登录标题 -->
        <div class="title">
          <div class="t-left">账户注册</div>
          <div class="t-right">
            我已有账号?
            <span>去登陆</span>
          </div>
        </div>
        <!-- 输入 -->
        <p>
          <img src="../assets/image/homePage/login_tel.png" alt />
          <input class="input" type="text" placeholder="请输入手机号" />
        </p>
        <!-- 验证码 -->
        <p class="code">
          <img src="../assets/image/homePage/login_tel.png" alt />
          <input class="input" type="password" placeholder="请输入手机验证码" />
          <input type="button" value="获取验证码" class="btn-login" />
        </p>
        <p>
          <img src="../assets/image/homePage/login_pwd.png" alt />
          <input class="input" type="password" placeholder="请设置密码" />
        </p>
        <!-- 协议 -->
        <div class="protocol">
          <el-checkbox>我已阅读并同意</el-checkbox>
          <div>《租号分享平台服务协议》</div>
        </div>
        <input type="button" value="注册领礼" class="btn-login" />
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="tag">
        <a>租宝贝</a>
        <a>帮助中心</a>
        <a>关于我们</a>
      </div>
      <div class="copy">Copyright ©2015 杭州诸相网络技术有限公司 (www.xubei.com) 版权所有 浙ICP备15021515号-1</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Reg'
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.login {
  background-color: white;
  .logo {
    width: 1000px;
    height: 80px;
    margin: 0 auto;
    img {
      margin-top: 15px;
    }
  }
  .main {
    width: 100%;
    height: 700px;
    background-color: #f3f9fd;
    display: flex;
    justify-content: center;
    .left {
      margin: 100px 85px 0 0;
      width: 740px;
      height: 489px;
      background: url(../assets/image/common/register.png) no-repeat;
    }
    .right {
      width: 380px;
      padding: 0 40px;
      margin-top: 123px;
      border-radius: 10px;
      box-sizing: border-box;
      height: 400px;
      background-color: white;
      box-shadow: 0px 0px 15px rgba(62, 175, 253, 0.6);
      .title {
        padding: 18px 0;
        color: #333;
        font-size: 16px;
        border-bottom: 2px solid #e5e5e5;
        font-weight: bold;
        text-align: center;
        margin-bottom: 36px;
        box-sizing: border-box;
      }
      p {
        position: relative;
        img {
          position: absolute;
          left: 10px;
          top: 10px;
        }
        .input {
          height: 42px;
          width: 100%;
          margin-bottom: 20px;
          background: #fff;
          border-radius: 4px;
          padding-left: 36px;
          box-sizing: border-box;
          color: black;
          border: 1px solid #e5e5e5;
          &::-webkit-input-placeholder {
            /* placeholder颜色  */
            color: #757575;
            /* placeholder字体大小  */
            font-size: 13.3333px;
          }
        }
      }
      .code {
        .input {
          width: 180px;
        }
        .btn-login {
          width: 110px;
          height: 40px;
          margin: 0 0 20px 9px;
        }
      }
      .protocol {
        position: relative;
        font-size: 12px;
        margin: 1px 0 20px 0;
        div {
          position: absolute;
          color: #3eaffd;
          right: 34px;
          top: 3px;
        }
      }
      .btn-login {
        width: 100%;
        background-image: linear-gradient(-270deg, #49d1ffce 0%, #3eaffd 100%);
        color: #fff;
        border-radius: 3px;
        font-size: 14px;
        border: none;
        height: 44px;
        margin-bottom: 40px;
        cursor: pointer;
        &:hover {
          background: rgba(22, 189, 240, 0.726);
        }
      }
      .three-login {
        width: 100%;
        font-size: 14px;
        color: #999;
        line-height: 12px;
        text-align: center;
        margin-bottom: 20px;
      }
      .three-img {
        margin-bottom: 30px;
        text-align: center;
        img {
          margin: 0 14.5px;
          width: 40px;
          height: 40px;
          cursor: pointer;
          &:nth-child(1) {
            margin-left: 14px;
          }
        }
      }
    }
  }
  .footer {
    height: calc(100vh - 864px);
    width: 100%;
    background-color: white;
    .tag {
      margin-top: 84px;
      font-size: 14px;
      display: flex;
      justify-content: center;
      height: 21px;
      line-height: 21px;
      a {
        padding: 0 8px;
        &:nth-child(3) {
          margin-left: 5px;
        }
        &:nth-child(1) {
          margin-right: 4.5px;
        }
      }
    }
    .copy {
      text-align: center;
      color: #999;
      font-size: 14px;
      margin-top: 23px;
    }
  }
}
</style>