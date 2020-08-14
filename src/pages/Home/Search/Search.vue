<template>
  <div class="searchContainer">
    <h1 title="虚贝">
      <img src="./images/logoXubei.png" alt="" />
    </h1>
    <div class="search">
      <div class="frame">
        <!-- <el-select
          v-model="value1"
          class="select"
          multiple
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>

        <el-select
          v-model="value2"
          class="select"
          multiple
          collapse-tags
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        <el-select
          v-model="value2"
          class="select"
          multiple
          collapse-tags
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select> -->
      </div>
      <div class="searchBtn">
        <i class="el-icon-search"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value1: [],
      value2: [],
    };
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.searchContainer {
  display: flex;
  justify-content: space-between;
  height: 114px;
  line-height: 114px;
  width: 100%;
  background-color: #fff;
  h1 {
    text-align: center;
    img {
      vertical-align: middle;
      border-style: none;
    }
  }
  .search {
    position: relative;
    display: inline-block;
    margin-top: 38px;
    width: 611px;
    height: 36px;
    border: 1px solid #3eaffd;
    border-radius: 5px;
    .frame {
      width: 563px;
      height: 36px;
      padding-left: 10px;
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      //   .select {
      //     // position: absolute;
      //     // top: 0;
      //     margin: 0;
      //     padding: 0;
      //     width: 110px;
      //     height: 36px;
      //   }
    }
    .searchBtn {
      width: 48px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      background-color: #3eaffd;
      //   float: right;
      position: absolute;
      right: -1px;
      top: 0;
      border-radius: 0 5px 5px 0;
      i {
        color: #fff;
      }
    }
  }
}
</style>
