<template>
  <!-- 详情页 -->
  <div class="detail">
    <!-- 头部 -->
    <div class="header">
      <!-- 头部第一行 -->
      <div class="top">
        <p class="welcome">您好，欢迎访问虚贝租号平台！</p>
        <div class="loginList">
          <span>您好，请</span>
          <a class="login"
             href="javascrip:;">登录</a>
          <a class="register"
             href="javascrip:;">注册</a>
          <a class="type"
             href="javascrip:;">个人中心</a>
          <a class="type"
             href="javascrip:;">帮助中心</a>
          <a class="type"
             href="javascrip:;">关于我们</a>
        </div>
      </div>
      <!-- 头部第二行 Logo区域 -->
      <div class="buttom">
        <div class="buttom-content">
          <!-- logo区域 -->
          <div class="logo">
            <img src="./images/ia_100000000.png"
                 alt="" />
          </div>
          <!-- 导航区域 -->
          <div class="navBar">
            <div class="nav-item"><a href="javascript:;">首页</a></div>
            <div class="nav-item"><a href="javascript:;">租号试玩</a></div>
            <div class="nav-item">
              <a href="javascript:;">领券中心</a>
              <!-- <i>最新</i> -->
            </div>
            <div class="nav-item"><a href="javascript:;">优质店铺</a></div>
            <div class="nav-item"><a href="javascript:;">美女聊天</a></div>
            <div class="nav-item"><a href="javascript:;">分站加盟</a></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品详细区域 -->
    <div class="detailContent">
      <!-- 导航路径区域 -->
      <p class="type-path">
        <a href="javascript:;">返回首页</a>
        <a href="javascript:;">商品详情</a>
      </p>
      <div class="good-info">
        <div class="info-left">
          <!-- 大图区域 -->
          <div class="bigImgWrap">
            <img class="bigImg"
                 src="./images/ia_100000009.jpg"
                 alt="" />
          </div>
          <!-- 缩略小图区域 -->
          <div class="swipper-small">
            <div class="inner-swipper">
              <div class="img-wrap">
                <img src="./images/a.jpg"
                     alt="" />
              </div>
              <div class="img-wrap">
                <img src="./images/ia_100000009.jpg"
                     alt="" />
              </div>
              <div class="img-wrap">
                <img src="./images/ia_100000009.jpg"
                     alt="" />
              </div>
              <div class="img-wrap">
                <img src="./images/ia_100000009.jpg"
                     alt="" />
              </div>
            </div>
            <div class="prev-next">
              <a class="prev"
                 href="javascript:;">&lt;</a>
              <a class="next"
                 href="javascript:;">&gt;</a>
            </div>
          </div>
        </div>
        <!-- 轮播图右侧 -->
        <div class="info-right">
          <div class="base-info">
            <el-tooltip class="good-title"
                        effect="dark"
                        :content="detailList.goods_title"
                        placement="top">
              <p>{{detailList.goods_title}}</p>
            </el-tooltip>
            <p class="game-type">
              <span class="game-area">游戏区服</span>
              <span class="game-name">{{detailList.game_all_name}}</span>
            </p>
            <p class="button-wrap">
              <el-tooltip effect="dark"
                          content="该商品的上号方式为:APP自动上号,租赁后需下载虚贝app进行上号"
                          placement="top">
                <el-button class="button-text"
                           type="danger">自动上号</el-button>
              </el-tooltip>
              <el-button class="button-text"
                         type="danger">2小时起租</el-button>
            </p>
            <div class="good-active-info">
              <div class="some-info item-info">
                <p class="type-info">
                  <span class="title">商品编号</span>
                  <span class="text">4633806582867</span>
                </p>
                <p class="type-info">
                  <span class="title">商品热度</span>
                  <span class="text">{{detailList.hot_value}}</span>
                </p>
                <p class="type-info">
                  <span class="title">租号押金</span>
                  <span class="text">{{detailList.foregift}}.00元</span>
                </p>
              </div>
              <p class="discounts item-info">
                <span class="title">优惠活动</span>
                <span class="text">{{detailList.actity}}</span>
              </p>
              <p class="server item-info">
                <span class="title">服务保障</span>
                <el-button class="button-text icon-img"
                           type="danger">钻石签约卖家</el-button>
                <el-button class="button-text"
                           type="danger">卖家身份认证</el-button>
                <el-tooltip effect="dark"
                            content="该商品已加入错误赔付，如果密码错误买家将获得2元赔付"
                            placement="top">
                  <el-button class="button-text"
                             type="danger">错误赔付</el-button>
                </el-tooltip>
              </p>
            </div>
          </div>
          <!-- 价钱信息区域 -->
          <div class="money-info">
            <div class="money-item">
              <div class="money">
                <span class="symbol">￥</span>
                <span class="money-number">5.00</span>
              </div>
              <div class="clock-cirle">
                <div class="cycle">日租</div>
                <div class="clock">
                  <span class="el-icon-time"></span>
                  <span>24小时</span>
                </div>
              </div>
              <div class="clock-cirle-hover">
                <p class="svip-money"><span>¥</span>13.50</p>
                <p class="cycle-time">时租</p>
              </div>
            </div>
            <div class="money-item">
              <div class="money">
                <span class="symbol">￥</span>
                <span class="money-number">5.00</span>
              </div>
              <div class="clock-cirle">
                <div class="cycle">日租</div>
                <div class="clock">
                  <span></span>
                  <span>24小时</span>
                </div>
              </div>
              <div class="clock-cirle-hover">
                <p class="svip-money"><span>¥</span>13.50</p>
                <p class="cycle-time">时租</p>
              </div>
            </div>
            <div class="money-item">
              <div class="money">
                <span class="symbol">￥</span>
                <span class="money-number">5.00</span>
              </div>
              <div class="clock-cirle">
                <div class="cycle">日租</div>
                <div class="clock">
                  <span></span>
                  <span>24小时</span>
                </div>
              </div>
              <div class="clock-cirle-hover">
                <p class="svip-money"><span>¥</span>13.50</p>
                <p class="cycle-time">时租</p>
              </div>
            </div>
          </div>
          <!-- 温馨提示 -->
          <p class="warn">
            <span class="el-icon-warning-outline"></span>
            <span>温馨提示:禁止使用外挂，否则将扣除全部押金和租金</span>
          </p>
          <!-- svip -->
          <p class="svip">
            <i class="svip-img"></i>
            <span class="svip-content">成为SVIP会员享租号<span>9折</span>优惠,每月赠送价值<span>20元优惠券</span>!</span>
            <span class="add-svip">
              <span>立即开通</span>
              <i class="add-svip-img"></i>
            </span>
          </p>
          <el-button type="primary"
                     class="elRent">立即租凭</el-button>
        </div>
        <div class="inform-collect">
          <div class="inform">
            <i class="el-icon-warning-outline"></i>
            <p>举报</p>
          </div>
          <div class="collect">
            <i class="el-icon-star-off"></i>
            <p>收藏</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 配置信息 -->
    <div class="configuration-info">
      <div class="tabWraped">
        <h4>账号信息</h4>
        <h4>租凭须知</h4>
      </div>
      <div class="tabContent">
        <div class="tab-item active">
          <div class="Con-item-wrap"
               style="padding-bottom: 30px">
            <div class="Con-item"
                 v-for="(attr, index) in detailList.protoParams"
                 :key=index>
              <span class="item-title">{{attr.protoName}}</span>
              <i class="symbol">:</i>
              <span>{{attr.protoValue}}</span>
            </div>
          </div>
          <div class="conItemWrap">
            <div class="tab-detail-title">
              <div class="mask-title"></div>
              <div>账号描述</div>
            </div>
            <div class="desc-info">{{detailList.remark}}</div>
          </div>
          <div class="conItemWrap">
            <div class="tab-detail-title">
              <div class="mask-title"></div>
              <div>游戏截图</div>
            </div>
            <!-- 轮播图 -->
            <div class="swiper-container game-pick-info"
                 ref="detailFoot">
              <div class="swiper-wrapper">
                <!-- <div class="swiper-slide">
                  <img src="./images/a321d23c1132.png"
                       alt="" /> -->
                <div class="swiper-slide"
                     v-for="(img, index) in detailList.imgs"
                     :key="index">
                  <img :src="img.imgUrl"
                       alt="" />
                </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
              <!-- 如果需要导航按钮 -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
              <!-- 如果需要滚动条 -->
              <!-- <div class="swiper-scrollbar"></div> -->
            </div>
          </div>
        </div>
        <div class="tab-item">
          <p>租凭须知</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// swiper引入js和css
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import { reqDetail } from '@/api'
export default {
  name: 'Detail',
  data () {
    return {
      goodsId: '',
      detailList: {}
    }
  },
  async mounted () {
    this.goodsId = this.$route.query.goodsId
    const result = await reqDetail(this.goodsId)
    // console.log(result)
    if (result.code === 200) {
      this.detailList = result.data
    }
  },
  watch: {
    detailList: {
      handler () {
        this.$nextTick(() => {
          new Swiper(this.$refs.detailFoot, {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
        })
      }
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less">
body .is-dark {
  width: 210px;
}
.detail {
  .header {
    .top {
      display: flex;
      justify-content: space-between;
      width: 1200px;
      height: 34px;
      line-height: 34px;
      margin: 0 auto;
      font-family: PingFangSC-Medium;
      font-size: 12px;
      p {
        color: #999999;
      }
      .loginList {
        color: #666;
        .login,
        .register {
          color: red;
          margin-left: 10px;
        }
        .type::before {
          content: "";
          border-right: 2px solid #e5e5e5;
          margin: 0 10px;
        }
      }
    }
    .buttom {
      height: 89px;
      border-top: 1px solid rgb(229, 229, 229);
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
      .buttom-content {
        display: flex;
        justify-content: space-between;
        width: 1200px;
        margin: 0 auto;
        .logo {
          width: 310px;
          height: 55px;
          margin-top: 17px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .navBar {
          display: flex;
          .nav-item {
            line-height: 89px;
            margin-left: 36px;
            font-size: 18px;
            color: #333;
          }
        }
      }
    }
  }
  .detailContent {
    width: 1200px;
    margin: 0 auto;
    .type-path {
      height: 35px;
      line-height: 35px;
      & > a + a::before {
        content: ">";
        padding: 0 8px;
        font-size: 14px;
      }
      & > a + a:hover::before {
        color: #333;
      }
    }
    .good-info {
      position: relative;
      height: 500px;
      background-color: #fff;
      padding: 20px;
      display: flex;
      // 商品信息左区域
      .info-left {
        width: 390px;
        height: 500px;
        .bigImgWrap {
          width: 390px;
          height: 390px;
          background: rgb(238, 238, 238);
          // line-height: 390px;
          .bigImg {
            width: 390px;
            height: 390px;
            // vertical-align: middle;
            object-fit: contain;
          }
        }
        .swipper-small {
          width: 390px;
          height: 80px;
          padding: 15px 0;
          overflow: hidden;
          position: relative;
          .inner-swipper {
            width: 990px;
            height: 80px;
            // line-height: 80px;
            padding-left: 20px;
            display: flex;
            .img-wrap {
              width: 80px;
              height: 80px;
              margin-right: 10px;
              background-color: rgb(238, 238, 238);
              img {
                width: 80px;
                height: 80px;
                // vertical-align: middle;
                object-fit: contain;
              }
            }
          }
          .prev-next {
            .prev,
            .next {
              position: absolute;
              left: 0;
              top: 50%;
              display: block;
              width: 16px;
              height: 40px;
              background-color: #000000;
              transform: translateY(-50%);
              line-height: 40px;
              text-align: center;
              opacity: 0.2;
              color: #fff;
            }
            .next {
              left: auto;
              right: 0;
            }
          }
        }
      }
      // 商品信息右区域
      .info-right {
        width: 720px;
        height: 500px;
        padding-left: 50px;
        // 商品详情右侧顶部
        .base-info {
          margin-bottom: 20px;
          .button-text {
            padding: 6px 10px;
            background-color: #f54135;
            font-size: 12px;
          }
          .good-title {
            width: 680px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0 0 5px;
            color: #333;
            font-size: 18px;
            font-weight: bold;
          }
          .game-type {
            margin-bottom: 20px;
            font-size: 14px;
            .game-area {
              color: #999;
              margin-right: 12px;
            }
            .game-name {
              color: #333;
            }
          }
          .button-wrap {
            margin-bottom: 20px;
          }
          // 商品活动区域
          .good-active-info {
            padding: 10px;
            background-color: #f8f8f8;
            .item-info {
              height: 31.2px;
              line-height: 31.2px;
            }
            .title {
              margin-right: 12px;
              color: #999;
              font-size: 14px;
            }
            .text {
              color: #333;
              font-size: 14px;
            }
            .some-info {
              display: flex;
              justify-content: space-between;
            }
            .discounts {
              .text {
                color: #f54135;
              }
            }
            .server {
              .icon-img::before {
                content: "";
                display: inline-block;
                background-image: url("./images/zuanshi.png");
                width: 18px;
                height: 18px;
                vertical-align: middle;
                margin-right: 5px;
              }
            }
          }
        }
        // 价钱信息
        .money-info {
          display: flex;
          .money-item {
            width: 144px;
            height: 128px;
            background-image: url("./images/ia_100000024.png");
            background-repeat: no-repeat;
            padding-right: 6px;
            .money {
              height: 64px;
              line-height: 64px;
              text-align: center;
              color: #31affd;
              .symbol {
                font-size: 20px;
              }
              .money-number {
                font-size: 28px;
              }
            }
            .clock-cirle {
              height: 64px;
              font-size: 14px;
              text-align: center;
              .cycle,
              .clock {
                color: #333;
                height: 21.6px;
                line-height: 21.6px;
              }
              .clock {
                color: #999;
                span {
                  margin-left: 5px;
                }
              }
            }
            .clock-cirle-hover {
              display: none;
            }
          }
          .money-item:hover {
            background-image: url("./images/a321d23c1132.png");
            background-repeat: no-repeat;
            background-size: 144px 128px;
            .clock-cirle {
              display: none;
            }
            .clock-cirle-hover {
              display: block;
              position: relative;
              width: 144px;
              height: 64px;
              .svip-money {
                font-size: 18px;
                margin-left: 65px;
                margin-top: -5px;
                span {
                  font-size: 14px;
                }
              }
              .cycle-time {
                position: absolute;
                font-size: 16px;
                left: 50%;
                transform: translateX(-50%);
                bottom: 6px;
              }
            }
          }
        }
        // 温馨提示
        .warn {
          font-size: 12px;
          color: #999;
          padding-left: 5px;
          span:first-child {
            margin-right: 5px;
          }
        }
        // svip入口
        .svip {
          padding: 8px 0 11px;
          .svip-img {
            display: inline-block;
            width: 36px;
            height: 17px;
            background-image: url("./images/ia_100000025.png");
            background-size: 36px 17px;
            background-repeat: no-repeat;
            margin-right: 10px;
            vertical-align: middle;
          }
          .svip-content {
            font-size: 14px;
            color: #333333;
            margin-right: 10px;
            vertical-align: middle;
            span {
              color: #ddb773;
            }
          }
          .add-svip {
            font-size: 14px;
            font-style: normal;
            color: #3eaffd;
            cursor: pointer;
            vertical-align: middle;
            .add-svip-img {
              display: inline-block;
              width: 14px;
              height: 14px;
              background: url("./images/ia_100000026.svg") no-repeat center
                center;
              background-size: 14px;
              vertical-align: middle;
              margin-left: 3px;
            }
          }
        }
        // 立即租凭
        .elRent {
          border: none;
          width: 190px;
          height: 50px;
          font-size: 20px;
          background-color: #108ee9;
          margin-top: 20px;
        }
      }
      .inform-collect {
        display: flex;
        position: absolute;
        right: 30px;
        bottom: 30px;
        & > div {
          margin-left: 20px;
          color: #999;
          i {
            display: block;
            font-size: 21px;
            margin-bottom: 10px;
          }
          .el-icon-warning-outline {
            color: #999;
          }
          .el-icon-star-off {
            color: #e9e9e9;
          }
          i:hover {
            color: #3eaffd;
            & + p {
              color: #3eaffd;
            }
          }
        }
      }
    }
  }
  // 配置信息
  .configuration-info {
    width: 1160px;
    padding: 20px 20px 40px;
    margin: 20px auto;
    background-color: #fff;
    .tabWraped {
      height: 40px;
      display: flex;
      background-color: #f8f8f8;
      margin-bottom: 20px;
      h4 {
        padding: 8px 20px;
        font-size: 15px;
        font-weight: normal;
        color: #000000a6;
        margin-right: 0;
        border-right: 1px solid #e5e5e5;
        border-left: 1px solid #e5e5e5;
      }
    }
    .tabContent {
      padding: 20px 20px 40px;
      .tab-item {
        display: none;
        &.active {
          display: block;
        }
        .Con-item {
          font-size: 14px;
          color: rgb(102, 102, 102);
          margin-bottom: 20px;
          .item-title {
            font-weight: bold;
            margin-right: 5px;
          }
          .symbol {
            margin-right: 5px;
          }
        }
        .conItemWrap {
          .tab-detail-title {
            display: flex;
            font-size: 16px;
            line-height: 18px;
            .mask-title {
              width: 6px;
              height: 18px;
              background-color: #128de0;
              margin-right: 16px;
            }
          }
          .desc-info {
            padding: 20px;
            font-size: 14px;
            color: #666;
            line-height: 30px;
          }
          .game-pick-info {
            margin-top: 20px;
            height: 760px;
            background-color: #eee;
            img {
              width: 1120px;
              height: 760px;
              object-fit: contain;
            }
          }
        }
      }
    }
  }
}
</style>
