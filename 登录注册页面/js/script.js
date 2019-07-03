$(function () {
    var t =60;
    $('.getmessage').click(function () {
        // alert('苍天啊，点击一定要成功啊');
        $(this).attr('disabled',true);
        var t =60;
        var i = setInterval(function () {
            t--;
            if (t > 0)
                $('.getmessage').text(t+'秒后刷新重试');
            else
            {
                $('.getmessage').text('获取登陆密码');
                $('.getmessage').removeAttr('disabled');
                clearInterval(i);
            }
        },1000);
        i();
    });
    // 上面是点击获取验证码进行倒计时效果
    $('form div:first input').blur(function () {

        // alert($(this).val());

        //判断验证是否成功
        if( $(this).val().length >0 ){
            //验证成功
           $('form p:first').css('display','none');
        }else{
            $('form p:first').css('display','block').text('请输入用户名');

        }

    });
    // 上面是验证用户名
    $('form div:eq(1) input').blur(function () {
        //判断验证是否成功
        if( $(this).val().length >7 ){
            //验证成功
            $('form p:eq(1)').css('display','none');
        }else{
            $('form p:eq(1)').css('display','block').text('密码至少输入8位');

        }
    });
   // 上面是验证密码是否超过8位
    $('form div:eq(2) input').blur(function () {
        //判断验证是否成功
        if( $(this).val() ==  $('form div:eq(1) input').val()  ){
            //验证成功
            $('form p:eq(2)').css('display','none');
        }else{
            $('form p:eq(2)').css('display','block').text('两次输入的密码不一致');

        }
    });
    // 上面是验证两次密码是否一致
    $('form div:eq(3) input').blur(function () {
        //判断验证是否成功
        var myreg= /^1[3|4|5|7|8]\d{9}$/;
        if (!myreg.test( $(this).val())) {
            $('form p:eq(3)').css('display','block').text('请输入正确的11位手机号');

        } else {
            $('form p:eq(3)').css('display','none');

        }

    });

})

