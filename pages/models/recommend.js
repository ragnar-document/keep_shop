const request = require('./request.js');
const api = require('./api.js');

module.exports = {
  recommendShow(params){
    return request({
      url:api.recommend,
      method:'get',
      data:params
    })
  }
}