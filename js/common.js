// on screen animation

$(window).scroll(function() {
  $(".animate").each(function() {
    if ($(this).isOnScreen(0, 0.1) == true) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
});

$(function() {
  $(".items ").click(function() {
    var $this = $(this);
    $this
      .addClass("active")
      .siblings()
      .removeClass("active");

    return false;
  });
});


   $(".formfield.answer7").prepend('<span class="checkbox_span"></span>'),
     $(".formfield.name input").attr("placeholder", "請輸入姓名"),
     $(".formfield.mobile input").attr("placeholder", "請輸入手機號碼"),
     $(".formfield.formfield_email input").attr(
       "placeholder",
       "請輸入電子信箱"
     ),
     $(".formfield.formfield_address1 input").attr("placeholder", "請輸入地址"),
     //  $("#dwfrm_oto_oevent_answer1").attr("placeholder", "請輸入年齡"),
     $("#dwfrm_oto_oevent_answer4").attr(
       "placeholder",
       "請輸入目前使用水狀精華,化妝水品牌/品名"
     ),
     $(".formfield.answer7 [for=dwfrm_oto_oevent_answer7]").html(
       '提醒您送出資料後，即代表您同意將此資料提供予Lancôme 蘭蔻進行行銷處理與使用<a href="http://www.lancome.com.tw/customer-service-security-policy.html" target="_blank">[詳細個人資料權益說明]</a>'
     ),
     $(".formfield.formfield_button #otoo-event-submit-button span").text(
       "立即體驗"
     );