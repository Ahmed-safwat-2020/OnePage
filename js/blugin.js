$(document).ready(function(){
    $(".btn").on({
        mouseenter : function(){
            $(this).find(".color").animate({
                width :"100%"
            },300),
            $(this).find(".text").css("color","#000")
       },
       mouseleave : function(){
        $(this).find(".color").animate({
            width :"0%"
        },300),
        $(this).find(".text").css("color","#fff")
   }
    })
    $(".intro , .intro .overlay").css("width",$(window).width())
    $(".intro , .intro .overlay").css("height",$(window).height())
    $(".Services .btn").on({
        mouseenter : function(){
            $(this).find(".color").animate({
                width :"100%"
            },300),
            $(this).find(".text").css("color","#fff")
       },
       mouseleave : function(){
        $(this).find(".color").animate({
            width :"0%"
        },300),
        $(this).find(".text").css("color","#000")
   }
    }),
    $(".Pricing .content .btn").on({
        mouseenter : function(){
            $(this).find(".color").animate({
                width :"100%"
            },300),
            $(this).find(".text").css("color","#fff")
       },
       mouseleave : function(){
        $(this).find(".color").animate({
            width :"0%"
        },300),
        $(this).find(".text").css("color","#4683df")
   }
    }),
    $(".Pricing .con .btn").on({
        mouseenter : function(){
            $(this).find(".color").animate({
                width :"100%"
            },300),
            $(this).find(".text").css("color","#4683df")
       },
       mouseleave : function(){
        $(this).find(".color").animate({
            width :"0%"
        },300),
        $(this).find(".text").css("color","#fff")
   }
    }),
    $(".Team .content").on({
        mouseenter:function(){
            $(this).find(".overup").fadeIn(500)
        },
         mouseleave:function(){
            $(this).find(".overup").fadeOut(500)
        }
    }),
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            $(".up i").fadeIn(250)
        }else{
            $(".up i").fadeOut(250)
        }
    }),
    $(".up i , .navbar-brand").on({
        click:function(e){
            e.preventDefault()
            $("body,html").animate({
                scrollTop:0
            },1000)
        }
    }),
    $(window).scroll(function(){
        if($(window).scrollTop() >= $(".fornav").offset().top +1){
            $("nav").addClass("fixed-top")
            $(".About").css("paddingTop",$("nav").height()+75)
        }else{
            $("nav").removeClass("fixed-top")
            $(".About").css("paddingTop","75px")
        }
    }),
    $("nav .nav-item").on({
        click:function(e){
            console.log("."+$(this).data("scroll"))
            e.preventDefault()
            $("body ,html").animate({
                scrollTop:$("."+$(this).data("scroll")).offset().top - $("nav").height()
            },1000)
        }
    }),
    $(window).scroll(function(){
        $("section").each(function(){
            if ($(window).scrollTop() +$("nav").innerHeight()+1 > $(this).offset().top){
                $("nav .nav-item[data-scroll='"+$(this).attr("class")+"']").addClass("active").siblings().removeClass("active")
            }
        });    
    })
})