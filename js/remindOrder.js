;(function () {
   var oMore = document.getElementById('more');
   var oHid = document.getElementById('hid');
   var oTagPagShow = document.getElementById('tagPagShow');
   var aPagShow = oTagPagShow.getElementsByTagName('span');

   var oTagPagHid = document.getElementById('tagPagHid');
   var aPagHid = oTagPagHid.getElementsByTagName('span');

   var prev,next;
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
  //  console.log(prev)
   for(var i = 0,len = aPagShow.length-1;i < len ;i++){

       aPagShow[i].index = i;

       aPagShow[i].onclick = function () {
          aPagShow[0].className = '';
          prev.style.borderBottom = '';
          this.style.borderBottom = '1px solid #fff';
          prev = this ;
          next = aPagHid[this.index];
       }
   }

   //点击切换隐藏主题
   next = aPagHid[0];
   console.log(next)
   for(var j = 0,leng = aPagHid.length-1;j < leng ;j++){

       aPagHid[j].inow = j;

       aPagHid[j].onclick = function () {
         console.log(1)
          aPagHid[0].className = '';
          next.style.borderBottom = '';
          this.style.borderBottom = '1px solid #fff';
          next = this ;
          prev = aPagShow[this.inow];
       }
   }


})();
