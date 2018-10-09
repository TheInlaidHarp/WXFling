var oOut = document.getElementById('out');
var oPic = document.getElementById('pic');
var aLi = oPic.getElementsByTagName('li');
var oCircula = document.getElementById('circular');
var aSi = oCircula.getElementsByTagName('li');

var timer ;
var iNow = 0;


// 圆点元素添加点击事件
for (var i = 0; i < aSi.length; i++) {
	aSi[i].index = i;

      	aSi[i].onclick = function () {

      		iNow = this.index;

      		togglePic();
	}
}

//更新元素class属性
function togglePic() {

    for (var i = 0; i < aLi.length; i++) {
	      aLi[i].className = '';
	      aSi[i].className = '';
    }

    aLi[iNow].className = 'active';
    aSi[iNow].className = 'red';
}

// 自动轮播
timer = setInterval(setInt, 3000);

// 鼠标移入清除定时器
oOut.onmouseover = function () {
	clearInterval(timer);
}

// 鼠标移出开始定时器
oOut.onmouseout = function () {
	timer = setInterval(setInt, 3000);
}

// 自动轮播函数
function setInt() {
	iNow ++;

	if (iNow > aLi.length - 1) {
      		iNow = 0;
   	 }

	 togglePic();

}
