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
        const per_row = 4
        let items_group = []
        let group = []
        res.info.Datas.forEach(item => {
          if (group.length === per_row) {
            items_group.push(group)
            group = [item]
          } else {
            group.push(item)
          }
        });
        if (group.length > 0) {
          items_group.push(group)
        }
        console.log(items_group)
        that.setData({
          seiyuuList: items_group
        })
      }
    );
  }
});