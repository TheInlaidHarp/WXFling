// alert(1)
$(function () {
  'use strict';

  //多个标签页下的无限滚动
  $(document).on("pageInit", "#page-fixed-tab-infinite-scroll", function(e, id, page) {
    var loading = false;
    // 每次加载添加多少条目
    var itemsPerLoad = 20;
    // 最多可加载的条目
    var maxItems = 100;
    var lastIndex = $('.list-container li')[0].length;
    function addItems(number, lastIndex) {
      // 生成新条目的HTML
      var html = '';
      for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
        html += '</div><li class="clearfix"><img src="../imgs/homePage-01.jpg"><div class="cont"><div class="cont-inner"><p>生姜是日常生活中十分常见的调料，生虽然作为调味料，生姜出...</p><div class="cont-footer"><span class="">2012-10-02 15:30</span><span class="num pull-right">188 转发</span><span class="pull-right">1229 浏览</span></div></div></div></li><div class="fill"></div>';
      }
      // 添加新条目
      $('.infinite-scroll.show .list-container').append(html);
    }
    $(page).on('infinite', function() {
      // 如果正在加载，则退出
      if (loading) return;
      // 设置flag
      loading = true;
      var tabIndex = 0;
      if($(this).find('.infinite-scroll.show').attr('id') == "t2"){
        tabIndex = 1;
      }
      if($(this).find('.infinite-scroll.show').attr('id') == "t3"){
        tabIndex = 2;
      }
      lastIndex = $('.list-container').eq(tabIndex).find('li').length;
      // 模拟1s的加载过程
      setTimeout(function() {
        // 重置加载flag
        loading = false;
        if (lastIndex >= maxItems) {
          // 加载完毕，则注销无限加载事件，以防不必要的加载
          $.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex));
          // 删除加载提示符
          $('.infinite-scroll-preloader').eq(tabIndex).hide();
          return;
        }
        addItems(itemsPerLoad,lastIndex);
        // 更新最后加载的序号
        lastIndex =  $('.list-container').eq(tabIndex).find('li').length;
        $.refreshScroller();
      }, 1000);
    });
  });




  //加载提示符
  $(document).on("pageInit", "#page-preloader", function(e, id, page) {
    $(page).on('click','.open-preloader-title', function () {
      $.showPreloader('加载中...')
      setTimeout(function () {
        $.hidePreloader();
      }, 2000);
    });
    $(page).on('click','.open-indicator', function () {
      $.showIndicator();
      setTimeout(function () {
        $.hideIndicator();
      }, 2000);
    });
  });

  $.init();
});
