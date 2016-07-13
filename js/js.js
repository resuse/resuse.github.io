/**
 * Created by LC on 2016/4/19.
 */

     var navT=setInterval(scroll1,5);
    var content1=document.getElementById("content1");
    var content2=document.getElementById("content2");
    var banaer=document.getElementById("banaer");
    var hmBug=banaer.getElementsByTagName("div")[3];
    var line_123=document.getElementsByClassName("line");
    var close=document.getElementById("close");
    var close1=document.getElementById("close").getElementsByTagName("div")[0];
    var close2=document.getElementById("close").getElementsByTagName("div")[1];
    var cd=document.getElementById("caiDan");
    var doMnAi=document.getElementById("Logo");
    var t=setTimeout(windowZw,1000);
    var now;
    var t;
    var nav=document.getElementById("nav");
    setTimeout(function(){
       if(document.body.scrollTop<=50){
           nav.style.width="1349px";
           nav.style.webkitTransition="all .5s linear";
       }else{
           nav.style.width="1349px";
           nav.style.webkitTransition="";
       }
    },1000);
        content1.style.opacity="1";
        content2.style.opacity="0";
        content1.style.zIndex="3";
        content2.style.zIndex="2";
        document.body.style.overflowY="hidden";
    setInterval(lbard,4000);
        function lbard() {
    var ci = document.getElementById("circleArrow").getElementsByTagName("i")[0];
    ci.style.animation = "myMove .5s linear 3";
    setTimeout(clearAnimation,1500);
    function clearAnimation(){
        ci.style.animation = "";
    }
}
        function windowZw(){
            content1.style.opacity="0";
            content1.style.width="1349px";
            content2.style.opacity="1";
            content1.style.zIndex="2";
            content2.style.zIndex="3";
            content2.style.transition="all .5s linear";
            document.body.style.overflowY="scroll";
        }
        function scroll1(){
            navLogoMenu();
            moveUp();
            var content1Div=document.getElementById("content1");
            content1Div.style.marginTop=document.body.scrollTop+"px";
        }
        function navLogoMenu(){
            if(document.body.scrollTop==0){
                cd.style.marginTop="0px";
            }else{
                if(document.body.scrollTop>=50){
                    nav.style.height="54px";
                    nav.style.backgroundColor="#f3f4f5";
                    for(var i=0;i<line_123.length;i++){
                        line_123[i].style.backgroundColor="#302f2f";
                        line_123[i].style.transition="all .3s linear";
                    }
                    nav.style.transition="all .3s linear";
                    cd.style.marginTop=document.body.scrollTop+"px";
                    doMnAi.style.color="#302f2f";
                    doMnAi.style.transition="all .3s linear"
                    close1.style.backgroundColor="#302f2f";
                    close2.style.backgroundColor="#302f2f";
                }else if(document.body.scrollTop<50){
                    nav.style.height="5px";
                    nav.style.backgroundColor="#53edcf";
                    for(var i=0;i<line_123.length;i++){
                        line_123[i].style.backgroundColor="#fff";
                        line_123[i].style.transition="all .3s linear";
                    }
                    nav.style.transition="all .3s linear";
                    cd.style.marginTop=document.body.scrollTop+"px";
                    doMnAi.style.color="#fff";
                    doMnAi.style.transition="all .3s linear"
                    close1.style.backgroundColor="#fff";
                    close2.style.backgroundColor="#fff";
                }
            }
        }
        function moveUp() {
            var imgMoveUp1 = document.getElementsByClassName("imgMoveUp1");
            var imgMoveUp2 = document.getElementsByClassName("imgMoveUp2");
            if (document.body.scrollTop >= 450) {
                for (var i = 0; i < imgMoveUp1.length; i++) {
                    imgMoveUp1[i].style.marginTop = "0px";
                    imgMoveUp1[i].style.opacity="1";
                    imgMoveUp1[i].style.transition = "all .3s linear";
                }
            } else if (document.body.scrollTop < 200) {
                for (var i = 0; i < imgMoveUp1.length; i++) {
                    imgMoveUp1[i].style.opacity="0";
                    imgMoveUp1[i].style.marginTop = "100px";
                }
            }
            if (document.body.scrollTop >= 750) {
                for (var i = 0; i < imgMoveUp2.length; i++) {
                    imgMoveUp2[i].style.marginTop = "0px";
                    imgMoveUp2[i].style.opacity="1";
                    imgMoveUp2[i].style.transition = "all .3s linear";
                }
            } else if (document.body.scrollTop < 200) {
                for (var i = 0; i < imgMoveUp2.length; i++) {
                    imgMoveUp2[i].style.opacity="0";
                    imgMoveUp2[i].style.marginTop = "100px";
                }
            }
            if (document.body.scrollTop >= 1170){
                var imgMoveUp3 = document.getElementsByClassName("imgMoveUp3");
                for(var i=0;i<imgMoveUp3.length;i++){
                    imgMoveUp3[i].style.marginTop = "0px";
                    imgMoveUp3[i].style.opacity="1";
                    imgMoveUp3[i].style.transition = "all .3s linear";
                }
            } else if (document.body.scrollTop <200) {
                var imgMoveUp3 = document.getElementsByClassName("imgMoveUp3");
                for(var i=0;i<imgMoveUp3.length;i++){
                    imgMoveUp3[i].style.marginTop = "100px";
                    imgMoveUp3[i].style.opacity="0";
                }
            }
        }/*下面图片显示*/
        function backTop(){
            t=setInterval(setTop,1);
            now=document.body.scrollTop;
        }
        function setTop(){
            if(document.body.scrollTop=="0"||now<document.body.scrollTop){
                clearInterval(t);
            }else{
                document.body.scrollTop=document.body.scrollTop-3;
                now=document.body.scrollTop;
            }
        }
        function tanChuCaiDan(){
            banaer.style.width="1366px";
            cd.style.marginLeft="0px";
            cd.style.transition="all .5s linear";
            setTimeout(scrollYHidden,500);
            function scrollYHidden(){
                document.body.style.overflowY="hidden";
            }
            hmBug.style.opacity="0";
            close.style.opacity="1";
            close1.style.webkitTransform="rotate(45deg)";
            close1.style.webkitTransition="all .5s linear";
            close2.style.webkitTransform="rotate(-45deg)";
            close2.style.webkitTransition="all .5s linear";
            hmBug.style.zIndex="10";
            close.style.zIndex="100";
            cd.style.zIndex="50";
        }
        function closer(){
            banaer.style.width="1349px";
            cd.style.marginLeft="-2732px";
            cd.style.transition="all .5s linear";
            if(cd.style.marginLeft<="-2732px"){
                document.body.style.overflowY="scroll";
            }else{
                document.body.style.overflowY="hidden";
            }
            close.style.opacity="0";
            close.style.webkitTransition="all .5s linear";
            close.style.zIndex="10";
            close1.style.webkitTransform="rotate(0deg)";
            close1.style.webkitTransition="all .5s linear";
            close2.style.webkitTransform="rotate(0deg)";
            close2.style.webkitTransition="all .5s linear";
            setTimeout(function(){
                hmBug.style.opacity="1";
                hmBug.style.zIndex="11";
                hmBug.style.webkitTransition="all .2s linear";
            },500);
        }
    var LDiv=document.getElementById("LookingFor_div");
        function rotate1(){
            LDiv.style.transform="rotate(90deg)";
            LDiv.style.webkitTransition="all .3s linear";
        }
        function rotate2(){
            LDiv.style.transform="rotate(-90deg)";
            LDiv.style.webkitTransition="all .3s linear";
        }
    var Ldiv_grid_right_2=document.getElementById("grid_right_2_div");
        function rotate_right2_1(){
            Ldiv_grid_right_2.style.transform="rotate(90deg)";
            Ldiv_grid_right_2.style.webkitTransition="all .3s linear";
        }
        function rotate_right2_2(){
            Ldiv_grid_right_2.style.transform="rotate(-90deg)";
            Ldiv_grid_right_2.style.webkitTransition="all .3s linear";
        }
    var Ldiv_grid_right_5=document.getElementById("grid_right_5_div");
        function rotate_right5_1(){
            Ldiv_grid_right_5.style.transform="rotate(90deg)";
            Ldiv_grid_right_5.style.webkitTransition="all .3s linear";
        }
        function rotate_right5_2(){
            Ldiv_grid_right_5.style.transform="rotate(-90deg)";
            Ldiv_grid_right_5.style.webkitTransition="all .3s linear";
        }
        //--------------------------------------------------------------------
        function zzc1(){
            var arrow1=document.getElementById("myiArrow");
            var a=document.getElementById("zzc");
            a.style.opacity="0.7";
            a.style.cursor="pointer";
            a.style.transition="all .3s linear"
            arrow1.style.marginLeft="30px";
            arrow1.style.transition="all .3s linear";
        }
        function zzc2(){
            var arrow1=document.getElementById("myiArrow");
            var a=document.getElementById("zzc");
            a.style.opacity="0";
            a.style.cursor="auto";
            a.style.transition="all .3s linear"
            arrow1.style.marginLeft="0px";
            arrow1.style.transition="all .3s linear";
        }
        function zzchr(){
            window.location="domanistudios.html";
        }
    var grid1_div_line=document.getElementById("grid1_div").getElementsByTagName("div");
        function gd1Over(){
            grid1_div_line[0].style.transform="rotate(180deg)";
            grid1_div_line[0].style.transition="all .3s linear";
            grid1_div_line[1].style.transform="rotate(-180deg)";
            grid1_div_line[1].style.transition="all .3s linear";
        }
        function gd1Out(){
            grid1_div_line[0].style.transform="rotate(-90deg)";
            grid1_div_line[0].style.transition="all .3s linear";
            grid1_div_line[1].style.transform="rotate(0deg)";
            grid1_div_line[1].style.transition="all .3s linear";
        }
    var gr1_div_line=document.getElementById("grid_right_1_div").getElementsByTagName("div");
        function gr1Over(){
            gr1_div_line[0].style.transform="rotate(180deg)";
            gr1_div_line[0].style.transition="all .3s linear";
            gr1_div_line[1].style.transform="rotate(-180deg)";
            gr1_div_line[1].style.transition="all .3s linear";
        }
        function gr1Out(){
            gr1_div_line[0].style.transform="rotate(-90deg)";
            gr1_div_line[0].style.transition="all .3s linear";
            gr1_div_line[1].style.transform="rotate(0deg)";
            gr1_div_line[1].style.transition="all .3s linear";
        }
    var glrtline=document.getElementById("grid_left_right_top_div").getElementsByTagName("div");
        function glrtOver(){
            glrtline[0].style.transform="rotate(180deg)";
            glrtline[0].style.transition="all .3s linear";
            glrtline[1].style.transform="rotate(-180deg)";
            glrtline[1].style.transition="all .3s linear";
        }
        function glrtOut(){
            glrtline[0].style.transform="rotate(-90deg)";
            glrtline[0].style.transition="all .3s linear";
            glrtline[1].style.transform="rotate(0deg)";
            glrtline[1].style.transition="all .3s linear";
        }
    var glrbline=document.getElementById("grid_left_right_bottom_div").getElementsByTagName("div");
        function glrbOver(){
            glrbline[0].style.transform="rotate(180deg)";
            glrbline[0].style.transition="all .3s linear";
            glrbline[1].style.transform="rotate(-180deg)";
            glrbline[1].style.transition="all .3s linear";
        }
        function glrbOut(){
            glrbline[0].style.transform="rotate(-90deg)";
            glrbline[0].style.transition="all .3s linear";
            glrbline[1].style.transform="rotate(0deg)";
            glrbline[1].style.transition="all .3s linear";
        }
    var gr3line=document.getElementById("grid_right_3_div").getElementsByTagName("div");
        function gr3Over(){
            gr3line[0].style.transform="rotate(180deg)";
            gr3line[0].style.transition="all .3s linear";
            gr3line[1].style.transform="rotate(-180deg)";
            gr3line[1].style.transition="all .3s linear";
        }
        function gr3Out(){
            gr3line[0].style.transform="rotate(-90deg)";
            gr3line[0].style.transition="all .3s linear";
            gr3line[1].style.transform="rotate(0deg)";
            gr3line[1].style.transition="all .3s linear";
        }
    var gr4line=document.getElementById("grid_right_4_div").getElementsByTagName("div");
        function gr4Over(){
            gr4line[0].style.transform="rotate(180deg)";
            gr4line[0].style.transition="all .3s linear";
            gr4line[1].style.transform="rotate(-180deg)";
            gr4line[1].style.transition="all .3s linear";
        }
        function gr4Out(){
            gr4line[0].style.transform="rotate(-90deg)";
            gr4line[0].style.transition="all .3s linear";
            gr4line[1].style.transform="rotate(0deg)";
            gr4line[1].style.transition="all .3s linear";
        }
        function arrowup(){
            var circleArrow=document.getElementById("circleArrow");
            var a=circleArrow.getElementsByTagName("i");
            a[0].style.marginTop="0px";
            a[0].style.transition="all .3s linear";
        }
        function scrollScreem(){
            document.body.scrollTop=612;
        }
    var hmBug=document.getElementById("hmBug");
    var lineHumbug=hmBug.getElementsByTagName("div");
        function hamburgerOver(){
            lineHumbug[0].style.transform="translateY(-4px)";
            lineHumbug[0].style.transition="all .1s linear";
            lineHumbug[2].style.transform="translateY(4px)";
            lineHumbug[2].style.transition="all .1s linear";
        }//---------移入菜单的动效
        function humburgerOut(){
            lineHumbug[0].style.transform="translateY(0px)";
            lineHumbug[2].style.transition="all .1s linear";
            lineHumbug[2].style.transform="translateY(0px)";
            lineHumbug[2].style.transition="all .1s linear";
        }//----------移出菜单的动效
    var b1=document.getElementById("donghuaT1");
    var b2=document.getElementById("donghuaT2");
    var b3=document.getElementById("donghuaT3");
    var bt1=document.getElementById("banaerT1");
    var bt2=document.getElementById("banaerT2");
    var bt3=document.getElementById("banaerT3");
    var j=true;/*当第一次加载页面的时候显示第一个轮播图上的文字*/
        setTimeout(function(){
            if(j==true){
                bt1.style.bottom="0px";
                bt3.style.bottom="-330px";
                bt2.style.bottom="-330px";
                bt1.style.transition="all .5s linear";
                j=false;
            }
        },1000);
   setTimeout(seTime,0);
