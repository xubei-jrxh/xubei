<template>
  <div class="toolContainer">
    <div class="toolContent">
      <div class="toolTitle">
        <img src="./images/toolIcon.png" alt />
        <span>工具下载</span>
      </div>
      <div class="toolDetail">
        <ul class="toolList">
          <li class="toolItem">
            <h3 class="toolsName">APP</h3>
            <img src="./images/computer.png" alt />
            <div class="toolsDownload">
              <div class="desc">
                <h3>虚贝APP下载</h3>
                <p>手机租号，掌上管理商品</p>
              </div>
              <el-button type="primary" round>立即下载</el-button>
            </div>
          </li>
          <li class="toolItem">
            <h3 class="toolsName">APP</h3>
            <img src="./images/computer.png" alt />
            <div class="toolsDownload">
              <div class="desc">
                <h3>虚贝APP下载</h3>
                <p>手机租号，掌上管理商品</p>
              </div>
              <el-button type="primary" round>立即下载</el-button>
            </div>
          </li>
          <li class="toolItem">
            <h3 class="toolsName">APP</h3>
            <img src="./images/computer.png" alt />
            <div class="toolsDownload">
              <div class="desc">
                <h3>虚贝APP下载</h3>
                <p>手机租号，掌上管理商品</p>
              </div>
              <el-button type="primary" round>立即下载</el-button>
            </div>
          </li>
          <li class="toolItem">
            <h3 class="toolsName">APP</h3>
            <img src="./images/computer.png" alt />
            <div class="toolsDownload">
              <div class="desc">
                <h3>虚贝APP下载</h3>
                <p>手机租号，掌上管理商品</p>
              </div>
              <el-button type="primary" round>立即下载</el-button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tool",
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
.toolContainer {
  width: 100%;
  color: #333;
  margin: 40px 0;
  .toolContent {
    .toolTitle {
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
    .toolDetail {
      width: 100%;
      height: 270px;
      margin-top: 40px;
      .toolList {
        width: 100%;
        height: 100%;
        display: flex;
        // justify-content: space-evenly;
        .toolItem {
          width: 334px;
          height: 270px;
          padding: 20px;
          margin-right: 18px;
          background: #fff;
          box-sizing: border-box;
          .toolsName {
            font-size: 15px;
            font-weight: bold;
            height: 16px;
            padding-left: 8px;
            border-left: 6px solid #3eaffd;
          }
          img {
            width: 100%;
            margin: 10px 0;
          }
          .toolsDownload {
            display: flex;
            justify-content: space-between;
            .desc {
              h3 {
                font-size: 15px;
                font-weight: bold;
                margin-bottom: 8px;
              }
              p {
                font-size: 12px;
                color: #666;
              }
              // /deep/.el-button {
              //   background: #3eaffd;
              // }
            }
          }
        }
      }
    }
  }
}
</style>