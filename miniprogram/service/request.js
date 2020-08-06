//高级版本
export default function request(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: options.url,
      method:options.method||"GET",
      data:options.data||{},
      success:function(res){
        options.resolve(res);
      },
      success:resolve,
      fail:reject
    })
  })
}

//低级版本
// export default function request(options){
//   return new Promise((resolve,reject)=>{
//     wx.request({
//       url: options.url,
//       method:options.method||"GET",
//       data:options.data||{},
//       success:function(res){
//         options.resolve(res);
//       },
//       fail:function(err){
//         opstions.reject(err);
//       }
//     })
//   })
// }