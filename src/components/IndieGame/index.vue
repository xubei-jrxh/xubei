<template>
  <div class="indieGame">
    <!-- 热销榜 -->
    <!-- 榜单切换 -->
    <img ref="screen" @mouseenter="handleEnterScr" class="screen" :src="hotGames.bigImg" />
    <div ref="hot" class="hot">
      <!-- 游戏图片 -->
      <div class="left">
        <img class="top" :src="hotGames.imgUrl" />
        <img
          v-if="hotGames.games"
          :src="hotGames.games[hotGameId-1].id === hotGameId ? hotGames.games[hotGameId-1].gameImg : hotGames.games[0].gameImg"
        />
      </div>
      <!-- 游戏列表 -->
      <div class="right">
        <div
          class="game"
          :id="item.id"
          @mouseenter="changeHotImg(item.id)"
          v-for="item in hotGames.games"
          :key="item.id"
          :class="item.id===hotGameId ? 'active':''"
        >
          <!-- 列表前的小三角 -->
          <div :class="item.id===hotGameId ? 'tip-active':'tip'"></div>
          <div class="l-game">
            <i>{{item.id}}</i>
            <div class="name">{{item.name}}</div>
            <div class="tag">
              <div v-for="(tag,index) in item.tag" :key="index">{{tag}}</div>
            </div>
          </div>
          <a href="javascript:;" class="play">一元试玩</a>
        </div>
      </div>
    </div>
    <img class="screenTwo" ref="screenTwo" @mouseenter="handleEnter" :src="newGames.bigImg" />
    <!-- 新游榜 -->
    <div ref="new" class="new">
      <!-- 游戏图片 -->
      <div class="left">
        <img class="top" :src="newGames.imgUrl" />
        <img
          v-if="newGames.games"
          :src="newGames.games[newGameId-1].id === newGameId ? newGames.games[newGameId-1].gameImg : newGames.games[0].gameImg"
        />
      </div>
      <!-- 游戏列表 -->
      <div class="right">
        <div
          class="game"
          @mouseenter="changeNewImg(item.id)"
          v-for="item in newGames.games"
          :key="item.id"
          :class="item.id===newGameId ? 'active' : ''"
        >
          <div :class="item.id===newGameId?'tip-active':'tip'"></div>
          <div class="l-game">
            <i>{{item.id}}</i>
            <div class="name">{{item.name}}</div>
            <div class="tag">
              <div v-for="(tag,index) in item.tag" :key="index">{{tag}}</div>
            </div>
          </div>
          <a href="javascript:;" class="play">一元试玩</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import request from '../../api/request'
