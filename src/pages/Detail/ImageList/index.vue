<template>
  <div class="swiper-container"
       ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
           v-for="(skuImg,index) in imageList"
           :key="index">
        <!--设置显示的轮播图数据,同时设置点击小图被选中高亮效果-->
        <img :src="skuImg.imgUrl"
             @click="changeCurrentIndex(index)"
             :class="currentIndex === index ? 'active' : ''" />
      </div>
    </div>
    <div class="swiper-button-next"
         @click="selectImg(1)">
      <div class="next">&gt;</div>
    </div>
    <div class="swiper-button-prev"
         @click="selectImg(-1)">
      <div class="prev">&lt;</div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: 'ImageList',
  data () {
    return {
      currentIndex: 0
    }
  },
  // props: ['imageList', 'getCurrentIndex'],
  props: ['imageList'],
  watch: {
    imageList: {
      handler () {
        if (!this.imageList || this.imageList.length === 0) return
        this.$nextTick(() => {
          new Swiper(this.$refs.swiper, {
            // loop: true, // 不能无限轮播，swiper的无限轮播是复制之前渲染后的图片节点，在放到后面，也就是之前默认选中的图片也会被选中。
            slidesPerView: 4, // 一次显示5项数据
            slidesPerGroup: 1, // 以1项为单位翻页
            // 分页器
            pagination: {
              el: '.swiper-pagination',
            },

            // 前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
        })
      },
      immediate: true, // 在初始显示时就立即执行一次, 默认是false(只有数据改变才立即执行)
    },
  },
  methods: {
    selectImg (num) {
      this.currentIndex += num
      // 触发自定义事件
      this.$emit('getCurrentIndex', this.currentIndex)
      // this.getCurrentIndex(this.currentIndex)
    },
    changeCurrentIndex (index) {
      this.currentIndex = index
      // 触发自定义事件
      this.$emit('getCurrentIndex', this.currentIndex)
      // this.getCurrentIndex(this.currentIndex)
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.swiper-container {
  width: 390px;
  height: 80px;
  margin-top: 20px;
  padding: 0 22px;
  box-sizing: border-box;
  .swiper-wrapper {
    .swiper-slide {
      width: 80px;
      height: 80px;
      margin-right: 3px;
      img {
        object-fit: contain;
        width: 80px;
        height: 80px;
        display: block;
        background-color: rgb(238, 238, 238);
        box-sizing: border-box;
        &.active {
          border: 2px solid #128de0;
          padding: 1px;
        }
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }
  .swiper-button-next,
  .swiper-button-prev {
    // box-sizing: border-box;
    width: 18px;
    height: 80px;
    z-index: 9;
    top: 0;
    margin-top: 0;
    background-color: #fff;
    color: #fff;
    div {
      position: absolute;
      width: 100%;
      height: 40px;
      opacity: 0.3;
      background-color: #000000;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      // background-color: red;
      // z-index: 90;
      &:hover {
        background-color: #3eaffd;
        opacity: 1;
      }
    }
  }
}
</style>