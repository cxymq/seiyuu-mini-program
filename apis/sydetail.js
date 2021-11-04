const api = require("./api");

const sydetail_local = require('../apis/sydetail.json').seiyuuDetail;
function getSeiyuuDetail(params) {
  let urlStr = api.SeiyuuDetail
  let paramsStr = ''
  if (Object.keys(params) > 0) {
    Object.keys(params).forEach(function (value) {
      paramsStr = params + value + '=' + this[value] + '&'
    })
    urlStr = urlStr + '?' + paramsStr.subString(0, paramsStr.length - 2)
    print('request url :' + urlStr)
  }
  return new Promise(function(reslove, reject) {
    // return wx.request({
    //   url: api.SeiyuuHomePageList,
    //   method: 'GET',
    //   success: (res => {
    //     reslove = res.data
    //   }),
    //   fail: reject
    // })
    reslove(sydetail_local)
  });
  
}

module.exports = {
  getSeiyuuDetail,
}