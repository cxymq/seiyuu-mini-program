const seiyuu = require("../../apis/seiyuu");

Page({
  data: {
    filter_list: ['all', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    seiyuu_list: [],
    selected_filter: 'all',
    current_page: 1,
    page_size: 20,
  },
  onLoad: function() {
    this.getSeiyuuHomeList()
  },
  // 上拉刷新
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading()
    this.getSeiyuuHomeList();
    setTimeout(function() {
      wx.hideNavigationBarLoading() // 完成停止加载
      wx.stopPullDownRefresh() // 停止下拉刷新
    }, 2000)
  }, 
  // 下拉刷新
  onReachBottom: function() {
    wx.showNavigationBarLoading()
    this.getSeiyuuHomeList();
    setTimeout(function() {
      wx.hideNavigationBarLoading() // 完成停止加载
    }, 2000)
  },
  // 获取声优列表
  getSeiyuuHomeList: function() {
    let that = this;
    let params = new Map()
    params.set('p', this.current_page)
    params.set('page_size', this.page_size)
    seiyuu.getSeiyuuHomeList(params).then(
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
          seiyuu_list: items_group
        })
      }
    );
  },

  // 查看声优详情
  getSyDetail: function(event) {
    let syid = event.currentTarget.dataset.syid
    let url = '../sydetail/sydetail?syid=' + syid
    wx.navigateTo({
      url: url,
    })
  }
})