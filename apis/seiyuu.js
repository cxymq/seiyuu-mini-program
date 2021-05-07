const api = require("./api");

const seiyuu_local = require('../apis/seiyuu.json.js').seiyuuHomeList;
function getSeiyuuHomeList() {
  return new Promise(function(reslove, reject) {
    // return wx.request({
    //   url: api.SeiyuuHomePageList,
    //   method: 'GET',
    //   success: (res => {
    //     reslove = res.data
    //   }),
    //   fail: reject
    // })
    reslove(seiyuu_local)
  });
  
}

module.exports = {
  getSeiyuuHomeList,
}