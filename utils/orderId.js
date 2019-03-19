// 生成唯一订单编号

function orderId() {
  var outTradeNo = ""; //订单号
  for (var i = 0; i < 5; i++) {
    outTradeNo += Math.floor(Math.random() * 10);
  }
  outTradeNo = new Date().getTime() + outTradeNo;
  return outTradeNo;
}

module.exports = orderId;
