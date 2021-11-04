// pages/sydetail/sydetail.js
const sydetail = require("../../apis/sydetail");
const { seiyuuDetail } = require("../../apis/sydetail.json");

Page({

  /**
   * Page initial data
   */
  data: {
    syid: 1,
    cvinfo: {},
    dramas: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (query) {
    let that = this;
    that.setData({
      syid: query.syid  
    });
    console.log(that.data.syid);//取值
  },

  // 获取声优页详情
  getSeiyuuDetail: function() {
    let that = this;
    let params = new Map()
    params.set('cv_id', this.syid)
    params.set('page_size', 1)
    seiyuuDetail.getSeiyuuDetail(params).then(
      res => {
        that.setData({
          cvinfo: res.info.cv,
          dramas: res.info.dramas
        })
      }
    )
  }
})