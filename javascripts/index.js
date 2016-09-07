/**
 * Created by Administrator on 2016/9/7.
 */
$(function () {
    $('#fullpage').fullpage({
        'verticalCentered': false, /*内容是否垂直居中*/
        'css3': true, /*是否使用 CSS3 transforms 滚动*/
        anchors: ['page1', 'page2', 'page3', 'page4'], /*定义锚链接*/
        'navigation': true, /*是否显示项目导航*/
        'navigationPosition': 'right', /*项目导航的位置，可选 left 或 right*/
        'navigationTooltips': ['HOME', 'about', 'help', 'connect'], /*项目导航的 tip*/
        loopBottom: false, /*滚动到最底部后是否滚回顶部*/
        loopTop: false   /*滚动到最顶部后是否滚底部*/
    })
    $(".navMenu").click(function () {
        $(".navMenu").removeClass("active");
        $(this).addClass("active");
    });
    setInterval(function () {
        var sUrl = window.location.hash;
        sUrl = sUrl.split("#");
//   console.log(sUrl[1]);
    }, 500)

    /*获取第一屏下面的文字位置*/
    var windowH = $(document).height();
    var windowW = $(document).width();

    $('.section_1_wenzi').css({
        'width'  : windowW+'px',
        'bottom' :windowH *.1+'px'
    })
})