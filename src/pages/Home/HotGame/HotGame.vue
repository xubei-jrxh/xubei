<template>
  <div class="hotGramContainer">
    <div class="bannerWrapper">
      <div class="hotGramSwiper">
        <div class="swiper-wrapper">
          <div
            @mouseenter="showMask(item.dataId)"
            @mouseleave="hiddenMask"
            class="swiper-slide"
            v-for="item in hotGameBannerList"
            :key="item.dataId"
          >
            <img :src="item.properties.picUrl" alt />
            <div class="mask" ref="mask" :class="isShowId===item.dataId?'active':''">
              <el-button size="small" type="primary">立即试玩</el-button>
            </div>
            <div
              class="gameName"
              ref="gameName"
              :class="isShowId===item.dataId?'nameActive':''"
            >{{item.properties.name}}</div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入request
import request from "../../../api/request";
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      // 热门游戏轮播图数据
      hotGameBannerList: [],
      isShowId: 0,
    };
  },
  name: "HotGame",
  mounted() {
    this.getHotGameBannerList("zhuzhan_index_mianfei");
  },
  methods: {
    // 获取热门游戏轮播图数据
    async getHotGameBannerList(modId) {
      const { datas } = await request.getIndexDataList(modId);
      this.hotGameBannerList = datas;
      // console.log(this.hotGameBannerList);
    },
    // 显示遮罩
    showMask(id) {
      this.isShowId = id;
      // console.log(this.isShowId, id);
    },
    // 隐藏遮罩
    hiddenMask() {
      this.isShowId = 0;
    },
  },
  watch: {
    hotGameBannerList: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          // 轮播图
          new Swiper(".hotGramSwiper", {
            slidesPerView: "auto",
            autoplay: true,
            loop: true, // 循环模式选项
            slidesPerView: 5,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
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
.hotGramContainer {
  position: relative;
  height: 376px;
  width: 100%;
  background: #f8f8f8 url(./images/free_play.png) no-repeat;
  background-size: 258px 43px;
  background-position: 8px 23px;
  overflow: hidden;
  .bannerWrapper {
    // position: absolute;
    margin-left: 73px;
    margin-top: 83px;
    height: 260px;
    width: 1256px;
    padding-left: 5px;
    overflow: hidden;
    .hotGramSwiper {
      padding: 0 10px;
      // width: 100%;
      .swiper-slide {
        position: relative;
        width: 190px;
        height: 200px;
        font-size: 18px;
        background: #fff;
        margin: 30px 14px 30px 0;
        box-shadow: 0 2px 4px 0 rgba(163, 163, 163, 0.5);
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
        .mask {
          position: absolute;
          top: 0;
          left: 0;
          height: 0;
          width: 100%;
          overflow: hidden;
          transition: all 0.5s ease 0s;
          /deep/ .el-button {
            position: absolute;
            width: 88px;
            height: 32px;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            margin: auto;
          }
          &.active {
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, 0.5);
          }
        }
        .gameName {
          position: absolute;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          font-size: 16px;
          color: #fff;
          text-align: center;
          width: 100%;
          height: 40px;
          line-height: 40px;
          transition: all 0.5s ease 0s;
          &.nameActive {
            height: 0;
          }
        }
      }
      .swiper-slide-active {
        width: 226px;
        height: 250px;
        box-shadow: 0px 0px 3px 1px #3eaffd;
        margin: 5px 14px 5px 0;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .swiper-button-prev {
        position: absolute;
        top: 220px;
        left: 10px;
        width: 32px;
        height: 32px;
        border: 2px solid #d3d3d3;
        border-radius: 50%;
        &:after {
          font-size: 20px;
          font-weight: bold;
          color: #d3d3d3;
        }
        &:hover {
          border: 2px solid #3eaffd;
          &:after {
            color: #3eaffd;
          }
        }
      }
      .swiper-button-next {
        position: absolute;
        top: 220px;
        right: 10px;
        width: 32px;
        height: 32px;
        border: 2px solid #d3d3d3;
        border-radius: 50%;
        &:after {
          font-size: 20px;
          font-weight: bold;
          color: #d3d3d3;
        }
        &:hover {
          border: 2px solid #3eaffd;
          &:after {
            color: #3eaffd;
          }
        }
      }
    }
  }
}
</style>
