const seiyuu = require("../apis/seiyuu");

Page({
  data: {
    seiyuuList: []
  },
  onShow: function() {
    this.getSeiyuuHomeList()
  },
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading()
    this.getSeiyuuHomeList();
    wx.hideNavigationBarLoading() // 完成停止加载
    wx.stopPullDownRefresh() // 停止下拉刷新
  }, 
  getSeiyuuHomeList: function() {
    let that = this;
    seiyuu.getSeiyuuHomeList().then(
      res => {
        console.log(res)
        that.setData({
          seiyuuList: res.info.Datas
        })
      }
    );
  }
});