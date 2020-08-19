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
              <el-badge value="最新">
                <a href="javascript:;">领券中心</a>
              </el-badge>

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
      <!-- 详细信息 -->
      <div class="good-info">
        <div class="info-left">
          <!-- 大图区域 -->
          <div class="bigImgWrap"
               @click="imgShow">
            <img v-if="isShowImg"
                 class="bigImg"
                 src="./images/loading1.jpg"
                 alt="">
            <img v-else
                 class="bigImg"
                 :src="detailList.imgs[currentImageIndex].imgUrl">
          </div>
          <!-- 缩略小图区域 -->
          <ImageList @getCurrentIndex="
                 getCurrentIndex"
                     ref="imgList"
                     :imageList="detailList.imgs"></ImageList>
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
            <div class="money-item"
                 :class="{'click-money': isShow === index}"
                 v-for="(money,index) in detailList.money"
                 :key="index"
                 @click="moneySelect(index)">
              <div class="money">
                <span class="symbol">￥</span>
                <span class="money-number">{{money.base_money}}</span>
              </div>
              <div class="clock-cirle">
                <div class="cycle">{{money.foregift_time}}</div>
                <div class="clock">
                  <span class="el-icon-time"></span>
                  <span>{{money.time_cycle}}</span>
                </div>
              </div>
              <div class="clock-cirle-hover">
                <p class="svip-money"><span>¥</span>{{money.vip_money}}</p>
                <p class="cycle-time">{{money.foregift_time}}</p>
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
        <!-- 图标 -->
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
      <!-- 选项卡切换 -->
      <div class="tabWraped">
        <h4 :class="{active: tabCss===1}"
            @click="tabChange(1)">账号信息</h4>
        <h4 :class="{active: tabCss===2}"
            @click="tabChange(2)">租凭须知</h4>
      </div>
      <div class="tabContent">
        <div class="tab-item"
             :class="{active: tabCss===1}">
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
            <Carousel class="game-pick-info"
                      :carouselList="detailList.imgs"></Carousel>
          </div>
        </div>
        <div class="tab-item"
             :class="{active: tabCss===2}">
          <div class="question">
            <p class="hello"><span style="color: red">亲爱的用户，您好！</span>虚贝希望您在享受卖家账号带给您游戏乐趣的同时能够知晓并遵守以下内容：</p>
            <p class="question-title">Q：关于租号后如何登陆游戏？</p>
            <p>A：虚贝平台精心为用户开发了虚贝百宝箱客户端，您租号后下载虚贝百宝箱客户端，登陆或者使用虚贝账号和订单编号即可使</p>
            <p>用客户端协助自动化登陆游戏，掉线无忧，高效安全！</p>
            <p class="question-title">Q：关于押金，有些出租商品设置了押金，这个押金扣除后怎么退还？</p>
            <p>A：某些出租商品设置需要缴纳押金才能租赁，您租号的押金会在48小时后返还到您的账户！</p>
          </div>
          <div class="agreement">
            <p>为了更多的玩家能够享受英雄联盟带来的游戏乐趣，我们期望您能遵守以下约定：</p>
            <p class="agreement-con"><span>1</span>禁止使用第三方外挂，禁止游戏中辱骂他人，禁止消极游戏和逃跑！</p>
            <p class="agreement-con"><span>2</span>租号前请详细查看卖家发布内容，知晓明确禁止内容：例如：标注为禁止打排位的不可以打排位！不允许使用金币和点卷等。</p>
            <p class="agreement-con"><span>3</span>严禁租赁高段位账号进行“演员”行为。</p>
            <p class="agreement-con"><span>4</span>如果用户违反以上禁止内容，卖家有权发起维权申请，客服根据实际情况进行仲裁，有押金的扣除押金补偿卖家！情节严重的统计相关信息追究责任，保留且提交不良信用记录！</p>
          </div>
        </div>
      </div>
    </div>
    <div class="masking"
         :class="isHideSwiper ? 'hide' : ''">
      <div class="masking-black">
        <div class="off"
             @click="hide">×</div>
        <Carousel class="maske-swiper"
                  :carouselList="detailList.imgs"></Carousel>
      </div>
    </div>
  </div>
