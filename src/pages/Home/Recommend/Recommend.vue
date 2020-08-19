<template>
  <div class="recommendContainer">
    <div class="recTitle">
      <span>商品推荐</span>
    </div>
    <div class="recContent">
      <div class="hotGoods">
        <i class="el-icon-sold-out"></i>
        <span>热门商品</span>
      </div>
      <el-tabs v-model="activeName">
        <el-tab-pane
          :label="tabItem.typeName"
          :name="tabItem.typeName"
          v-for="tabItem in recommendTypeList"
          :key="tabItem.id"
        >
          <div class="goodItems">
            <ul class="itemList">
              <li v-for="item in tabItem.recList" :key="item.id">
                <div class="recommendLogo">店主自荐</div>
                <div class="goodsHeader">
                  <a href="javascript:;">
                    <img :src="item.picUrl" alt="小白出租的租号店铺" />
                  </a>
                  <div class="goodsTitle">
                    <div class="text">
                      <span>{{item.bizTarget.shopName}}</span>
                    </div>
                    <div class="antCol">
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                    </div>
                  </div>
                </div>
                <div class="goodsFooter">
                  <span
                    class="footerTop"
                    v-if="item.bizTarget.goodsDto"
                  >{{item.bizTarget.goodsDto.goodsTitle}}</span>
                  <span class="footerTop" v-else>无</span>
                  <div class="footerBottom">
                    <div
                      class="price"
                      v-if="item.bizTarget.goodsDto"
                    >{{item.bizTarget.goodsDto.leasePrice}}元/小时</div>
                    <div class="price" v-else>--元/小时</div>
                    <a href="javascript:;" class="recommendAllGoods">
                      <i class="el-icon-house"></i>
                      店铺全部商品&gt;
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import request from "../../../api/request";
export default {
  name: "Recommend",
  data() {
    return {
      activeName: "综合",
      recommendTypeList: [],
    };
  },
  mounted() {
    this.getRecommendTypeList();
  },
  methods: {
    async getRecommendTypeList() {
      const res = await request.getRecommendTypeList();
      this.recommendTypeList = res;
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.recommendContainer {
  width: 100%;
  padding-top: 3px;
  background: #f8f8f8;
  .recTitle {
    font-size: 22px;
    font-weight: bold;
    color: #333;
    background: url(./images/goodsIcon.png) no-repeat;
    padding-left: 34px;
    height: 33px;
  }
  .recContent {
    // width: 100%;
    // height: 500px;
    width: 1398px;
    background-color: #fff;
    // box-sizing: border-box;
    padding-top: 20px;
    border: 1px solid #e5e5e5;
    box-shadow: 0 2px 4px 0 rgba(163, 163, 163, 0.5);
    position: relative;
    margin: 20px 0;
    .hotGoods {
      width: 150px;
      box-sizing: border-box;
      position: absolute;
      top: 30px;
      left: 20px;
      i {
        color: #3eaffd;
        margin-right: 5px;
      }
      span {
        font-size: 20px;
        color: #333;
      }
    }
    /deep/ .el-tabs__header {
      margin-left: 150px;
      /deep/ .el-tabs__item {
        &.is-active {
          font-weight: bold;
        }
      }
      /deep/ .el-tabs__nav-wrap::after {
        width: 50%;
        background: #fff;
        /deep/ &.el-tabs__active-bar {
          background: #3eaffd;
        }
      }
    }
    /deep/ .el-tab-pane {
      // float: left;
      height: 488px;
      width: 1398px;
      box-sizing: border-box;
      margin: 5px 20px 20px;
      position: relative;
      transition: all 0.3s;
      box-sizing: border-box;
      .goodItems {
        display: flex;
        height: 488px;
        width: 1398px;
        box-sizing: border-box;
        .itemList {
          width: 100%;
          margin-top: 5px;
          li {
            float: left;
            position: relative;
            width: 240px;
            height: 224px;
            margin-right: 20px;
            margin-bottom: 20px;
            position: relative;
            transition: all 0.3s;
            border: 1px solid #e5e5e5;
            .recommendLogo {
              position: absolute;
              top: 0;
              left: 0;
              width: 86px;
              height: 34px;
              text-align: center;
              line-height: 34px;
              font-size: 16px;
              font-weight: bold;
              color: #ffffff;
              background: url(./images/arrow_icon.png) no-repeat;
            }
            .goodsHeader {
              a {
                img {
                  width: 240px;
                  height: 140px;
                }
              }
              .goodsTitle {
                display: flex;
                position: absolute;
                bottom: 85px;
                left: 0;
                width: 240px;
                height: 30px;
                font-size: 14px;
                color: #ffffff;
                line-height: 30px;
                padding: 0px 14px;
                box-sizing: border-box;
                box-sizing: border-box;
                justify-content: space-between;
                .el-icon-star-on {
                  color: goldenrod;
                }
              }
            }
            .goodsFooter {
              width: 240px;
              height: 80px;
              border-top: none;
              padding: 10px 14px 0;
              box-sizing: border-box;
              font-size: 14px;
              color: #333;
              // border: 1px solid #e5e5e5;
              border-top: none;
              .footerTop {
                display: inline-block;
                width: 210px;
                height: 40px;
                line-height: 20px;
                // line-height: 1.5;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: pre-wrap;
              }
              .footerBottom {
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                margin-top: 6px;
                color: #333;
                .recommendAllGoods {
                  text-decoration: none;
                  color: #333;
                  .el-icon-house {
                    color: #3eaffd;
                  }
                }
              }
            }
            &:hover {
              transform: scale(1.05);
              box-shadow: 0px 0px 2px 1px #3eaffd;
            }
            &:nth-child(1) {
              float: left;
              height: 468px;
              width: 316px;
              margin-right: 20px;
              position: relative;
              transition: all 0.3s;
              border: 1px solid #e5e5e5;
              .recommendLogo {
                position: absolute;
                top: 0;
                left: 0;
                width: 86px;
                height: 34px;
                text-align: center;
                line-height: 34px;
                font-size: 16px;
                font-weight: bold;
                color: #ffffff;
                background: url(./images/arrow_icon.png) no-repeat;
              }
              .goodsHeader {
                a {
                  img {
                    width: 316px;
                    height: 388px;
                  }
                }
                .goodsTitle {
                  position: absolute;
                  bottom: 80px;
                  left: 0;
                  width: 316px;
                  height: 30px;
                  font-size: 14px;
                  color: #ffffff;
                  line-height: 30px;
                  padding: 0px 14px;
                  box-sizing: border-box;
                  .antRow {
                    display: flex;
                    box-sizing: border-box;
                    justify-content: space-between;
                    i {
                      color: goldenrod;
                    }
                  }
                }
              }
              .goodsFooter {
                width: 316px;
                height: 88px;
                border: none;
                padding: 10px 14px 0;
                box-sizing: border-box;
                // position: relative;
                font-size: 14px;
                color: #333;
                .footerTop {
                  display: inline-block;
                  width: 286px;
                  height: 40px;
                  line-height: 20px;
                  // line-height: 1.5;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: pre-wrap;
                }
                .footerBottom {
                  display: flex;
                  justify-content: space-between;
                  font-size: 12px;
                  margin-top: 6px;
                  color: #333;
                  // padding-bottom: 2px;
                  .recommendAllGoods {
                    text-decoration: none;
                    color: #333;
                    .el-icon-house {
                      color: #3eaffd;
                    }
                  }
                }
              }
              &:hover {
                box-shadow: 0px 0px 2px 1px #3eaffd;
                transform: scale(1);
                // border: 1px solid #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
