<template>
  <div>
    <header>
      <div class="content">
        <a href="javascript:;" class="left">
          <img src="../assets/image/common/logoXubei.png" />
        </a>
        <div class="right">
          <el-input placeholder="搜索店铺名称" v-model="shopName" size="medium">
            <el-button class="btn" slot="append" icon="el-icon-search" @click="searchGood"></el-button>
          </el-input>
        </div>
      </div>
    </header>
    <main>
      <div class="page">
        返回首页 >
        <span>优质店铺</span>
      </div>
      <el-card :body-style="{padding:0}" class="box-card" shadow="never">
        <div class="item">
          <div class="title">
            <img src="../assets/image/qualityStore/store.png" />
            <span>店铺主营</span>
          </div>
          <div class="tags">
            <div class="tag">
              <div
                class="tag-item"
                :class="gameId==='' ? 'active' : ''"
                :id="null"
                @click="changeGame"
              >全部</div>
              <div
                class="tag-item"
                :class="game.gameId === gameId/1 ? 'active' : ''"
                :id="game.gameId"
                v-for="game in mainGames"
                :key="game.id"
                @click="changeGame"
              >{{game.gameName}}</div>
              <div class="el-icon-right"></div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="title">
            <img src="../assets/image/qualityStore/diamonds.png" />
            <span>店铺信誉</span>
          </div>
          <div class="groups" @change="changeLevel">
            <el-radio class="group" v-model="radio" label="null">
              <span>全部</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="AAA">
              <span>三金冠</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="AA">
              <span>二金冠</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="A">
              <span>一金冠</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="A1">
              <span>五银冠</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="A2">
              <span>四银冠</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="A3">
              <span>三银冠</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="A4">
              <span>二银冠</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="A5">
              <span>一银冠</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="B1">
              <span>五钻</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="B2">
              <span>四钻</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="B3">
              <span>三钻</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="B4">
              <span>二钻</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="B5">
              <span>一钻</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="C1">
              <span>五星</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="C2">
              <span>四星</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="C3">
              <span>三星</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="C4">
              <span>二星</span>
            </el-radio>
            <el-radio class="group" v-model="radio" label="C5">
              <span>一星</span>
            </el-radio>
          </div>
        </div>
        <div class="item">
          <div class="title">
            <img src="../assets/image/qualityStore/diamonds.png" />
            <span>店铺活动</span>
          </div>
          <div class="groups" @change="changeCoupon">
            <el-radio class="group" v-model="coupon" label>
              <span>全部</span>
            </el-radio>
            <el-radio class="group" v-model="coupon" label="1">
              <span>有</span>
            </el-radio>
            <el-radio class="group" v-model="coupon" label="0">
              <span>无</span>
            </el-radio>
          </div>
        </div>
      </el-card>
      <el-card :body-style="{padding:0}" class="box-card" shadow="never">
        <div class="top">
          <div class="sort active" @click="complex">综合排序</div>
          <i></i>
          <div class="sales" @click="sales">
            <span>销量</span>
            <div class="sales-info">
              <div class="el-icon-caret-top" :class="succOrderBy === 0 ? 'active' : ''"></div>
              <div class="el-icon-caret-bottom" :class="succOrderBy === 1 ? 'active' : ''"></div>
            </div>
          </div>
        </div>
        <div class="songs">
          <Song v-for="song in songList" :key="song.userId" :song="song"></Song>
        </div>
        <div class="footer">
          <div class="all">共{{totalRows}}条记录</div>
          <div class="block">
            <el-pagination
              background
              layout="prev, pager, next"
              :page-count="totalPages"
              @current-change="handleCurrentPage"
            ></el-pagination>
          </div>
        </div>
      </el-card>
    </main>
  </div>
