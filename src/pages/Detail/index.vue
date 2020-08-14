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
          <a class="login" href="javascrip:;">登录</a>
          <a class="register" href="javascrip:;">注册</a>
          <a class="type" href="javascrip:;">个人中心</a>
          <a class="type" href="javascrip:;">帮助中心</a>
          <a class="type" href="javascrip:;">关于我们</a>
        </div>
      </div>
      <!-- 头部第二行 Logo区域 -->
      <div class="buttom">
        <div class="buttom-content">
          <!-- logo区域 -->
          <div class="logo">
            <img src="./images/ia_100000000.png" alt="">
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
            <img class="bigImg" src="./images/ia_100000009.jpg" alt="">
          </div>
          <!-- 缩略小图区域 -->
          <div class="swipper-small">
            <div class="inner-swipper">
              <div class="img-wrap">
                <img src="./images/ia_100000009.jpg" alt="">
              </div>
              <div class="img-wrap">
                <img src="./images/ia_100000009.jpg" alt="">
              </div>
                <div class="img-wrap">
                <img src="./images/ia_100000009.jpg" alt="">
              </div>
                <div class="img-wrap">
                <img src="./images/ia_100000009.jpg" alt="">
              </div>
            </div>
            <div class="prev-next">
              <a class="prev" href="javascript:;">&lt;</a>
              <a class="next" href="javascript:;">&gt;</a>
            </div>
          </div>
        </div>
        <div class="info-right">
          <el-tooltip class="good-title" effect="dark" content="《玛莎＋特斯拉双载具》蓝色玛莎拉帝*特斯拉珍珠白*粉装银河战甲*粉装守护骑士*浪漫波比*折纸暴龙/玲珑飞花＊精密机骇＊火舞潮人＊奇迹天团" placement="top">
            <p>《玛莎＋特斯拉双载具》蓝色玛莎拉帝*特斯拉珍珠白*粉装银河战甲*粉装守护骑士*浪漫波比*折纸暴龙/玲珑飞花＊精密机骇＊火舞潮人＊奇迹天团</p>
          </el-tooltip>
          <p class="game-type">
            <span class="game-area">游戏区服</span>
            <span class="game-name">和平精英</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Detail'
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .detail{
    a:hover{
      text-decoration: none;
      color: red
    }
    .header{
      .top{
        display: flex;
        justify-content: space-between;
        width: 1200px;
        height: 34px;
        line-height: 34px;
        margin: 0 auto;
        // background-color: yellowgreen;
        font-family: PingFangSC-Medium;
        font-size: 12px;
        p{
          color: #999999;
        }
        .loginList{
          color: #666;
          .login,
          .register{
            color: red;
            margin-left: 10px;
          }
          .type::before{
            content: "";
            border-right: 2px solid #e5e5e5;
            margin: 0 10px;
          }
        }
      }
      .buttom{
        height: 89px;
        border-top: 1px solid rgb(229, 229, 229);
        background-color: #fff;
        box-shadow:rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
        .buttom-content{
          display: flex;
          justify-content: space-between;
          width: 1200px;
          margin: 0 auto;
          .logo{
            width: 310px;
            height: 55px;
            margin-top: 17px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .navBar{
            display: flex;
            .nav-item{
              line-height: 89px;
              margin-left: 36px;
              font-size: 18px;
              color: #333;
            }
          }
        }
      }
    }
    .detailContent{
      width: 1200px;
      margin: 0 auto;
      .type-path{
        height: 35px;
        line-height: 35px;
        &>a + a::before{
          content: '>';
          padding: 0 8px;
          font-size: 14px;
        }
      }
      .good-info{
        height: 500px;
        background-color: #fff;
        padding: 20px;
        display: flex;
        .info-left{
          width: 390px;
          height: 500px;
          .bigImgWrap{
            width: 390px;
            height: 390px;
            background: rgb(238, 238, 238);
            line-height: 390px;
            .bigImg{
              width: 390px;
              vertical-align: middle;
            }
          }
          .swipper-small{
            width: 390px;
            height: 80px;
            padding: 15px 0;
            overflow: hidden;
            position: relative;
            .inner-swipper{
              width: 990px;
              height: 80px;
              line-height: 80px;
              padding-left: 20px;
              display: flex;
              .img-wrap{
                width: 80px;
                height: 80px;
                margin-right: 10px;
                background-color: rgb(238, 238, 238);
                img{
                  width: 80px;
                  vertical-align: middle;
                }
              }
            }
            .prev-next{
              .prev, .next{
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
              .next{
                left: auto;
                right: 0;
              }
            }
          }
        }
        .info-right{
          width: 720px;
          height: 500px;
          padding-left: 50px;
          .good-title{
            width: 680px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0 0 20px;
            color: #333;
            font-size: 18px;
            font-weight: bold;
            text-indent: 5px;
          }
        }
      }
    }
  }
</style>