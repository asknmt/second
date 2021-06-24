
  var setImage = [
    "img/fv-bgi_01.jpg",
    "img/fv-bgi_02.jpg",
    "img/fv-bgi_03.jpg",
    "img/fv-bgi_01.jpg",/*03のあと01に戻る*/
  ];
  
  //カウンターの初期値設定
  var counter = 0;
  
  //設定した画像パスをid="slideshow"のbackground-imageに設定する、繰り返す
  function slideimage(){
      //カウンターが設定画像数より大きいか確認
      if( counter >= (setImage.length-1)){
          //カウンターを初期値に戻す
          counter = 0;
      }
      //背景画像を設定
      document.getElementById( "slideshow" ).style.backgroundImage = "url(" + setImage[counter] + ")";
      //カウントアップ
      counter++;
      
  }
  
  //3秒ごとに背景画像を切り替える
  setInterval("slideimage()",5000);

/*ページ内リンク*/
  $(function(){
    $('a[href^="#"]').click(function(){
      var speed = 1000;
      var href= $(this).attr('href');
      var target = $(href == "#" || href == "" ? 'html' : href);
      $("html, body").animate(
          {scrollTop: target.offset().top}, speed, "swing");
      return false;
    });
  });
  
  $('#humber a[href]').on('click', function(event) {
    $('.drawer-open').trigger('click');
  });
  
/*スクロールでヘッダーの背景色変更*/
  jQuery(window).on('scroll', function () {
 
    if (jQuery('header').height() < jQuery(this).scrollTop()) { 
   jQuery('header').addClass('change-color'); }
    else {
    jQuery('header').removeClass('change-color'); } });
    
   
   