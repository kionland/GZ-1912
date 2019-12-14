$(() => {

    /* 实现图形验证码 */
    let captchaL = new Captcha({
        dotNum: 20,
        lineNum: 15,
        fontSize: 40,
        length: 5
    });
    let codeL;
    captchaL.draw(document.querySelector('#captchaL'), r => {
        console.log(r, '验证码L');
        codeL = r.toLowerCase();
    });

    let captchaR = new Captcha({
        dotNum: 20,
        lineNum: 15,
        fontSize: 40,
        length: 5
    });
    let codeR;
    captchaR.draw(document.querySelector('#captchaR'), r => {
        console.log(r, '验证码R');
        codeR = r.toLowerCase();
    });

    let usernameR
    let passwordR
    let usernameL
    let passwordL
    //实现注册和登录界面的切换
    $(".mod").click(function () {
        $(this).children().addClass("tab_on").parent().siblings().children().removeClass("tab_on");
        $(".formbox").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
    });

    //登录输入操作：用户名
    $("#usernameL").blur(function () {
        let reg = /(^[\u4E00-\u9FA5A-Za-z0-9_]{6,}$)|(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/;

        if (!reg.test($.trim($(this).val()))) {
            $(".error1").addClass("cur");
        } else {
            $(".error1").removeClass("cur");
        }
        usernameL = $("#usernameL").val();
    });

    //登录输入操作：密码
    $("#passwordL").blur(function () {
        let reg = /^[a-zA-Z][0-9a-zA-Z]{5,11}$/;

        if (!reg.test($.trim($(this).val()))) {
            $(".error2").addClass("cur");
        } else {
            $(".error2").removeClass("cur");
        }
        passwordL = $("#passwordL").val();
    });

    //登录输入操作：图形验证码
    $("#imageCodeL").blur(function () {
        if ($.trim($(this).val()).toLowerCase() != codeL) {
            $(".error3").addClass("cur");
        } else {
            $(".error3").removeClass("cur");
        }
    });
 
    //注册输入操作：用户名
    $("#usernameR").blur(function () {
        let reg = /(^[\u4E00-\u9FA5A-Za-z0-9_]{6,}$)|(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/;

        if (!reg.test($.trim($(this).val()))) {
            $(".error4").addClass("cur");
        } else {
            $(".error4").removeClass("cur");
        }
        usernameR = $("#usernameR").val();
    });

    //注册输入操作：密码
    $("#passwordR").blur(function () {
        let reg = /^[a-zA-Z][0-9a-zA-Z]{5,11}$/;

        if (!reg.test($.trim($(this).val()))) {
            $(".error5").addClass("cur");
        } else {
            $(".error5").removeClass("cur");
        }
        passwordR = $("#passwordR").val();
    });

    //注册输入操作：图形验证码
    $("#imageCodeR").blur(function () {
        if ($.trim($(this).val()).toLowerCase() != codeR) {
            $(".error6").addClass("cur");
        } else {
            $(".error6").removeClass("cur");
        }
    });

    //发送登录请求
    $(".sub1").click(function () {
       
        if ($(".error1").hasClass("cur") || $(".error2").hasClass("cur") || $(".error3").hasClass("cur") || usernameL.length == 0 || passwordL.length == 0 || $("#imageCodeL").val().length == 0) {
            alert("您输入有误,请输入正确后再登录")
        } else {
            $.ajax({
                type: "post",
                url: "http://127.0.0.1/code/program/server/04login.php",
                data: `username=${usernameL}&password=${passwordL}`,
                dataType: "json",
                success: function (response) {
                    if (response.status == "success") {
                        window.location.href = "http://127.0.0.1/code/program/client/html/index.html";
                        $(".header-user-info").eq(0).addClass("cur").siblings().removeClass("cur");
                        $(".user-meta .name").text(usernameL);
                    } else {
                        alert(response.data.msg);
                    }
                }
            });
        }
    });

    //发送注册请求
    $(".sub2").click(function () {
        console.log(usernameR, passwordR);
        if ($(".error4").hasClass("cur") || $(".error5").hasClass("cur") || $(".error6").hasClass("cur") || usernameR.length == 0 || passwordR.length == 0 || $("#imageCodeR").val().length == 0) {
            alert("您输入有误,请输入正确后再注册")
        } else {
            $.ajax({
                type: "post",
                url: "http://127.0.0.1/code/program/server/03register.php",
                data: `username=${usernameR}&password=${passwordR}`,
                dataType: "json",
                success: function (data) {
                    if (data.status == "success") {
                        alert(data.data.msg);
                        window.location.href = "http://127.0.0.1/code/program/client/html/index.html";
                    } else {
                        alert(data.data.msg)
                    }
                }
            });

        }

    });


    //这是监听函数的末尾
});