<template>
  <div class="activityContainer">
    <div class="activeContent">
      <div class="activeTitle">
        <img src="./images/activityIcon.png" alt />
        <span>活动中心</span>
      </div>
      <div class="activeDetail">
        <ul class="actives">
          <li class="detailItem" v-for="active in activeList" :key="active.dataId">
            <img :src="active.properties.url" alt />
            <div class="desc">
              <h3>{{active.properties.title}}</h3>
              <p class="activeTime">
                活动时间：
                <span>{{active.properties.time}}</span>
              </p>
              <p class="detail">{{active.properties.remark}}</p>
            </div>
          </li>
          <!-- <li class="detailItem">
            <img src="./images/activeDetail2.png" alt />
            <div class="desc">
              <h3>移动端极品账号一元租</h3>
              <p class="activeTime">
                活动时间：
                <span>2018-10-10 ~ 2019.03.10</span>
              </p>
              <p class="detail">虚贝app 一元即可体验绝地求生，CF，LOL极品账号</p>
            </div>
          </li>
          <li class="detailItem">
            <img src="./images/activeDetail3.png" alt />
            <div class="desc">
              <h3>移动端极品账号一元租</h3>
              <p class="activeTime">
                活动时间：
                <span>2018-10-10 ~ 2019.03.10</span>
              </p>
              <p class="detail">虚贝app 一元即可体验绝地求生，CF，LOL极品账号</p>
            </div>
          </li>-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../../api/request";
export default {
  name: "Activity",
  data() {
    return {
      activeList: [],
    };
  },
  mounted() {
    this.getActiveList("zhuzhan_index_activity");
  },
  methods: {
    async getActiveList(modId) {
      const { datas } = await request.getIndexDataList(modId);
      // console.log(datas);
      this.activeList = datas;
    },
  },
};
</script>

<style lang='less' rel='stylesheet/less' scoped>
.activityContainer {
  width: 100%;
  margin: 40px 0;
  .activeContent {
    .activeTitle {
      line-height: 25px;
      img {
        line-height: 25px;
        vertical-align: bottom;
        margin-right: 6px;
      }
      span {
        color: #333;
        font-size: 22px;
        font-weight: bold;
        vertical-align: bottom;
      }
    }
    .activeDetail {
      width: 1400px;
      height: 250px;
      margin-top: 40px;
      .actives {
        display: flex;
        justify-content: space-between;
        .detailItem {
          width: 456px;
          height: 250px;
          background: #ffffff;
          flex: 1;
          margin-right: 16px;
          img {
            transition: all 0.1s;
            width: 100%;
            height: 150px;
            padding: 5px;
            box-sizing: border-box;
            &:hover {
              cursor: pointer;
              padding: 0px;
            }
          }
          .desc {
            height: 100px;
            padding: 16px 16px 0px;
            h3 {
              font-size: 16px;
              font-weight: bold;
              color: #333;
              line-height: 24px;
            }
            .activeTime {
              font-size: 14px;
              color: #666;
              span {
                color: #3eaffd;
                line-height: 21px;
              }
            }
            .detail {
              width: 300px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 14px;
              color: #666;
              line-height: 34px;
            }
          }
        }
      }
    }
  }
}
</style>