export default {
  name: 'IndieGame',
  data () {
    return {
      hotGames: {},//热销榜游戏
      newGames: {},//新游榜游戏
      hotGameId: 1, //热门游戏ID
      newGameId: 1, //新游戏ID
    }
  },
  async mounted () {
    const res = await request.getIndieGame()
    this.hotGames = res[0]
    this.newGames = res[1]
  },
  methods: {
    //鼠标移入新游榜
    handleEnter () {
      this.$refs.screen.style.opacity = 1
      this.$refs.new.style.left = '406px';//修改新游菜单定位
      this.$refs.new.style.opacity = 1;
      this.$refs.hot.style.opacity = 0;
      this.$refs.screenTwo.style.left = '406px'
      this.$refs.screenTwo.style.opacity = 0//将新游榜导航隐藏
    },
    // 鼠标移入热销榜
    handleEnterScr () {
      this.$refs.screenTwo.style.opacity = 1
      this.$refs.screenTwo.style.left = '994px'
      this.$refs.new.style.opacity = 0;
      this.$refs.hot.style.opacity = 1;
      this.$refs.new.style.left = '994px'
      this.$refs.screen.style.opacity = 0
    },
    // 鼠标移入热门游戏列表
    changeHotImg (id) {
      this.hotGameId = id / 1
    },
    // 鼠标移入新游戏列表
    changeNewImg (id) {
      this.newGameId = id / 1
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
.active {
  background: #d8efff;
}
.indieGame {
  width: 1400px;
  height: 384px;
  margin: 50px auto;
  overflow-x: hidden;
  position: relative;
  .screen {
    margin-top: 6px;
    width: 406px;
    height: 378px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    opacity: 0;
    transition: all 1.5s;
  }
  .hot {
    margin-top: 6px;
    width: 994px;
    height: 378px;
    display: flex;
    transition: all 1.5s;
    .left {
      position: relative;
      .top {
        position: absolute;
        top: -6px;
        left: 0;
      }
    }
    .right {
      padding: 12px 20px;
      background: #fff;
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      .game {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 58px;
        border-bottom: 1px dashed #e5e5e5;
        .tip {
          display: none;
        }
        .tip-active {
          border: 10px solid #fff;
          border-top-color: rgba(209, 177, 130, 0.1);
          border-bottom-color: rgba(209, 177, 130, 0.1);
          border-left: none;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -30px;
        }
        .l-game {
          i {
            display: inline-block;
            width: 14px;
            height: 14px;
            margin: 0 10px;
            color: #fff;
            text-align: center;
            line-height: 14px;
            background: rgb(193, 193, 193);
          }
          .name {
            margin-right: 14px;
            font-size: 14px;
            line-height: 58px;
            display: inline-block;
          }
          .tag {
            display: inline-block;
            div {
              display: inline-block;
              width: 34px;
              height: 20px;
              background: white;
              border-radius: 5px;
              border: 1px solid #e5e5e5;
              margin-right: 8px;
              text-align: center;
              line-height: 20px;
              font-size: 12px;
            }
          }
        }
        .play {
          width: 88px;
          height: 32px;
          box-sizing: border-box;
          padding: 0.1px 15px 0;
          margin-top: 13px;
          border: 1px solid rgb(62, 175, 253);
          border-radius: 5px;
          text-align: center;
          line-height: 30px;
          color: #fff;
          cursor: pointer;
          font-size: 14px;
          background: rgb(62, 175, 253);
        }
        &:nth-child(1) .l-game i {
          background: rgb(255, 198, 56);
        }
        &:nth-child(2) .l-game i {
          background: rgb(187, 175, 212);
        }
        &:nth-child(3) .l-game i {
          background: rgb(233, 177, 128);
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
  .screenTwo {
    width: 406px;
    height: 378px;
    position: absolute;
    left: 994px;
    top: 0;
    z-index: 9999;
    transition: all 1.5s;
    margin-top: 6px;
  }
  .new {
    margin-top: 6px;
    position: absolute;
    top: 0;
    left: 994px;
    width: 994px;
    height: 378px;
    display: flex;
    transition: all 1.5s;
    opacity: 0;
    .left {
      position: relative;
      .top {
        position: absolute;
        top: -6px;
        left: 0;
      }
    }
    .right {
      padding: 12px 20px;
      background: #fff;
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      .game {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 58px;
        border-bottom: 1px dashed #e5e5e5;
        position: relative;
        .tip {
          display: none;
        }
        .tip-active {
          border: 10px solid #fff;
          border-top-color: rgba(209, 177, 130, 0.1);
          border-bottom-color: rgba(209, 177, 130, 0.1);
          border-left: none;
          position: absolute;
          display: block;
          top: 50%;
          transform: translateY(-50%);
          left: -30px;
        }
        .l-game {
          i {
            display: inline-block;
            width: 14px;
            height: 14px;
            margin: 0 10px;
            color: #fff;
            text-align: center;
            line-height: 14px;
            background: rgb(193, 193, 193);
          }
          .name {
            margin-right: 14px;
            font-size: 14px;
            line-height: 58px;
            display: inline-block;
          }
          .tag {
            display: inline-block;
            div {
              display: inline-block;
              padding: 0 5px;
              height: 20px;
              background: white;
              border-radius: 5px;
              border: 1px solid #e5e5e5;
              margin-right: 8px;
              text-align: center;
              line-height: 20px;
              font-size: 12px;
            }
          }
        }
        .play {
          width: 88px;
          height: 32px;
          box-sizing: border-box;
          padding: 0.1px 15px 0;
          margin-top: 13px;
          border: 1px solid rgb(62, 175, 253);
          border-radius: 5px;
          text-align: center;
          line-height: 30px;
          color: #fff;
          cursor: pointer;
          font-size: 14px;
          background: rgb(62, 175, 253);
        }
        &:nth-child(1) .l-game i {
          background: rgb(255, 198, 56);
        }
        &:nth-child(2) .l-game i {
          background: rgb(187, 175, 212);
        }
        &:nth-child(3) .l-game i {
          background: rgb(233, 177, 128);
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
</style>