</template>
<script>
import Song from '../components/Song'
import request from '../api/request'
export default {
  name: 'Goods',
  data () {
    return {
      radio: 'null',
      coupon: '',
      gameId: '',//游戏Id
      shopName: '',//搜索框输入内容
      songList: [],//商品列表
      mainGames: [], //店铺标签
      succOrderBy: '',//排序
      hasCoupon: null,//有无活动
      level: null,//信誉等级
      currentPage: 1,//当前页数
      totalRows: 1,//总记录数
      totalPages: 1//总页数
    };
  },
  async mounted () {
    this.getShopListSync()
    const res = await request.getMainGames()
    this.mainGames = res
  },
  methods: {
    //同步获取店铺列表
    async getShopListSync (pageIndex, pageSize, mainGameId, succOrderBy, levelName, isShowAggregate, hasCoupon, shopName) {
      const result = await request.getShopList(pageIndex, pageSize, mainGameId, succOrderBy, levelName, isShowAggregate, hasCoupon, shopName)
      this.songList = result.data
      this.totalPages = result.totalPages
      this.totalRows = result.totalRows
    },
    // 筛选信誉等级更新店铺列表
    changeLevel (e) {
      this.level = e.target.defaultValue
      this.getShopListSync(1, 20, this.gameId, this.succOrderBy, this.level, 1, this.hasCoupon, this.shopName)
    },
    // 筛选有无活动更新店铺列表
    changeCoupon (e) {
      this.hasCoupon = e.target.defaultValue
      this.getShopListSync(1, 20, this.gameId, this.succOrderBy, this.level, 1, this.hasCoupon, this.shopName)
    },
    // 根据游戏ID更新店铺列表
    changeGame (e) {
      this.gameId = e.target.id
      console.log(e.target.id)
      this.getShopListSync(1, 20, this.gameId, this.succOrderBy, this.level, 1, this.hasCoupon, this.shopName)
    },
    // 点击页数跳转
    handleCurrentPage (val) {
      this.currentPage = val
      this.getShopListSync(this.currentPage, 20, this.gameId, this.succOrderBy, this.level, 1, this.hasCoupon, this.shopName)
    },
    //搜索店铺
    searchGood () {
      this.getShopListSync(1, 20, this.gameId, this.succOrderBy, this.level, 1, this.hasCoupon, this.shopName)
      this.shopName = ''
    },
    // 综合排序
    complex () {
      this.getShopListSync()
      this.succOrderBy = ''
    },
    //销量排序
    sales () {
      if (this.succOrderBy !== 0) {
        this.succOrderBy = 0
      } else {
        this.succOrderBy = 1
      }
      this.getShopListSync(1, 20, this.gameId, this.succOrderBy, this.level, 1, this.hasCoupon, this.shopName)
    }

  },
  components: {
    Song
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
header {
  height: 98px;
  width: 100%;
  background-color: white;
  .content {
    display: flex;
    width: 1260px;
    height: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    .right {
      width: 390px;
      .btn {
        width: 47px;
        line-height: 2.5;
        padding: 0 15px;
        background: #3eaffd;
        border-color: #3eaffd;
        border-radius: 0 3px 3px 0;
        color: white;
      }
    }
  }
}
main {
  width: 1260px;
  height: 100%;
  margin: 0 auto;
  .active {
    color: #3eaffd;
  }
  .page {
    padding: 10px 0;
    color: rgba(0, 0, 0, 0.45);
    span {
      color: rgba(0, 0, 0, 0.65);
    }
  }
  .box-card {
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.65);
    .item {
      padding-right: 20px;
      display: flex;
      .title {
        width: 157.5px;
        line-height: 52px;
        text-align: center;
        font-size: 14px;
        padding-right: 25px;
        box-sizing: border-box;
        img {
          margin-right: 10px;
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
        }
      }

      .tags {
        width: 1102.5px;
        height: 56px;
        line-height: 56px;
        box-sizing: border-box;
        border-bottom: 1px solid #e5e5e5;
        cursor: pointer;
        .tag {
          position: relative;
          .tag-item {
            display: inline-block;
            font-size: 14px;
            margin-right: 20px;

            &:hover {
              color: #3eaffd;
            }
          }
          .el-icon-right {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            font-size: 25px;
          }
        }
      }
      .groups {
        width: 1102.5px;
        line-height: 56px;
        box-sizing: border-box;
        .group {
          margin-right: 8px;
          span {
            padding-right: 8px;
          }
        }
      }
    }
    .top {
      border-bottom: 1px solid #e5e5e5;
      width: 1224px;
      margin: 0 auto;
      height: 54px;
      display: flex;
      line-height: 54px;
      box-sizing: border-box;
      div {
        // height: 100%;
        text-align: center;
        box-sizing: border-box;
        font-size: 14px;
      }
      .sort {
        padding: 0 27px;
        width: 110px;
        position: relative;
      }
      i {
        position: relative;
        width: 1px;
        height: 12.59px;
        background: #e8e8e8;
        margin: 0 8px;
        top: 50%;
        transform: translateY(-50%);
      }
      .sales {
        padding: 0 27px;
        position: relative;
        width: 82px;
        .sales-info {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 10px;
          div {
            display: block;
            &:nth-child(1) {
              margin-bottom: -6px;
            }
          }
        }
      }
    }
    .songs {
      padding-top: 16px;
      display: inline-flex;
      flex-flow: row wrap;
    }
    .footer {
      width: 1224px;
      height: 74px;
      margin: 0 auto;
      line-height: 74px;
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #e5e5e5;
      .all {
        font-size: 14px;
      }
      .block {
        padding-top: 23px;
        box-sizing: border-box;
      }
    }
  }
}
</style>