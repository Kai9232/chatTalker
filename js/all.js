$(document).ready(function () {
    //方案選項切換
    // $('.btn').click(function () { 
    //     $(this).parent().parent().siblings('.plan_intro').find('.plan_edition').find('.plan_info').find('.plan_calc').find('.a').find('.count').find('p').text('15000');
    // });
    $('.btn1').click(function () { 
        $(this).toggleClass('click');
        $(this).parent().siblings().find('.btn2,.btm3,.btn4,.btn5').removeClass('click');
        $('.count p').text('10000');
        $('.price_basic p').text('600');
        $('.price_pro p').text('1600');
    });
    $('.btn2').click(function () { 
        $(this).toggleClass('click');
        $(this).parent().siblings().find('.btn1,.btm3,.btn4,.btn5').removeClass('click');
        $('.count p').text('15000');
        $('.price_basic p').text('500');
        $('.price_pro p').text('1500');
    });
    $('.btn3').click(function () { 
        $(this).toggleClass('click');
        $(this).parent().siblings().find('.btn1,.btm2,.btn4,.btn5').removeClass('click');
        $('.count p').text('20000');
        $('.price_basic p').text('400');
        $('.price_pro p').text('1400');
    });
    $('.btn4').click(function () { 
        $(this).toggleClass('click');
        $(this).parent().siblings().find('.btn1,.btm2,.btn3,.btn5').removeClass('click');
        $('.count p').text('25000');
        $('.price_basic p').text('300');
        $('.price_pro p').text('1300');
    });
    $('.btn5').click(function () { 
        $(this).toggleClass('click');
        $(this).parent().siblings().find('.btn1,.btm2,.btn3,.btn4').removeClass('click');
        $('.count p').text('>25000');
        $('.price_basic p').text('200');
        $('.price_pro p').text('1200');
    });
    //FAQ摺疊選單
    $('.faq_list li').click(function () { 
        $(this).find('.faq_item').find('p').toggleClass('open');
        $(this).find('.faq_ans').slideToggle('open');
        $(this).siblings().find('.faq_ans').slideUp();
        $(this).siblings().find('.faq_item').find('p').removeClass('open');
    });
    //TOP滑動效果
    $('.btn_top').click(function () { 
        $('html').animate({scrollTop:0},500);
    });
    // 去除連結
    $('.plan_exp .plan_btg').click(function (e) { 
        e.preventDefault();
    });
});