import Axios from 'axios';
import LocalStorage from './localStorage';

var api = {
    Params: {
        // 服务器返回的状态码
        "code": [0, "ok"],
        "apiUrl": "http://192.168.11.95:8888/"
    },

    call: function(apiId, type, request, responsehandler, options, errCallback) {
        this.callWeb(apiId, type, request, responsehandler, options, errCallback);
    },

    callWeb: function(apiId, type, request, responsehandler, options, errCallback) {
        // 登录之后才能去请求其他功能
        const ActiveUser = LocalStorage.getLocalData("ActiveUser");

        if (!ActiveUser) {
            return;
        }

        const url = this.Params["apiUrl"] + apiId;
        const reqOptions = options || {};
        const isDelay = reqOptions.isDelayLoading;
        const time = isDelay ? reqOptions.delayTime : 0;
        console.log("请求：", url);
        console.log("入参：", request);

        if (isDelay) {

        }
        setTimeout(function() {
            Axios({
              method: type,
              url: url,
              data: request
            })
            .then(function(response) {
              console.log("出参：", response);
              responsehandler();
            })
            .catch(function(err) {
                console.log('出错了：', err);
                if (reqOptions.isExecuteErrorBack) {
                    errCallback();
                }
            })
        }, time);
        // Axios({
        //   method: type,
        //   url: url,
        //   data: request
        // })
        // .then(function(response) {
        //   console.log("出参：", response);
        //   responsehandler();
        // })
        // .catch(function(err) {
        //     console.log('出错了：', err);
        //     if (reqOptions.isExecuteErrorBack) {
        //         errCallback();
        //     }
        // })
    }
};

module.exports = api;
