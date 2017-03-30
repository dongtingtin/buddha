onload = function() {
        var oAct = document.getElementById('active');
        var oA = document.getElementById('active_a');
        oAct.style.backgroundColor = '#fff';
        oAct.style.borderTop = '2px solid #927a6d';
        oA.style.color = 'black'
        var ore = document.getElementById('redian');
        var orea = document.getElementById('redian_a');
        ore.style.backgroundColor = '#fff';
        ore.style.borderTop = '2px solid #927a6d';
        orea.style.color = 'black'
        var oBtn = document.getElementById('btn');
        oBtn.style.backgroundColor = '#927a6d';
    }
    //小轮播图
$(function() {
    var oIMG = $('.oImg').length;
    $('.oList').first().addClass('on');
    /*$('.oImg').mouseover(function(){
        clearInterval(cc);
    })
    $('.oImg').mouseout(function(){
       setInterval(function(){
        tet();
    },1000);
    })*/
    //当鼠标进入时，清除自动播放
    $('.prve').mouseover(function() {
            clearInterval(cc);
        })
        //点击上一张
    $('.prve').click(function() {
            var oIndex = $('.on').index();
            if (oIndex == 0) {
                oIndex = oIMG - 1;
                $('.oList').eq(oIndex).addClass('on').siblings().removeClass('on');
                $('.oImg').eq(oIndex).fadeIn(1000).siblings().fadeOut();
            } else {
                $('.oList').eq(oIndex - 1).addClass('on').siblings().removeClass('on');
                $('.oImg').eq(oIndex - 1).fadeIn(1000).siblings().fadeOut();
            }
        })
        //封装下一张的函数
    function tet() {
        var oIndex = $('.on').index();
        if (oIndex == oIMG - 1) {
            oIndex = -1;
        };
        $('.oList').eq(oIndex + 1).addClass('on').siblings().removeClass('on');
        $('.oImg').eq(oIndex + 1).fadeIn(1000).siblings().fadeOut();
    };
    tet();
    //自动播放
    var cc = setInterval(function() {
        tet();
    }, 2000);
    //点击下一张
    $('.next').click(function() {
            tet();
        })
        //当鼠标进入时，清除自动播放
    $('.next').mouseover(function() {
            clearInterval(cc);
        })
        //点击下方的小图片自动找到相对应的大图片
    $('.oList').mouseover(function() {
        //当鼠标进入时，清除自动播放
        clearInterval(cc);
        var att = $(this).index();
        $('.oList').eq(att).addClass('on').siblings().removeClass('on');
        $('.oImg').eq(att).fadeIn(1000).siblings().fadeOut();
    });
    /* $('.oList').mouseout(function(){
         console.log(222);

     })*/
})