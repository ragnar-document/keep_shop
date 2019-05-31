// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productnum:0,
    allcomputer:0,
    selectAllStatus: true,    // 全选状态，默认全选
    list:[],
    all:true
  },

  allshow:function(){
    let all = !this.data.all;
    let list = this.data.list;

    for(var i = 0; i< list.length; i++){
      list[i].selected = all

      console.log(list[i].selected)
    }
    this.setData({
      all : all,
      list : list
    })
    this.productnum()
  },

  click:function(e){
    let obj = e.currentTarget.dataset.index;
    console.log(obj)
    let list = this.data.list;
    const selected = list[obj].selected;
    list[obj].selected = !selected;
    this.setData({
      list : list
    })
    this.productnum()
  },
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    this.setData({
      list: [
        {
          id: 0,
          title: "瑜伽垫",
          size: "粉红色",
          image: "https://img.alicdn.com/imgextra/i4/3619780669/O1CN01CUTd9T1GoRV42V8ep_!!3619780669.jpg_1200x1200q75.jpg_.webp",
          num: 39,
          selected: true,
          value: 2
        },
        {
          id: 1,
          title: "瑜伽垫",
          size: "灰色",
          image: "https://img.alicdn.com/imgextra/i4/3619780669/O1CN01CUTd9T1GoRV42V8ep_!!3619780669.jpg_1200x1200q75.jpg_.webp",
          num: 39,
          selected: false,
          value: 1
        },
        {
          id: 2,
          title: "刘畅",
          size: "灰色",
          image: "https://img.alicdn.com/imgextra/i4/3619780669/O1CN01CUTd9T1GoRV42V8ep_!!3619780669.jpg_1200x1200q75.jpg_.webp",
          num: 39,
          selected: true,
          value: 2
        }
      ]
    });
    this.productnum()
  },

  minus:function(e){
    const index = e.currentTarget.dataset.index;
    let carts = this.data.list;
    let num = carts[index].value;
    if(num <=1){
      return false;
    }
    num = num - 1;
    carts[index].value = num;
    this.setData({
      list:carts
    });
    this.productnum();
  },

  add:function(e){
    const index = e.currentTarget.dataset.index;
    let carts = this.data.list;
    let num = carts[index].value;
    num = num + 1;
    carts[index].value = num;
    this.setData({
      list: carts
    });
    this.productnum();
  },

  productnum:function(){
    let carts = this.data.list;
    let total= 0;
    let num = 0;
    for(let i = 0; i<carts.length; i++){
      // if(i<carts.length-1){
      //   let a = carts[i].value;
      //   let b = carts[i + 1].value;
      //   var c = a + b;
      //   num = c
      //   console.log(c)
      // }
      if (carts[i].selected) {
        total += carts[i].num * carts[i].value;
      }                     
    }
    // this.setData({
    //   productnum: num
    // })
    this.setData({
      allcomputer: total
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },



  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})