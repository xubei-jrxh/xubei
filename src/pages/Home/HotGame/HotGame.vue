<template>
  <div class="hotGramContainer">
    <div class="bannerWrapper">
      <div class="hotGramSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in hotGameBannerList" :key="item.dataId">
            <img :src="item.properties.picUrl" alt />
          </div>
          <div class="swiper-pagination"></div>
        </div>
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
    };
  },
  name: "HotGame",
  mounted() {
    this.getHotGameBannerList("zhuzhan_index_mianfei");
  },
  methods: {
    async getHotGameBannerList(modId) {
      const { datas } = await request.getIndexDataList(modId);
      this.hotGameBannerList = datas;
      // console.log(this.hotGameBannerList);
    },
  },
  watch: {
    indexBannerList: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          // 轮播图
          new Swiper(".hotGramSwiper", {
            autoplay: true,
            loop: true, // 循环模式选项
            slidesPerView: 5,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
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
    position: absolute;
    left: 73px;
    top: 83px;
    height: 260px;
    padding-left: 5px;
    width: 1256px;
    overflow: hidden;
    .hotGramSwiper {
      padding: 0 10px;
      // width: 100%;
      .swiper-slide {
        width: 190px;
        // height: 200px;
        text-align: center;
        font-size: 18px;
        background: #fff;
        margin: 30px 14px 30px 0;
        box-shadow: 0 2px 4px 0 rgba(163, 163, 163, 0.5);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .swiper-slide-active,
      .swiper-slide-duplicate-active {
        width: 226px;
        height: 250px;
        box-shadow: 0px 0px 3px 1px #3eaffd;
        margin: 5px 14px 5px 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
