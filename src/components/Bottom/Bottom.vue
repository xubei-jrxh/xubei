<template>
  <div class="Bottom">
    <!-- 上半部分 -->
    <div class="footerContainer">
      <div class="footerTop">
        <div class="xubeiLogo"></div>
        <div class="help">
          <ul>
            <li>新手帮助</li>
            <li>免费注册</li>
            <li>如何租赁</li>
            <li>如何购买</li>
            <li>如何发布</li>
          </ul>
        </div>
        <div class="safe">
          <ul>
            <li>租号安全</li>
            <li>15天延时转账</li>
            <li>租赁押金</li>
            <li>百宝箱一键登录</li>
            <li>帮助中心</li>
          </ul>
        </div>
        <div class="aboutXuBei">
          <ul>
            <li>关于虚贝</li>
            <li>关于我们</li>
            <li>加入我们</li>
            <li>虚贝APP下载</li>
          </ul>
        </div>
        <div class="service">
          <div>官方在线客服</div>
          <div class="btn">
            <el-button
              class="serverOnline"
              type="primary"
              icon="el-icon-user-solid"
              >在线客服</el-button
            >
          </div>
          <div>周一至周日8:00-24:00</div>
        </div>
        <div class="qrCode">
          <div>联系我们</div>
          <img src="../../assets/image/common/appCode.png" alt="" />
        </div>
      </div>
      <!-- 下半部分 -->
      <div class="footerBottom">
        <div class="link">
          <span>友情链接：</span>
          <span>斑马加速</span>
          <span>器代练通</span>
          <span>游戏陪玩</span>
          <span>淘外服网</span>
          <span>约吗陪玩</span>
          <span>电竞时代网</span>
        </div>
        <div class="public">
          <i></i>
          <span>浙公网安备 33010302003346号</span>
          <span>浙ICP备15021515号-1</span>
        </div>
        <div class="police"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Bottom",
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.Bottom {
  width: 100%;
  min-width: 1400px;
  // height: 300px;
  background-color: #2f3034;
  .footerContainer {
    width: 1400px;
    margin: 0 auto;
    .footerTop {
      width: 100%;
      height: 186px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      position: relative;
      .xubeiLogo {
        position: absolute;
        left: 0;
        top: 66px;
        width: 119px;
        height: 65px;
        background: url(../../assets/image/common/xubeiBgLogo.png) no-repeat;
      }
      .help {
        position: absolute;
        left: 200px;
        top: 30px;
        ul {
          li {
            font-size: 12px;
            color: #ffffff;
            letter-spacing: 0;
            margin-bottom: 8px;
            &:first-child {
              font-size: 14px;
              margin-bottom: 20px;
            }
          }
        }
      }
      .safe {
        position: absolute;
        left: 325px;
        top: 30px;
        ul {
          li {
            font-size: 12px;
            color: #ffffff;
            letter-spacing: 0;
            margin-bottom: 8px;
            &:first-child {
              font-size: 14px;
              opacity: 1;
              margin-bottom: 20px;
            }
          }
        }
      }
      .aboutXuBei {
        position: absolute;
        left: 478px;
        top: 30px;
        ul {
          li {
            font-size: 12px;
            color: #ffffff;
            letter-spacing: 0;
            margin-bottom: 8px;
            &:first-child {
              font-size: 14px;
              opacity: 1;
              margin-bottom: 20px;
            }
          }
        }
      }
      .service {
        position: absolute;
        right: 360px;
        top: 30px;
        div {
          &:nth-child(1) {
            font-size: 14px;
            color: #ffffff;
            letter-spacing: 0;
          }
          &:nth-child(2) {
            margin: 12px 0;
            .serverOnline {
              background: #3eaffd;
              color: #fff;
              width: 130px;
              height: 38px;
              font-size: 18px;
              margin-bottom: 6px;
              text-align: center;
            }
          }
          &:nth-child(3) {
            opacity: 0.4;
            font-size: 12px;
            color: #ffffff;
          }
        }
        .btn {
        }
      }
      .qrCode {
        position: absolute;
        right: 0px;
        top: 30px;

        div {
          color: #fff;
          margin-bottom: 15px;
        }
        img {
          width: 88px;
          height: 88px;
        }
      }
    }
    .footerBottom {
      text-align: center;
      padding-top: 40px;
      padding-bottom: 5px;
      box-sizing: border-box;
      font-size: 12px;
      color: #ffffff;
      .link {
        span {
          display: inline-block;
          width: 60px;
          height: 16px;
          margin-right: 16px;
        }
      }
      .public {
        margin: 5px 0;
        color: #666;
        i {
          padding-left: 30px;
          background: url("../../assets/image/common/logoPolice.png") no-repeat;
          background-size: 18px 18px;
          color: rgba(255, 255, 255, 0.4);
        }
        span {
          margin-right: 20px;
        }
      }
      .police {
        width: 368px;
        height: 66px;
        background: url("../../assets/image/common/police.png") no-repeat;
        margin: 0 auto;
      }
    }
  }
}
</style>
