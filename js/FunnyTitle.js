<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/favico.jpg");
         document.title = '呜呜，不要走';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/favico.jpg");
         document.title = '嘿嘿，你回来啦！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });