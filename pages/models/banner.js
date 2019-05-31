const requset = require('./request.js');
const api = require('./api.js');

module.exports = {
    bannerShow(params){
        return requset({
            url:api.banner,
            method:'get',
            data:params
        })
    }
}