</template>
<script>
import { reqDetail } from '@/api'
import ImageList from './ImageList'
export default {
  name: 'Detail',
  components: {
    ImageList
  },
  data () {
    return {
      goodsId: '',
      detailList: {},
      tabCss: 1,
      isShow: 0,
      currentImageIndex: 0,
      isShowImg: true,
      isHideSwiper: true
    }
  },
  async mounted () {
    // 获取路径地址的query参数
    this.goodsId = this.$route.query.goodsId
    // 发送请求
    const result = await reqDetail(this.goodsId)
    // console.log(result)
    if (result.code === 200) {
      this.detailList = result.data
      // console.log(this.detailList)
      this.isShowImg = false
    }
    // 绑定自定义事件
    // this.$refs.imgList.$on('getCurrentIndex', this.getCurrentIndex)
  },
  methods: {
    // 选中money
    moneySelect (selectMoney) {
      this.isShow = selectMoney
    },
    // 选项卡切换
    tabChange (tabCss) {
      this.tabCss = tabCss
    },
    // 自定义事件的回调函数
    getCurrentIndex (currentIndex) {
      this.currentImageIndex = currentIndex
      // console.log(currentIndex)
    },
    // 点击大图显示轮播
    imgShow () {
      this.isHideSwiper = false
    },
    // 点击按钮隐藏蒙版
    hide () {
      this.isHideSwiper = true
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
            .el-badge__content.is-fixed {
              top: 22px;
            }
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
        // 轮播图
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
          .click-money {
            background-image: url("./images/ia_100000021.png") !important;
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
      // height: 40px;
      display: flex;
      background-color: #f8f8f8;
      margin-bottom: 20px;
      h4 {
        height: 40px;
        padding: 8px 20px;
        font-size: 15px;
        font-weight: normal;
        color: #000000a6;
        margin-right: 0;
        border-right: 1px solid #e5e5e5;
        border-left: 1px solid #e5e5e5;
        border-top: 2px solid #f8f8f8;
        box-sizing: border-box;
        &:hover {
          color: #31affd;
        }
        &.active {
          border-color: #fff;
          background-color: #fff;
          border-top: 2px solid #3eaffd;
        }
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
        .question {
          width: 100%;
          height: 220px;
          background: rgba(18, 141, 224, 0.06);
          padding: 20px;
          line-height: 30px;
          margin-bottom: 8px;
          font-size: 16px;
          .hello {
            font-size: 14px;
          }
          .question-title {
            color: rgb(62, 175, 253);
            font-weight: bold;
          }
        }
        .agreement {
          width: 100%;
          padding: 20px;
          line-height: 30px;
          font-size: 14px;
          .agreement-con {
            span {
              display: inline-block;
              width: 16px;
              height: 16px;
              border-radius: 16px;
              background: rgba(62, 175, 253, 0.6);
              font-size: 12px;
              color: #ffffff;
              text-align: center;
              line-height: 16px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
  // 蒙版
  .masking {
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: auto;
    top: 0;
    left: 0;
    background-color: rgba(55, 55, 55, 0.6);
    z-index: 999;
    padding-top: 40px;
    &.hide {
      display: none;
    }
    .masking-black {
      width: 1110px;
      height: 636px;
      background-color: #000;
      margin: 0 auto;
      padding: 16px 0;
      box-sizing: border-box;
      position: relative;
      .off {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        position: absolute;
        right: -10px;
        top: -10px;
        background-color: #31affd;
        font-size: 22px;
        text-align: center;
        line-height: 25px;
        color: #fff;
        cursor: pointer;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
      }
      .maske-swiper {
        width: 1078px;
        height: 600px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
}
</style>
