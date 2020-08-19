<template>
  <div class="contentContainer">
    <div class="conContent">
      <!-- 导航 -->
      <div class="mine-nav">
        <div class="all">
          <a
            class="hotGrams"
            href="javascript:;"
            @mouseenter="showTopPopup(1)"
            @mouseleave="hiddenTopPopup"
          >
            <img src="./images/hot_game.png" alt />
            <span>热门游戏</span>
            <i class="el-icon-arrow-right"></i>

            <!-- 弹出层 -->
            <div class="topPopup" ref="topPopup">
              <ul>
                <li class="sortItem" v-for="item in hotGameList" :key="item.id">{{item.game}}</li>
              </ul>
            </div>
          </a>

          <div class="leftNav">
            <!-- 左侧导航上部分 -->
            <ul class="leftNavTop">
              <li
                class="gameItem"
                v-for="item in leftNavGameList"
                :key="item._id"
                @mouseenter="showLeftPopup(item.id)"
                @mouseleave="hiddenLeftPopup"
              >
                <a href="javascript:;">{{item.name}}</a>
              </li>
              <!-- 弹出层 -->
              <div class="leftPopup" ref="leftTopPopup">
                <ul>
                  <li v-for="sort in gameSortList" :key="sort.id">
                    <span class="sortName">{{sort.gameName}}</span>
                    <br />
                    <div
                      class="sortItem"
                      v-for="game in sort.children"
                      :key="game.id"
                    >{{game.gameName}}</div>
                  </li>
                </ul>
              </div>
            </ul>

            <!-- 创建左边导航下部分 -->
            <ul class="leftNavBottom">
              <li
                class="sortItem"
                v-for="item in leftNavSortList"
                :key="item.id"
                @mouseenter="showLeftPopup(null,item.label,0)"
                @mouseleave="hiddenLeftPopup"
              >
                <img class="iconImg" :src="item.iconUrl" v-show="item.iconUrl" alt />
                <img class="iconImg" src="./images/computerIcon.png" v-show="item.iconUrl" alt />
                <a href="javascript:;">{{item.sort}}</a>
                <i class="el-icon-arrow-right"></i>
              </li>
              <!-- 弹出层 -->
              <div class="leftPopup leftSong" ref="leftBotPopup">
                <ul class="song">
                  <li v-for="game in handOrTourList" :key="game.id" class="sortItem">{{game.game}}</li>
                </ul>
              </div>
              <li class="release">
                <a href="javascript:;">
                  <img class="publishIcon" src="./images/publishIcon.png" alt />
                  <img src="./images/zhanghaofabu.png" alt />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a class="topNav rent" href="javascript:;">租号试玩</a>
        <a class="topNav" href="javascript:;">领券中心</a>
        <a class="topNav" href="javascript:;">优质店铺</a>
        <a class="topNav" href="javascript:;">美女聊天</a>
        <a class="topNav" href="javascript:;">分站加盟</a>
        <a class="topNav" href="javascript:;">APP下载</a>
      </div>
      <!-- 轮播图 -->
      <div class="bannerWrapper">
        <div class="swiper-container" v-if="indexBannerList">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="banner in indexBannerList" :key="banner.dataId">
              <img :src="banner.properties.picUrl" alt />
            </div>
          </div>
          <div class="bannerNav">
            <span v-for="item in indexBannerList" :key="item.dataId">{{item.properties.tab}}</span>
          </div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>

        <img class="bg" src="./images/bg.png" alt />
      </div>
      <!-- 登录注册 -->
      <div class="signUp">
        <div class="welcomeX">
          <img src="./images/loginIogo.png" />
          <span>Hi,欢迎来到虚贝!</span>
        </div>
        <div class="loginOrRes">
          <el-button plain class="btn">注册</el-button>
          <el-button type="primary" class="btn">登录</el-button>
        </div>
        <div class="news">
          <el-tabs v-model="activeName" stretch>
            <el-tab-pane label="网站公告" name="first">
              <p v-for="item in announcementList" :key="item.dataId">{{item.properties.name}}</p>
            </el-tab-pane>
            <el-tab-pane label="最新活动" name="second">
              <p v-for="item in activeList" :key="item.dataId">{{item.properties.name}}</p>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../../api/request";
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: "Content",
  data() {
    return {
      activeName: "first",
      // 左边导航游戏列表数据
      leftNavGameList: [
        { _id: 1, name: "绝地求生" },
        { _id: 2, name: "王者荣耀" },
        { _id: 3, name: "穿越火线", id: 302 },
        { _id: 4, name: "英雄联盟", id: 245 },
      ],
      // 左边导航种类列表数据
      leftNavSortList: [
        {
          id: 5,
          sort: "端游专区",
          iconUrl: "./images/computerIcon.png",
          label: "端游",
        },
        {
          id: 6,
          sort: "手游专区",
          iconUrl: "./images/phoneIcon.png",
          label: "手游",
        },
        { id: 7, sort: "独立游戏专区", iconUrl: "./images/steam.png" },
        { id: 8, sort: "账号&其他", iconUrl: "./images/movie_icon.png" },
      ],
      hotGameList: [],
      // 游戏分类列表
      gameSortList: [],
      // 端游手游
      handOrTourList: [],
      // 主屏轮播图数据
      indexBannerList: [],
      // 公告
      announcementList: [],
      // 活动
      activeList: [],
      //图片
      bgImg: "",
    };
  },
  mounted() {
    this.getIndexDataList("zhuzhan_index_banner");
    this.getIndexDataList("zhuzhan_index_gonggao1");
    this.getIndexDataList("zhuzhan_home_gonggao2");
  },
  methods: {
    // 热门游戏弹出层显示
    async showTopPopup(isHot) {
      // this.isShowPopup(topPopup);
      this.$refs.topPopup.style.width = "922px";
      this.$refs.topPopup.style.border = "1px solid #3eaffd";
      const res = await request.getIndexGame({ isHot });
      this.hotGameList = res;
    },
    // 热门游戏弹出层隐藏
    hiddenTopPopup() {
      this.$refs.topPopup.style.width = 0;
      this.$refs.topPopup.style.border = "none";
    },
    // 左侧导航弹出层显示
    async showLeftPopup(id, label, isHot) {
      if (id) {
        this.$refs.leftTopPopup.style.width = "922px";
        this.$refs.leftTopPopup.style.border = "1px solid #3eaffd";
        const res = await request.findGameAreaById(id);
        this.gameSortList = res.children;
      }
      if (label) {
        this.$refs.leftBotPopup.style.width = "922px";
        this.$refs.leftBotPopup.style.border = "1px solid #3eaffd";
        const data = await request.getIndexGame({ label, isHot });
        this.handOrTourList = data.splice(0, 50);
      }
    },
    // 左侧导航弹出层隐藏
    hiddenLeftPopup() {
      this.$refs.leftTopPopup.style.width = 0;
      this.$refs.leftTopPopup.style.border = "none";
      this.$refs.leftBotPopup.style.width = 0;
      this.$refs.leftBotPopup.style.border = "none";
    },
    async getIndexDataList(modId) {
      // 获取首屏轮播图数据
      if (modId === "zhuzhan_index_banner") {
        const { datas } = await request.getIndexDataList(modId);
        let res = [];
        for (let i = 0; i < datas.length; i++) {
          if (datas[i].properties.tab) {
            res.push(datas[i]);
          }
        }
        this.indexBannerList = res;
      }
      // 公告数据
      if (modId === "zhuzhan_index_gonggao1") {
        const { datas } = await request.getIndexDataList(modId);
        this.announcementList = datas;
      }
      // 活动数据
      if (modId === "zhuzhan_home_gonggao2") {
        const { datas } = await request.getIndexDataList(modId);
        this.activeList = datas;
      }
    },
    // 封装一个方法来改变弹出层的显示隐藏
    // isShowPopup(popup) {
    //   this.$refs.popup.style.width = "922px";
    //   this.$refs.popup.style.border = "1px solid #3eaffd";
    // },
  },
  watch: {
    indexBannerList: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          // 轮播图
          new Swiper(".swiper-container", {
            autoplay: true,
            loop: true, // 循环模式选项
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
a {
  text-decoration: none;
}
.contentContainer {
  width: 100%;
  .conContent {
    position: relative;
    width: 1400px;
    background-color: #fff;
    .mine-nav {
      height: 50px;
      line-height: 50px;
      .all {
        width: 200px;
        position: relative;
        float: left;
        z-index: 9;
        box-sizing: border-box;
        a {
          .topPopup {
            position: absolute;
            left: 200px;
            top: 0;
            width: 0;
            overflow: auto;
            height: 421px;
            background: #fff;
            border: none;
            font-weight: normal;
            box-sizing: border-box;
            z-index: 12;
            transition: all 0.3s;
            ul {
              margin: 10px 20px;
              .sortItem {
                display: inline-block;
                height: 26px;
                line-height: 26px;
                padding: 0px 6px;
                border-radius: 4px;
                border: 1px solid #3eaffd;
                font-size: 14px;
                color: #3eaffd;
                margin-right: 20px;
                &:hover {
                  background: #3eaffd;
                  color: #fff;
                }
              }
            }
          }
        }
        .hotGrams {
          text-decoration: none;
          display: block;
          width: 200px;
          height: 100%;
          background-image: linear-gradient(to right, #69d2ff, #518cff);
          // text-align: center;
          color: #fff;
          font-weight: bold;
          font-size: 18px;
          padding-left: 20px;
          box-sizing: border-box;
          // margin: 0;
          margin: 0 70px 0 0;
          span {
            box-sizing: border-box;
            margin: 0 25px 0 10px;
          }
        }
        .leftNav {
          position: relative;
          width: 200px;
          height: 370px;
          background: #fff;
          .leftNavTop {
            width: 100%;
            .gameItem {
              height: 34px;
              line-height: 34px;
              padding-left: 50px;
              box-sizing: border-box;
              a {
                display: inline-block;
                width: 100%;
                height: 100%;
                font-size: 14px;
                color: #666;
              }
              &:hover {
                background: #1890ff1f;
                color: #3eaffd;
              }
            }
          }
          .leftNavBottom {
            width: 100%;
            .sortItem {
              height: 45px;
              line-height: 45px;
              padding-left: 50px;
              box-sizing: border-box;
              position: relative;
              .iconImg {
                position: absolute;
                left: 22px;
                top: 15px;
              }
              a {
                display: inline-block;
                width: 100%;
                height: 100%;
                font-size: 16px;
                color: #333;
              }
              .el-icon-arrow-right {
                color: #333;
                position: absolute;
                right: 20px;
                top: 16px;
                font-weight: bold;
              }
              &:hover {
                background: #1890ff1f;
              }
            }
            .release {
              height: 45px;
              padding-left: 18px;
              .publishIcon {
                margin-right: 8px;
              }
              &:hover {
                background: #1890ff1f;
                color: #3eaffd;
              }
            }
          }
          .leftPopup {
            position: absolute;
            left: 200px;
            top: 0;
            width: 0;
            height: 370px;
            background: #fff;
            border: none;
            font-weight: normal;
            box-sizing: border-box;
            overflow: hidden;
            z-index: 12;
            transition: all 0.3s;
            // scrollbar-arrow-color: #000000;

            // scrollbar-face-color: #00ff99;

            // scrollbar-highlight-color: #999933;

            // scrollbar-shadow-color: #666666;

            // scrollbar-track-color: #cccc66;
            ul {
              margin: 10px 20px;
              overflow: auto;
              .sortName {
                // position: relative;
                display: inline-block;
                // width: 60px;
                text-align: center;
                height: 26px;
                line-height: 26px;
                padding: 0px 6px;
                color: #666;
                background: #fff;
                border: 1px solid #eaeaea;
                border-radius: 4px;
                &:hover {
                  color: #fff;
                  background: #999;
                  border: 1px solid #999;
                }
              }
              .sortItem {
                display: inline-block;
                height: 26px;
                line-height: 26px;
                padding: 0px 6px;
                border-radius: 4px;
                border: 1px solid #3eaffd;
                font-size: 14px;
                color: #3eaffd;
                margin-right: 20px;
                &:hover {
                  background: #3eaffd;
                  color: #fff;
                }
              }
              // .leftSong .song::-webkit-scrollbar {
              //   width: 5px;
              //   height: 10px;
              // }
              /* 设置水平滚动条的高度，垂直滚动的宽度 */
              // .leftSong .song::-webkit-scrollbar-thumb {
              //   -webkit-box-shadow: inset 0 0 5px agba(0, 0, 0, 0.5);
              //   /* 设置滚动条阴影 */
              //   background: rgba(0, 0, 0, 0.1);
              //   border-radius: 5px;
              // }
              /* 设置滚动条里面的滑块样式 */
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
      .rent {
        margin-left: 70px;
      }
    }
    .bannerWrapper {
      position: relative;
      width: 898px;
      height: 358px;
      padding: 12px 12px 0;
      margin-left: 200px;
      box-sizing: border-box;
      .swiper-container {
        position: absolute;
        top: 10;
        width: 100%;
        height: 100%;
        .bannerNav {
          display: flex;
          width: 898px;
          height: 36px;
          background: rgba(0, 0, 0, 0.4);
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: 1;
          box-sizing: border-box;
          justify-content: space-between;
          align-items: center;
          .tabActive {
            color: #fff;
            background: rgba(0, 0, 0, 0.45);
          }
          span {
            // display: inline-block;
            flex: 1;
            text-align: center;
            line-height: 36px;
            color: #ccc;
            padding: 0 10px;
            cursor: pointer;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #fff;
          font-size: 12px;
          width: 34px;
          height: 60px;
          background: rgba(0, 0, 0, 0.3);
        }
        .swiper-button-prev {
          left: 0;
        }
        .swiper-button-next {
          right: 0;
        }
      }
    }

    .bg {
      position: absolute;
      top: 0px;
      left: -300px;
    }
    .signUp {
      position: absolute;
      top: 60px;
      right: 0;
      width: 278px;
      height: 358px;
      background: #fff;
      box-sizing: border-box;
      padding: 0 24px;
      .welcomeX {
        width: 218px;
        height: 60px;
        line-height: 60px;
        margin: 0 auto;
        font-size: 14px;
        color: #666666;
        text-align: center;
        img {
          border: 2px solid #ffffff;
          width: 30px;
          height: 30px;
          border-radius: 18px;
          box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
          vertical-align: middle;
          margin-right: 10px;
        }
      }
      .loginOrRes {
        display: flex;
        justify-content: space-around;
        width: 230px;
        height: 30px;
        margin: 0 auto;
        .btn {
          height: 30px;
          line-height: 30px;
          width: 100px;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          // vertical-align: top;
        }
      }
      .news {
        color: #666;
        margin-top: 5px;
        /deep/ .el-tabs__header {
          margin: 0;
        }
        p {
          width: 230px;
          height: 35px;
          line-height: 35px;
        }
      }
    }
  }
}
</style>
