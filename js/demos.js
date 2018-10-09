$(function () {
  'use strict';

  //无限滚动
  $(document).on("pageInit", "#page-infinite-scroll-bottom", function(e, id, page) {
    var loading = false;
    // 每次加载添加多少条目
    var itemsPerLoad = 20;
    // 最多可加载的条目
    var maxItems = 500;
    var lastIndex = $('.list-container li').length;
    function addItems(number, lastIndex) {
      // 生成新条目的HTML
      var html = '';
      for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
        html += '<li class="list"><h4>糖果 <sup>V1</sup><small>小牛普惠 <sup>认证会员</sup></small></h4><p><span class="keyword">信贷</span><span class="keyword">无资产</span></p><p>客户开砖厂的！想贷几百万！厂房是租用地自建厂房！所以营业执照都有！</p><div class="time"><span>03月17</span><span class="marginBig">13:45</span><span class="blue">5个工作日</span><span><strong>11</strong> 浏览</span></div><div class="positionUp common">返点：1.5%</div><div class="positionDown common">月息：2.3%</div></li><div class = "nothing"></div>';
      }
      // 添加新条目
      $('.infinite-scroll .list-container').append(html);
    }
    $(page).on('infinite', function() {
      // 如果正在加载，则退出
      if (loading) return;
      // 设置flag
      loading = true;
      // 模拟1s的加载过程
      setTimeout(function() {
        // 重置加载flag
        loading = false;
        if (lastIndex >= maxItems) {
          // 加载完毕，则注销无限加载事件，以防不必要的加载
          $.detachInfiniteScroll($('.infinite-scroll'));
          // 删除加载提示符
          $('.infinite-scroll-preloader').remove();
          return;
        }
        addItems(itemsPerLoad,lastIndex);
        // 更新最后加载的序号
        lastIndex = $('.list-container li').length;
        $.refreshScroller();
      }, 1000);
    });
  });


  //test demo js

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
        html += '<li class="item-content""><div class="item-inner"><div class="item-title">新条目</div></div></li>';
      }
      // 添加新条目
      $('.infinite-scroll.active .list-container').append(html);
    }
    $(page).on('infinite', function() {
      // 如果正在加载，则退出
      if (loading) return;
      // 设置flag
      loading = true;
      var tabIndex = 0;
      if($(this).find('.infinite-scroll.active').attr('id') == "tab2"){
        tabIndex = 0;
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "tab3"){
        tabIndex = 1;
      }
      lastIndex = $('.list-container').eq(tabIndex).find('li').length;
      // 模拟1s的加载过程
      setTimeout(function() {
        // 重置加载flag
        loading = false;
        if (lastIndex >= maxItems) {
          // 加载完毕，则注销无限加载事件，以防不必要的加载
          //$.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex));
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
