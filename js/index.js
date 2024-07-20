var textElement = document.getElementById('text');

// 发起 HTTP 请求并获取接口返回的数据
fetch('https://api.cenguigui.cn/api/juhe/?msg=随机一言&type=json')
  .then(function(response) {
    return response.json(); // 将响应数据解析为 JSON 对象
  })
  .then(function(data) {
    // 将返回的数据中的文字部分赋值给显示文字的元素
    textElement.innerText = data.text;
  })
  .catch(function(error) {
    console.log(error);
});

var input = document.getElementById("search-input");
function search() {
    var q = input.value;
    window.open("https://cn.bing.com/search?q=" + q);
}
