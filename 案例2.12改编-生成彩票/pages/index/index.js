//index.js
//获取应用实例
var s = new Array();
var i,j,p;
Page({
  mysubmit: function () {
    p = parseInt(Math.random() * 32);
    s[0] = p;
    for (i = 1; i < 7; i++) { 
      p = parseInt(Math.random() * 32);
      s[i] = p;
      for (j = 0; j < i; j++) {
        if (s[j] == s[i]) {
          i = i-1;
          break;
        }
      }
    }
    this.setData({
      a:(s[0]/Math.pow(10,2)).toFixed(2).substr(2),
      b:(s[1]/Math.pow(10,2)).toFixed(2).substr(2),
      c:(s[2]/Math.pow(10,2)).toFixed(2).substr(2),
      d:(s[3]/Math.pow(10,2)).toFixed(2).substr(2),
      e:(s[4]/Math.pow(10,2)).toFixed(2).substr(2),
      f:(s[5]/Math.pow(10,2)).toFixed(2).substr(2),
      g:(s[6]/Math.pow(10,2)).toFixed(2).substr(2),
    })
  }
})
