"use strict";
var app = getApp();
Page({
    data: {
        name: 'christ',
        age: 18,
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    onLoad: function () {
        var _this = this;
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            });
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true,
                });
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    _this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true,
                    });
                },
            });
        }
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
        });
    },
    handleShowTaost: function (e) {
        wx.showToast({
            title: '加载中',
            duration: 3000,
            icon: 'loading',
            mask: true,
            success: function () {
                console.log("加载成功");
            },
            fail: function () {
                console.log("加载失败");
            },
            complete: function () {
                console.log("处理完成");
            }
        })
    },
    handleShowModal: function (e) {
        wx.showModal({
            title: '我是标题',
            content: '我是内容',
            cancelText:'退出',
            cancelColor:'red',
            success:function(res){
                if(res.cancel){
                    console.log('用户点击取消按钮');
                }
                if(res.confirm){
                    console.log('用户点击了确定按钮');
                }
            }
        })
    },
    handleShowLoading:function(e){
        wx.showLoading({
          title: '加载中......',
          mask:true
        })
        setTimeout(()=>{
            wx.hideLoading({
              success: (res) => {
                  console.log("加载完成")
              },
            })
        },1000)
    },
    handleShowAction:function(e){
        wx.showActionSheet({
          itemList: ['相册','拍照'],
          success:function(res){
              console.log(res);
          }
        })
    },
    onShareAppMessage:function(options){
        console.log(options);
    }

});