<template>
  <div class="contentContainer">
    <div class="mine-nav">
      <div class="all">
        <a class="hotGrams" href="javascript:;">
          <img src="./images/hot_game.png" alt="" />
          <span>热门游戏</span>
          <i class="el-icon-arrow-right"></i>
        </a>
        <!-- 创建左边导航 -->
        <ul class="left-nav">
          <li>
            <a href="javascript:;">
              <span>绝地求生</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span>王者荣耀</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span>穿越火线</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span>英雄联盟</span>
            </a>
          </li>
          <li class="otherLi">
            <a href="javascript:;" class="other">
              <img src="./images/computerIcon.png" alt="" />
              <span>端游专区</span>
              <i class="el-icon-arrow-right"></i>
            </a>
          </li>
          <li class="otherLi">
            <a href="javascript:;" class="other">
              <img src="./images/phoneIcon.png" alt="" />
              <span>手游专区</span>
              <i class="el-icon-arrow-right"></i>
            </a>
          </li>
          <li class="otherLi">
            <a href="javascript:;" class="other">
              <img src="./images/steam.png" alt="" />
              <span>独立游戏专区</span>
              <i class="el-icon-arrow-right"></i>
            </a>
          </li>
          <li class="otherLi">
            <a href="javascript:;" class="other">
              <img src="./images/movie_icon.png" alt="" />
              <span>账号&其他</span>
              <i class="el-icon-arrow-right"></i>
            </a>
          </li>
          <li class="otherLi">
            <a href="javascript:;" class="other">
              <img src="./images/publishIcon.png" alt="" />
              <img src="./images/zhanghaofabu.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <a class="topNav" href="javascript:;">租号试玩</a>
      <a class="topNav" href="javascript:;">领券中心</a>
      <a class="topNav" href="javascript:;">优质店铺</a>
      <a class="topNav" href="javascript:;">美女聊天</a>
      <a class="topNav" href="javascript:;">分站加盟</a>
      <a class="topNav" href="javascript:;">APP下载</a>
    </div>
    <div class="bannerWrapper"></div>
    <div class="login"></div>
  </div>
</template>
<script>
export default {
  name: "Content",
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.contentContainer {
  width: 100%;
  height: 500px;
  background-color: #fff;
  .mine-nav {
    height: 50px;
    line-height: 50px;
    .all {
      //   width: 200px;
      float: left;
      .hotGrams {
        text-decoration: none;
        display: block;
        width: 200px;
        height: 100%;
        background-image: linear-gradient(to right, #69d2ff, #518cff);
        text-align: center;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
        // margin: 0;
        margin: 0 70px 0 0;
        span {
          margin: 0 25px;
        }
      }
      .left-nav {
        width: 200px;
        height: 370px;
        background: #fff;
        li {
          height: 34px;
          line-height: 34px;
          a {
            text-decoration: none;
            display: inline-block;
            height: 34px;
            line-height: 34px;
            width: 200px;
            font-size: 14px;
            color: #666;
            padding-left: 50px;
            box-sizing: border-box;
            &:hover {
              background: #1890ff1f;
            }
            &.other {
              height: 45px;
              line-height: 45px;
              font-size: 16px;
              padding: 0 20px;
              i {
                float: right;
                line-height: 45px;
                font-size: 18px;
                font-weight: bold;
              }
              img {
                padding-right: 10px;
              }
              &:last-child {
                img {
                  line-height: 45px;
                }
              }
            }
          }
          &.otherLi {
            margin-bottom: 10px;
          }
        }
      }
    }
    .topNav {
      float: left;
      text-decoration: none;
      display: inline-block;
      width: 72px;
      font-size: 18px;
      color: #333;
      margin-right: 70px;
      &:first-child {
        margin: 0 70px;
        // margin-left: 70px;
      }
      &:hover {
        color: #3eaffd;
      }
    }
  }
}
</style>
