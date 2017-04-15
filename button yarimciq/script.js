
$(document).ready(function(){
    $(".btn-default:nth-child(1)").click(function(){
       this.client;
      var x = event.offsetX;
         var y = event.offsetY;
         console.log(x+" "+y)
        $('.content').css({"top":y});
            $('.content').css({"left":x});
            $("ul").show();            
            $('body').append($('.content'));
        console.log(x+"asd"+y)
    })

})