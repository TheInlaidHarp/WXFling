;(function () {
   var oMore = document.getElementById('more');
   var oHid = document.getElementById('hid');
   var oTagPagShow = document.getElementById('tagPagShow');
   var aPagShow = oTagPagShow.getElementsByTagName('span');

   var oTagPagHid = document.getElementById('tagPagHid');
   var aPagHid = oTagPagHid.getElementsByTagName('span');

   var oSwitchContent = document.getElementById('switchContent');
  //  console.log(oSwitchContent.children[0])

   var prev,next,theme;

   // 点击显示更多
   oMore.onclick = function () {

     oHid.parentNode.style.display = 'block';

     this.parentNode.style.display = 'none';
   }

   // 点击收起更多
   oHid.onclick = function () {

     oMore.parentNode.style.display = 'block';

     this.parentNode.style.display = 'none';
   };


   //点击切换主题
   prev = aPagShow[0];
   next = aPagHid[0];

   //由于主题是俩个不同的div，保持两次切换的内容上同步，需要标记。
   theme = oSwitchContent.children[0];

  //  console.log(prev)
   for(var i = 0,len = aPagShow.length-1;i < len ;i++){

       aPagShow[i].index = i;

       aPagShow[i].onclick = function () {
          aPagShow[0].className = '';
          prev.style.borderBottom = '';
          this.style.borderBottom = '1px solid #fff';
          prev = this ;

          //点击更新隐藏div的next值；
          aPagHid[0].className = '';
          next.style.borderBottom = '';
          aPagHid[this.index].style.borderBottom = '1px solid #fff';
          next = aPagHid[this.index];

          //切换 主题下面的内容
          theme.className = 'panel-box delicious-food infinite-scroll';
          oSwitchContent.children[this.index].className = "panel-box delicious-food infinite-scroll show";
          theme = oSwitchContent.children[this.index];
       }
   }

   //点击切换隐藏主题

   console.log(next)
   for(var j = 0,leng = aPagHid.length-1;j < leng ;j++){

       aPagHid[j].inow = j;

       aPagHid[j].onclick = function () {
         //切换 主题下面的下划线
          aPagHid[0].className = '';
          next.style.borderBottom = '';
          this.style.borderBottom = '1px solid #fff';
          next = this ;
          // prev = aPagShow[this.inow];

          //点击更新隐藏div的next值；
          if(this.inow >= 4 ){
            prev.style.borderBottom = '';
            aPagShow[0].style.borderBottom = '1px solid #fff';
            prev = aPagShow[0];
          }else{
            aPagShow[0].className = '';
            prev.style.borderBottom = '';
            aPagShow[this.inow].style.borderBottom = '1px solid #fff';
            prev = aPagShow[this.inow];
          }

          //切换 主题下面的内容
          //因为一个主题多一个 一个主题少  所以内容和主题一定要在数量上匹配，不然会报错。
          theme.className = 'panel-box delicious-food';
          oSwitchContent.children[this.inow].className = "panel-box delicious-food show";
          theme = oSwitchContent.children[this.inow];
       }
   }


})();
