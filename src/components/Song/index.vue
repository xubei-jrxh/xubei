<template>
  <el-card class="song" :body-style="{ padding: '15px'}" shadow="never">
    <a href="javascript:;">
      <img @click="toShop(song.userId)" :src="song.logoUrl" />
    </a>
    <div class="coupon" v-if="song.hasCoupon">活动进行中</div>
    <div class="detail">
      <div class="title">{{song.shopName}}</div>
      <div class="songInfo">
        <span>店铺主营：</span>
        {{gameNames}}
      </div>
      <div class="songInfo">
        <span>店铺信誉：</span>
        <img v-for="(item,index) in levelArr" :key="index" :src="song.levelImg" />
      </div>
    </div>
  </el-card>
</template>
<script>
import getLevelImg from '../../utils/getLevelImg'
export default {
  name: 'Song',
  props: ['song'],
  data () {
    return {
      gameNames: '',//店铺主营
      levelArr: '',//信誉
    }
  },
  mounted () {
    if (this.song.mainGames) {
      this.song.mainGames.forEach(item =>
        this.gameNames += item.gameName + '/'
      )
    }
    const that = this
    this.levelArr = getLevelImg(that, this.song, this.levelArr)
  },
  methods: {
    //去店铺
    toShop (id) {
      const { href } = this.$router.resolve({
        path: '/shop',
        query: {
          sourceShop: id
        }
      })
      window.open(href, '_blank')
    }
  },
  computed: {


    // else {

    // }
    // return levelArr

  }
}
 </script>
<style lang="less" rel="stylesheet/less" scoped>
.song {
  width: 232px;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  margin: 0 0 16px 16px;
  position: relative;
  a {
    img {
      width: 200px;
      height: 200px;
    }
  }
  .coupon {
    position: absolute;
    width: 74px;
    height: 20px;
    top: 15px;
    right: 15px;
    line-height: 20px;
    text-align: center;
    background-color: #ff5137;
    border-radius: 4px 0 4px 4px;
    color: #fff;
  }
  .detail {
    margin-top: 14px;
    .title {
      font-size: 16px;
      height: 21px;
      line-height: 21px;
    }
    .songInfo {
      font-size: 12px;
      height: 21px;
      line-height: 21px;
      margin-top: 6px;
      white-space: nowrap;
      overflow: hidden;
      span {
        color: rgb(153, 153, 153);
      }
      img {
        vertical-align: text-bottom;
      }
    }
  }
}
</style>