var lunBo;
function seTime(){
     lunBo=setInterval(LbBF,4000);
}
    var k=1;
        function LbBF(){
            if(k==3){
                k=1;
            }else{
                k++;
            }
            boFangAuto(k);
        }//自动播放判断
        function boFangAuto(obj){
            if(obj==1){
                b1.style.left="0px";
                b1.style.zIndex="1";
                b1.style.webkitTransition="all .7s linear";
                b3.style.left="-1349px";
                b3.style.zIndex="2";
                b3.style.webkitTransition="all 1s linear";
                setTimeout(function(){
                    b3.style.left="1349px";
                    b3.style.zIndex="1";
                    b3.style.webkitTransition="";
                },1000);
                b2.style.left="1349px";
                b2.zIndex="-1";
                b2.style.webkitTransition="";
            }else if(obj==2){
                b2.style.left="0px";
                b2.style.webkitTransition="all .7s linear";
                b2.style.zIndex="1";
                b1.style.left="-1349px";
                b1.style.webkitTransition="all 1s linear";
                b1.style.zIndex="2";
                setTimeout(function(){
                    b1.style.left="1349px";
                    b1.style.zIndex="1";
                    b1.style.webkitTransition="";
                },1000);
                b3.style.left="1349px";
                b3.style.zIndex="-1";
                b3.style.webkitTransition="";
            }else if(obj==3){
                b3.style.left="0px";
                b3.style.zIndex="1";
                b3.style.webkitTransition="all .7s linear";
                b2.style.left="-1349px";
                b2.style.zIndex="2";
                b2.style.webkitTransition="all 1s linear";
                setTimeout(function(){
                    b2.style.left="1349px";
                    b2.style.zIndex="1";
                    b2.style.webkitTransition="";
                },1000);
                b1.style.left="1349px";
                b1.style.zIndex="-1";
                b1.style.transition="";
            }
           wenziyishangqu(obj);
        }//-----------自动播放
        function boFang(obj){
            if(obj==1){
                dh1_1();
                clearInterval(lunBo);
            }else if(obj==2){
                dh2_2();
                clearInterval(lunBo);
            }else if(obj==3){
               dh3_3();
                clearInterval(lunBo);
            }
}//------手动播放
        function dh1_1(){
            if(b2.style.left=="0px"||b2.style.left==""){
                b2.style.left="-1349px";
                b2.style.zIndex="2";
                b2.style.webkitTransition="all 1s linear";
                b1.style.left="0px";
                b1.style.zIndex="1";
                b1.style.webkitTransition="all .7s linear";
                setTimeout(function(){
                    b2.style.left="1349px";
                    b1.style.webkitTransition="";
                    b2.style.webkitTransition="";
                    b3.style.webkitTransition="";
                },1000);
            }
            else if(b3.style.left=="0px"){
                b3.style.left="-1349px";
                b3.style.zIndex="2";
                b3.style.webkitTransition="all 1s linear";
                b1.style.left="0px";
                b1.style.zIndex="1";
                b1.style.webkitTransition="all .7s linear";
                setTimeout(function(){
                    b3.style.left="1349px";
                    b1.style.webkitTransition="";
                    b2.style.webkitTransition="";
                    b3.style.webkitTransition="";
                },1000);
            }
            wenziyishangqu();
        }//----------播放1
        function dh2_2(){
            if(b1.style.left=="0px"){
                b1.style.left="-1349px";
                b1.style.zIndex="2";
                b1.style.webkitTransition="all 1s linear";
                b2.style.left="0px";
                b2.style.zIndex="1";
                b2.style.webkitTransition="all .7s linear";
                setTimeout(function(){
                    b1.style.left="1349px";
                    b1.style.webkitTransition="";
                    b2.style.webkitTransition="";
                    b3.style.webkitTransition="";
                },1000);
            }else if(b3.style.left=="0px"){
                b3.style.left="-1349px";
                b3.style.zIndex="2";
                b3.style.webkitTransition="all 1s linear";
                b2.style.left="0px";
                b2.style.zIndex="1";
                b2.style.webkitTransition="all .7s linear";
                setTimeout(function(){
                    b3.style.left="1349px";
                    b1.style.webkitTransition="";
                    b2.style.webkitTransition="";
                    b3.style.webkitTransition="";
                },1000);
            }
            wenziyishangqu();
        }//----------播放2
        function dh3_3(){
            if(b1.style.left=="0px"){
                b1.style.left="-1349px";
                b1.style.zIndex="2";
                b1.style.webkitTransition="all 1s linear";
                b3.style.left="0px";
                b3.style.zIndex="1";
                b3.style.webkitTransition="all .7s linear";
                setTimeout(function(){
                    b1.style.left="1349px";
                    b1.style.webkitTransition="";
                    b2.style.webkitTransition="";
                    b3.style.webkitTransition="";
                },1000);
            }
            if(b2.style.left=="0px"){
                b2.style.left="-1349px";
                b2.style.zIndex="2";
                b2.style.webkitTransition="all 1s linear";
                b3.style.left="0px";
                b3.style.zIndex="1";
                b3.style.webkitTransition="all .7s linear";
                setTimeout(function(){
                    b2.style.left="1349px";
                    b1.style.webkitTransition="";
                    b2.style.webkitTransition="";
                    b3.style.webkitTransition="";
                },1000);
            }
            wenziyishangqu();
        }//----------播放3
        function wenziyishangqu(){
            if(b1.style.left=="0px"){
                bt3.style.bottom="-330px";
                bt3.style.webkitTransition="all .2s linear";
                bt2.style.bottom="-330px";
                setTimeout(function(){
                    bt1.style.bottom="0px";
                    bt1.style.webkitTransition="all .5s linear";
                },1000);

        }else if(b2.style.left=="0px"){
                bt1.style.bottom="-330px";
                bt1.style.webkitTransition="all .2s linear";
                bt3.style.bottom="-330px";
                setTimeout(function(){
                    bt2.style.bottom="0px";
                    bt2.style.webkitTransition="all .5s linear";
                },1000);
            }else if(b3.style.left=="0px"){
                bt1.style.bottom="-330px";
                bt2.style.bottom="-330px";
                bt2.style.webkitTransition="all .2s linear";
                setTimeout(function(){
                    bt3.style.bottom="0px";
                    bt3.style.webkitTransition="all .5s linear";
                },1000);
            }
        }







