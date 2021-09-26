// index.js
var p,r,s,sum;
Page({
  principal:function(e){
    p=parseFloat(e.detail.value);
  },
  rate:function(e){
    r=parseFloat(e.detail.value);
  },
  calc:function(){
    s = p;
    for(var n=1;n<=5;n++){
      s=s*r+s
    }
    this.setData({
      sum:s
    })
  }
})